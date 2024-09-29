import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function OutlineButton(props: ComponentProps<"button">) {
	return (
		<button
			{...props}
			className={twMerge(
				"flex items-center gap-2 border-zinc-800 hover:border-zinc-700 focus-visible:border-pink-500 disabled:opacity-50 px-2 py-1 border border-dashed rounded-full ring-pink-500/10 focus-visible:ring-4 text-sm text-zinc-300 leading-none disabled:pointer-events-none outline-none",
				props.className,
			)}
		/>
	);
}
