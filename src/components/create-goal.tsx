import { X, DoorClosed, SaveIcon } from "lucide-react";

import { Button } from "./ui/button";
import {
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import {
	RadioGroup,
	RadioGroupIndicator,
	RadioGroupItem,
} from "./ui/radio-group";
import { Input } from "./ui/input";

import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createGoal } from "../http/create-goal";
import { useQueryClient } from "@tanstack/react-query";

const createGoalForm = z.object({
	title: z.string().min(1, "Informe a atividade que você quer realizar."),
	desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
});

type CreateGoalForm = z.infer<typeof createGoalForm>;

export function CreateGoal() {
	const queryClient = useQueryClient();
	const { register, handleSubmit, control, formState, reset } =
		useForm<CreateGoalForm>({
			resolver: zodResolver(createGoalForm),
		});

	async function handleCreateGoal(data: CreateGoalForm) {
		await createGoal(data);
		queryClient.invalidateQueries({ queryKey: ["summary"] });
		queryClient.invalidateQueries({ queryKey: ["pending-goals"] });
		reset();
	}

	return (
		<DialogContent>
			<div className="flex flex-col gap-6 h-full">
				<div className="flex flex-col gap-3">
					<div className="flex justify-between items-center">
						<DialogTitle>Criar meta</DialogTitle>
						<DialogClose>
							<X className="size={5} text-zinc-600" />
						</DialogClose>
					</div>

					<DialogDescription>
						Adicione atividades que te fazem bem e que você quer continuar
						praticando toda semana.
					</DialogDescription>
				</div>

				<form
					onSubmit={handleSubmit(handleCreateGoal)}
					className="flex flex-col flex-1 justify-between gap-4"
				>
					<div className="flex flex-col gap-6">
						<div className="flex flex-col gap-2">
							<Label htmlFor="title">Qual a atividade?</Label>
							<Input
								autoFocus
								type="text"
								id="title"
								placeholder="ex.: Exercícios, dormir bem, etc..."
								className="bg-zinc-900 px-4 py-3 rounded-lg text-sm placeholder:text-zinc-500"
								{...register("title")}
							/>
							{formState.errors.title && (
								<p className="text-red-500 text-sm">
									{formState.errors.title.message}
								</p>
							)}
						</div>
						<div className="flex flex-col gap-2">
							<Label htmlFor="description">Quantas vezes por semana?</Label>
							<Controller
								control={control}
								name="desiredWeeklyFrequency"
								defaultValue={1}
								render={({ field }) => {
									return (
										<RadioGroup
											onValueChange={field.onChange}
											value={String(field.value)}
										>
											<RadioGroupItem value="1">
												<RadioGroupIndicator />
												<span className="font-medium text-sm text-zinc-300 leading-none">
													1x por semana
												</span>
												<span className="text-lg leading-none">🥱</span>
											</RadioGroupItem>{" "}
											<RadioGroupItem value="2">
												<RadioGroupIndicator />
												<span className="font-medium text-sm text-zinc-300 leading-none">
													2x por semana
												</span>
												<span className="text-lg leading-none">🙂</span>
											</RadioGroupItem>{" "}
											<RadioGroupItem value="3">
												<RadioGroupIndicator />
												<span className="font-medium text-sm text-zinc-300 leading-none">
													3x por semana
												</span>
												<span className="text-lg leading-none">😎</span>
											</RadioGroupItem>{" "}
											<RadioGroupItem value="4">
												<RadioGroupIndicator />
												<span className="font-medium text-sm text-zinc-300 leading-none">
													4x por semana
												</span>
												<span className="text-lg leading-none">😜</span>
											</RadioGroupItem>{" "}
											<RadioGroupItem value="5">
												<RadioGroupIndicator />
												<span className="font-medium text-sm text-zinc-300 leading-none">
													5x por semana
												</span>
												<span className="text-lg leading-none">🤨</span>
											</RadioGroupItem>{" "}
											<RadioGroupItem value="6">
												<RadioGroupIndicator />
												<span className="font-medium text-sm text-zinc-300 leading-none">
													6x por semana
												</span>
												<span className="text-lg leading-none">🤯</span>
											</RadioGroupItem>{" "}
											<RadioGroupItem value="7">
												<RadioGroupIndicator />
												<span className="font-medium text-sm text-zinc-300 leading-none">
													Todos os dias da semana
												</span>
												<span className="text-lg leading-none">🔥</span>
											</RadioGroupItem>
										</RadioGroup>
									);
								}}
							/>
						</div>
					</div>
					<div className="flex items-center gap-3">
						<DialogClose asChild>
							<Button type="button" variant="secondary" className="flex-1">
								<DoorClosed className="size={4}" />
								Fechar
							</Button>
						</DialogClose>
						<Button type="submit" className="flex-1">
							<SaveIcon className="size={4}" />
							Salvar
						</Button>
					</div>
				</form>
			</div>
		</DialogContent>
	);
}
