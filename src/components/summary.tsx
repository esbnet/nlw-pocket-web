import { CheckCircle2, Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { InOrbitIcon } from './ui/in-orbit-icon'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from '../http/get-summary'
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'
import { PendingGoals } from './pending-goals'

dayjs.locale(ptBR)

export function Summary() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60 * 1, // 1 minutes
  })

  const firstDayOfWeek = dayjs().startOf('week').format('D MMM')
  const lastDayOfWeek = dayjs().endOf('week').format('D MMM')

  if (!data) {
    return null
  }

  const progressValue = Math.round((data.completed * 100) / data.total)

  return (
    <div className="flex flex-col gap-6 mx-auto px-5 py-10 max-w-[480px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="font-semibold text-lg capitalize">
            {firstDayOfWeek} - {lastDayOfWeek}
          </span>
        </div>
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size={4}" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={progressValue} max={100}>
          <ProgressIndicator style={{ width: `${progressValue}%` }} />
        </Progress>

        <div className="flex justify-between items-center text-xs text-zinc-400">
          <span>
            Você completou{' '}
            <span className="text-zinc-100">{data?.completed}</span> de{' '}
            <span className="text-zinc-100">{data?.total}</span> metas nessa
            semana.
          </span>
          <span>{progressValue}%</span>
        </div>
      </div>

      <Separator />

      <PendingGoals />

      <div className="flex flex-col gap-6">
        <h2 className="font-medium text-xl">Seu planejamento semanal</h2>

        {Object.entries(data.goalsPerDay).map(([date, goal]) => {
          const weekDay = dayjs(date).format('dddd')
          const formattedDate = dayjs(date).format('D[ de ]MMMM')

          return (
            <div className="flex flex-col gap-4" key={date}>
              <h3 className="font-medium">
                <span className="capitalize">{`${weekDay} `}</span>
                <span className="text-xs text-zinc-400">({formattedDate})</span>
              </h3>

              <ul className="flex flex-col gap-3">
                {goal.map(goal => {
                  const time = dayjs(goal.completedAt).format('H:mm')
                  return (
                    <li className="flex items-center gap-2" key={goal.id}>
                      <CheckCircle2 className="text-pink-500 size-4" />
                      <span className="text-sm text-zinc-400">
                        Você completou
                        <span className="text-zinc-100"> {goal.title} </span>às{' '}
                        <span className="text-zinc-100"> {time}h</span>
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
