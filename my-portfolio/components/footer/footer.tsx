"use client";

import type React from "react";

export default function Footer(): React.JSX.Element {
	const currentYear: number = new Date().getFullYear();

	return (
		<footer className="w-full bg-(--color-ft-bg) border-t border-(--nav-border-color) py-6 transition-colors duration-300 relative overflow-hidden group/footer">
			{/* Subtle top background glow indicator */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-linear-to-r from-transparent via-teal to-transparent opacity-0 group-hover/footer:opacity-100 transition-opacity duration-700" />

			<div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between flex-wrap gap-4 relative z-10">
				{/* Brand Logo Token - Scaled down from text-lg to text-sm */}
				<span className="inline-block font-mono font-bold text-sm tracking-wide transition-all duration-500 ease-out hover:scale-105">
					{/* Opening Bracket */}
					<span className="text-teal">&lt;&nbsp;</span>
					<span className="text-teal-dark">AAJ.Asis</span>
					<span className="text-teal">&nbsp;/&gt;</span>
				</span>

				{/* Main Copyright Text - Scaled down from text-[0.83rem] to text-xs */}
				<p className="font-sans text-xs tracking-wide text-text transition-colors duration-300">
					&copy; {currentYear}{" "}
					<span className="font-medium opacity-80">Althea Amor J. Asis</span>.
					Built with passion &amp; curiosity.
				</p>

				{/* Animated Social Links - Scaled down from text-[0.82rem] to text-xs */}
				<div className="flex gap-4 font-mono text-xs">
					{[
						{ label: "GitHub", href: "https://github.com/" },
						{ label: "LinkedIn", href: "https://linkedin.com/" },
						{ label: "Email", href: "mailto:althea@email.com" },
					].map((link) => (
						<a
							key={link.label}
							href={link.href}
							target={link.label !== "Email" ? "_blank" : undefined}
							rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
							className="relative text-text no-underline transition-all duration-300 hover:text-teal hover:-translate-y-[1px] group/link"
						>
							{link.label}
							{/* Fixed structural typos on underline height */}
							<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-teal transition-all duration-300 group-hover/link:w-full" />
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
