"use client";

import {
	animate,
	motion,
	useInView,
	useMotionValue,
	useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/badge/badge";

const HeaderAbout = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	// State to control the sequence of appearance
	const [step, setStep] = useState(0);

	const nameText = "ALTHEA AMOR J. ASIS";
	const bodyText =
		"I'm a fourth year BS Information Technology student with a genuine love for building things that work.\n\n" +
		"Highly detail-oriented Information Technology student and aspiring professional specializing in software development. " +
		"Proven background in UI/UX design, frontend development, and visual design, with a focus on building aesthetic and functional interfaces. " +
		"Skilled in creating user flows, process flows, charts, and graphs to simplify complex systems and improve project flows. " +
		"Continuously expanding technical knowledge by exploring emerging tools and modern design approaches.\n\n" +
		"Currently deepening expertise in backend development and cybersecurity to ensure the creation of secure, data-driven, and scalable applications. " +
		"Dedicated to professional growth and committed to becoming a well-rounded developer capable of handling the full software development lifecycle.";

	// Helper to create typing effect
	const useTyping = (text: string) => {
		const count = useMotionValue(0);
		const rounded = useTransform(count, (latest) => Math.round(latest));
		const display = useTransform(rounded, (latest) => text.slice(0, latest));
		const start = () =>
			animate(count, text.length, {
				duration: text.length * 0.02,
				ease: "linear",
			});
		return { display, start };
	};

	const name = useTyping(nameText);
	const body = useTyping(bodyText);

	useEffect(() => {
		if (isInView && step === 0) {
			const sequence = async () => {
				await name.start(); 
				setStep(1); 
				await new Promise((r) => setTimeout(r, 300));
				setStep(2); 
				await body.start(); 
				setStep(3); 
			};
			sequence();
		}
	}, [isInView, step, name.start, body.start]);

	return (
		<div
			ref={ref}
			className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 pt-2 items-center"
		>
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				className="md:col-span-5 relative flex justify-center md:justify-end"
			>
				{/* Changed max-w-xs to max-w-sm or max-w-md for a larger footprint */}
				<div className="relative group w-full max-w-sm md:max-w-md"> 
					<div className="aspect-4/5 overflow-hidden border border-teal-500/20 rounded-2xl shadow-inner relative transition-all duration-300 group-hover:border-teal-500/50">
						<div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0 pointer-events-none p-4">
							<h2
								className="text-teal-600 dark:text-teal-400 tracking-widest uppercase rotate-[-5deg] opacity-20 select-none text-center"
								style={{
									fontSize: "clamp(40px, 8vw, 80px)",
									WebkitTextStroke: "3px var(--text)",
									paintOrder: "stroke fill",
									lineHeight: "1.2",
									fontFamily: "var(--font-valorant, sans-serif)",
								}}
							>
								Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio
								Portfolio Portfolio Portfolio Portfolio
							</h2>
						</div>
						<Image 
							src="/assets/avatar.png" 
							alt="Althea" 
							fill 
							className="object-cover" 
						/>
					</div>
				</div>
			</motion.div>

			<div className="md:col-span-6 pt-5 text-center md:text-left">
				{/* 1. Name */}
				<h2 className="text-4xl font-valorant text-foreground min-h-10">
					<motion.span>{name.display}</motion.span>
				</h2>

				{/* 2. Badge */}
				{step >= 1 && (
					<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
						{/* Added dark mode background/text classes */}
						<Badge className="bg-teal-100/50 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
							<span className="size-1 rounded-full bg-teal-700 dark:bg-teal-400 animate-pulse"></span>
							{"// Designing Solution · Building Reality"}
						</Badge>
					</motion.div>
				)}

				{/* 3. Body */}
				{step >= 2 && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="mt-5 text-muted-foreground text-sm font-mono text-justify whitespace-pre-wrap"
					>
						<motion.span>{body.display}</motion.span>
					</motion.div>
				)}

				{/* 4. Footer Buttons */}
				{step >= 3 && (
					<motion.footer
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className="flex flex-row gap-3 justify-center md:justify-start w-full max-w-sm mt-5"
					>
						{/* View My Work - Using theme colors */}
						<Link
							href="/projects"
							className="inline-flex items-center justify-center px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white transition-all duration-300 shadow-md active:scale-95 hover:scale-105 hover:bg-teal-700 bg-teal-600 rounded-xl group relative overflow-hidden"
						>
							<span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
							view my work
						</Link>

						{/* Download CV - Using theme borders/backgrounds */}
						<Link
							href="/assets/Althea_Amor_Asis_CV.pdf"
							target="_blank"
							className="inline-flex items-center justify-center px-4 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 active:scale-95 hover:scale-105 bg-teal-50 border-teal-200 text-teal-800 dark:bg-teal-900/20 dark:border-teal-800 dark:text-teal-200 hover:bg-teal-100 dark:hover:bg-teal-800/40 rounded-xl"
						>
							Download CV
						</Link>
					</motion.footer>
				)}
			</div>
		</div>
	);
};

export default HeaderAbout;
