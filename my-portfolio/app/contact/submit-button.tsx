"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			disabled={pending}
			className="w-full rounded-lg bg-[#0d9488] px-3 py-2 text-white transition-all duration-200 hover:opacity-90 hover:cursor-pointer disabled:opacity-60 disabled:hover:cursor-not-allowed"
		>
			{pending ? "Sending..." : "Send Message"}
		</button>
	);
}
