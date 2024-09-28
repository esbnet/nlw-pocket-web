import { Plus } from 'lucide-react'
import { OutlineButton } from './ui/outline-button'
import { useQuery } from '@tanstack/react-query'
import { getPendingGoals } from '../http/get-pending'

export function PendingGoals() {
  const { data } = useQuery({
    queryKey: ['pending-goals'],
    queryFn: getPendingGoals,
    staleTime: 1000 * 60 * 1, // 1 minutes
  })

  if (!data) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-3">
      {data.map(goal => (
        <OutlineButton
          key={goal.id}
          disabled={goal.goalsCompletionCounts >= goal.desiredWeeklyFrequency}
        >
          <Plus className="size={4} text-zinc-600" />
          {goal.title}
        </OutlineButton>
      ))}
    </div>
  )
}
