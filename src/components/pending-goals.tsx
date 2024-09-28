import { Plus } from "lucide-react";
import { OutlineButton } from "./ui/outline-button";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { getPendingGoals } from "../http/get-pending";
import { createGoalCompletion } from "../http/create-goal-completion";

export function PendingGoals() {
	const queryClient = new QueryClient();

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
			{data.map((goal) => (
				<OutlineButton
					key={goal.id}
					disabled={goal.goalsCompletionCounts >= goal.desiredWeeklyFrequency}
					onClick={() => handleCompleteGoal(goal.id)}
				>
					<Plus className="size={4} text-zinc-600" />
					{goal.title}
				</OutlineButton>
			))}
		</div>
	);
}
