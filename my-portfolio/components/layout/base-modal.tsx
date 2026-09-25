"use client";

import { X } from "lucide-react";
import type React from "react";
import { useEffect } from "react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	children: React.ReactNode;
}

const Modal = ({
	isOpen,
	onClose,
	title = "modal.tsx",
	children,
}: ModalProps) => {
	// Close modal on pressing the 'Escape' key & lock body scroll
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		if (isOpen) {
			document.body.style.overflow = "hidden";
			window.addEventListener("keydown", handleKeyDown);
		}
		return () => {
			document.body.style.overflow = "unset";
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6"
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title"
		>
			{/* Backdrop overlay */}
			<button
				type="button"
				aria-label="Close modal"
				className="fixed inset-0 cursor-default bg-black/60 backdrop-blur-sm transition-opacity"
				onClick={onClose}
			></button>

			{/* Modal Container */}
			<div className="relative z-10 flex max-h-[calc(100vh-2rem)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl animate-in fade-in zoom-in-95 duration-200 sm:max-h-[calc(100vh-3rem)]">
				{/* Mac-style Title Bar */}
				<div className="title-bar z-10 flex items-center justify-between border-b border-border bg-background/50 px-5 py-3">
					<div className="flex items-center gap-2">
						<button
							type="button"
							onClick={onClose}
							className="h-2.5 w-2.5 rounded-full bg-[#ff5f56] transition-opacity hover:opacity-80"
							title="Close"
							aria-label="Close modal"
						/>
						<span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]"></span>
						<span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]"></span>
					</div>

					<span
						id="modal-title"
						className="text-sm font-mono tracking-wider text-foreground"
					>
						{title}
					</span>

					<button
						type="button"
						onClick={onClose}
						className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
						title="Close modal"
						aria-label="Close modal"
					>
						<X className="h-4 w-4" aria-hidden="true" />
					</button>
				</div>

				{/* Modal Body Content */}
				<div className="max-h-[calc(100vh-6rem)] overflow-y-auto p-6 font-poppins sm:max-h-[calc(100vh-7rem)] sm:p-8">
					{children}
				</div>
			</div>
		</div>
	);
};

export default Modal;
