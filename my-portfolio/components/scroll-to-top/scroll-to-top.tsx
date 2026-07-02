"use client";

import { ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";
import type React from "react";
import { useEffect, useState } from "react";

export default function ScrollToTop(): React.JSX.Element | null {
	const pathname = usePathname();
	const [mounted, setMounted] = useState(false);
	const [shouldHide, setShouldHide] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// biome-ignore lint/correctness/useExhaustiveDependencies: Re-check page type whenever pathname changes
	useEffect(() => {
		if (!mounted) return;

		const checkPageType = () => {
			const errorPage = document.querySelector(
				'[data-page-type="error"], [data-page-type="forbidden"], [data-page-type="not-found"]',
			);
			setShouldHide(!!errorPage);
		};

		// Check immediately
		checkPageType();

		// Schedule check on next tick to ensure child page content is fully in DOM
		const timer = setTimeout(checkPageType, 0);

		return () => clearTimeout(timer);
	}, [pathname, mounted]);

	const scrollToTop = (): void => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	if (!mounted || shouldHide) {
		return null;
	}

	return (
		<button type="button"
			onClick={scrollToTop}
			className="flex flex-col items-center mb-5 group cursor-pointer transition-all hover:-translate-y-1"
			aria-label="Scroll to top"
		>
			<div className="flex flex-col items-center">
				{/* Chevron Icon */}
				<ChevronUp
					size={18}
					className="mb-[-4px] transition-transform group-hover:scale-110"
					style={{ color: "var(--text-title)" }}
				/>

				{/* Decorative Lines */}
				<div
					className="w-[1.5px] h-6 shadow-[0_0_12px_rgba(16,185,129,0.3)]"
					style={{ backgroundColor: "rgba(var(--glow-color), 0.6)" }}
				/>
				<div
					className="w-[1.5px] h-4 mt-1"
					style={{ backgroundColor: "rgba(var(--glow-color), 0.2)" }}
				/>
			</div>

			{/* Label */}
			<span className="mt-4 text-[10px] tracking-[0.3em] font-valorant transition-colors">
				SCROLL UP
			</span>
		</button>
	);
}
