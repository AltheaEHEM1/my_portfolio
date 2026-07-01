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
				await name.start(); // Wait for name to finish
				setStep(1); // Trigger Badge
				await new Promise((r) => setTimeout(r, 300));
				setStep(2); // Trigger Paragraph
				await body.start(); // Wait for body to finish
				setStep(3); // Trigger Buttons
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
				<div className="relative group w-full max-w-xs">
					<div className="aspect-4/5 overflow-hidden border border-teal-500/20 rounded-2xl shadow-inner relative transition-all duration-300 group-hover:border-teal-500/50">
						{/* Background Text Layer: Positioned absolutely to sit behind, not touching the avatar */}
						<div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0 pointer-events-none p-4">
							<h2
								className="text-teal-600 tracking-widest uppercase rotate-[-5deg] opacity-20 select-none text-center"
								style={{
									fontSize: "50px",
									WebkitTextStroke: "3px #000000",
									paintOrder: "stroke fill",
									lineHeight: "1.2",
									fontFamily: "var(--font-valorant, sans-serif)",
								}}
							>
								Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio
								Portfolio Portfolio Portfolio Portfolio
							</h2>
						</div>

						{/* Avatar Layer: Position remains exactly as before */}
						<Image src="/assets/avatar.png" alt="Althea" fill />
					</div>
				</div>
			</motion.div>

			{/* Content Column */}
			<div className="md:col-span-6 pt-5 text-center md:text-left">
				{/* 1. Name */}
				<h2 className="text-3xl font-valorant text-gray-900 min-h-10">
					<motion.span>{name.display}</motion.span>
				</h2>

				{/* 2. Badge */}
				{step >= 1 && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
					>
						<Badge className="bg-green-100 text-green-700">
							<span className="size-1 rounded-full bg-teal-700 animate-pulse"></span>
							{"// Designing Solution · Building Reality"}
						</Badge>
					</motion.div>
				)}

				{/* 3. Body */}
				{step >= 2 && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="mt-5 text-gray-700 text-xs font-mono text-justify whitespace-pre-wrap"
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
						{/* View My Work Link */}
						<Link
							href="/projects"
							className="inline-flex items-center justify-center px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white transition-all duration-300 shadow-md active:scale-95 hover:scale-105 hover:bg-teal-700 group relative overflow-hidden"
							style={{
								fontFamily: "var(--font-poppins, sans-serif)",
								backgroundColor: "var(--teal, #0d9488)",
								borderRadius: "0.75rem",
							}}
						>
							<span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
							view my work
						</Link>

						{/* Download CV Link */}
						<Link
							href="/assets/Althea_Amor_Asis_CV.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center px-4 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 active:scale-95 hover:scale-105 hover:bg-teal-200 hover:border-teal-400"
							style={{
								fontFamily: "var(--font-poppins, sans-serif)",
								color: "var(--nav-teal, #115e59)",
								borderColor: "rgba(13, 148, 136, 0.2)",
								backgroundColor: "var(--nav-bg-btn, rgba(187, 247, 237, 0.62))",
								borderRadius: "0.75rem",
							}}
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
