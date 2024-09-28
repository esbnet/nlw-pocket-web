import { CirclePlay } from "lucide-react";

export function EmptyCompleteGoals() {
	return (
		<div className="flex flex-col justify-center items-center gap-4">
			<CirclePlay size={32} />
			<p className="max-w-80 text-center text-zinc-300 leading-relaxed">
				Você ainda não concluiu nenhuma meta, que tal iniciar agora mesmo?
			</p>
		</div>
	);
}
