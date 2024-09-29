import { CircleOff, PartyPopper, Plus, SaveIcon, X } from "lucide-react";
import { OutlineButton } from "./ui/outline-button";
import { useQuery } from "@tanstack/react-query";
import { getPendingGoals } from "../http/get-pending";
import { createGoalCompletion } from "../http/create-goal-completion";

import { useQueryClient } from "@tanstack/react-query";

export function PendingGoals() {
	const queryClient = useQueryClient();

	const { data } = useQuery({
		queryKey: ["pending-goals"],
		queryFn: getPendingGoals,
		staleTime: 1000 * 60, // 1 minutes
	});

	if (!data) {
		return null;
	}

	async function handleCompleteGoal(goalId: string) {
		await createGoalCompletion(goalId);

		queryClient.invalidateQueries({ queryKey: ["summary"] });
		queryClient.invalidateQueries({ queryKey: ["pending-goals"] });
	}

	return (
		<div className="flex flex-wrap gap-3">
			{data.map((goal) => {
				const remaining =
					goal.desiredWeeklyFrequency - goal.goalsCompletionCounts;
				return (
					<OutlineButton
						key={goal.id}
						disabled={goal.goalsCompletionCounts >= goal.desiredWeeklyFrequency}
						onClick={() => handleCompleteGoal(goal.id)}
					>
						{remaining > 0 ? (
							<>
								<Plus className="size={4} text-zinc-600" />
								{goal.title}
								<span className="mt-[-12px] p-1 font-thin text-red-500/50 text-xs">
									{goal.goalsCompletionCounts}/{goal.desiredWeeklyFrequency}
								</span>
							</>
						) : (
							<>
								<span className="p-1 line-through">{goal.title}</span>
							</>
						)}
					</OutlineButton>
				);
			})}
		</div>
	);
}
