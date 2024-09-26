import { Check, CheckCircle, CheckCircle2, Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { InOrbitIcon } from './ui/in-orbit-icon'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { OutlineButton } from './ui/outline-button'

export function Summary() {
  return (
    <div className="flex flex-col gap-6 mx-auto px-5 py-10 max-w-[480px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="font-semibold text-lg">5 a 10 de Agosto</span>
        </div>
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size={4}" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={3} max={10}>
          <ProgressIndicator style={{ width: '33%' }} />
        </Progress>

        <div className="flex justify-between items-center text-xs text-zinc-400">
          <span>
            Você completou <span className="text-zinc-100">8</span> de{' '}
            <span className="text-zinc-100">15</span> metas nessa semana.
          </span>
          <span>33%</span>
        </div>
      </div>

      <Separator />

      <div className="flex flex-wrap gap-3">
        <OutlineButton>
          <Plus className="text-zinc-600 size-4" />
          Meditar
        </OutlineButton>
        <OutlineButton>
          <Plus className="text-zinc-600 size-4" />
          Praticar exercícios
        </OutlineButton>
        <OutlineButton>
          <Plus className="text-zinc-600 size-4" />
          Acordar cedo
        </OutlineButton>
        <OutlineButton>
          <Plus className="text-zinc-600 size-4" />
          Acordar cedo
        </OutlineButton>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="font-medium text-xl">Sua Semana</h2>

        <div className="flex flex-col gap-4">
          <h3 className="font-medium">
            Domingo{' '}
            <span className="text-xs text-zinc-400">(10 de Agosto)</span>
          </h3>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-pink-500 size-4" />
              <span className="text-sm text-zinc-400">
                Você completou
                <span className="text-zinc-100"> "Acordar cedo" </span>às
                <span className="text-zinc-100"> 08:20h </span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-pink-500 size-4" />
              <span className="text-sm text-zinc-400">
                Você completou
                <span className="text-zinc-100"> "Acordar cedo" </span>às
                <span className="text-zinc-100"> 08:20h </span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-pink-500 size-4" />
              <span className="text-sm text-zinc-400">
                Você completou
                <span className="text-zinc-100"> "Acordar cedo" </span>às
                <span className="text-zinc-100"> 08:20h </span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-pink-500 size-4" />
              <span className="text-sm text-zinc-400">
                Você completou
                <span className="text-zinc-100"> "Acordar cedo" </span>às
                <span className="text-zinc-100"> 08:20h </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
