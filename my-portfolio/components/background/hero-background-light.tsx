"use client";

import type React from "react";
import { useEffect, useState } from "react";

interface LeafConfig {
	id: number;
	left: string;
	size: string;
	duration: string;
	delay: string;
	color: string;
	rotateStart: number;
	sway: string;
}

export default function HeroBackgroundLight(): React.JSX.Element {
	const [leaves, setLeaves] = useState<LeafConfig[]>([]);

	useEffect(() => {
		const leafCount = 20; // Slightly increased for better ambient coverage

		// Using the custom teal colors configured in your globals.css
		const leafColors: string[] = [
			"var(--color-teal, #0d9488)",
			"var(--color-teal-light, #5eead4)",
			"var(--color-teal-dark, #134e4a)",
			"rgba(13, 148, 136, 0.3)", // Ambient transparent leaf
		];

		const configuredLeaves: LeafConfig[] = Array.from({
			length: leafCount,
		}).map((_, i) => ({
			id: i,
			left: `${Math.random() * 100}%`,
			size: `${10 + Math.random() * 12}px`, // Slightly broader variance
			duration: `${10 + Math.random() * 8}s`, // Slower, more calming fall speed
			delay: `${Math.random() * -18}s`,
			color: leafColors[Math.floor(Math.random() * leafColors.length)],
			rotateStart: Math.random() * 360,
			sway: `${30 + Math.random() * 50}px`,
		}));

		setLeaves(configuredLeaves);
	}, []);

	return (
		<div className="fixed inset-0 z-[-2] pointer-events-none overflow-hidden bg-background perspective:1000px">
			{/* Ambient Spotlight / Vignette Depth Layer */}
			<div className="absolute inset-0 bg-linear-to-b from-teal-50/20 via-transparent to-transparent" />
			<div className="absolute inset-0 bg-radial-[circle_at_50%_30%] from-transparent via-transparent to-teal-pale/40 mix-blend-multiply" />

			{/* Creative Minimalist Background Accents */}
			<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-radial-[circle_at_center] from-teal-100/15 via-teal-50/5 to-transparent blur-3xl animate-[pulse_12s_ease-in-out_infinite]" />
			<div className="absolute bottom-[10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-radial-[circle_at_center] from-teal-200/10 via-teal-100/5 to-transparent blur-3xl animate-[pulse_16s_ease-in-out_infinite_2s]" />

			{/* Premium Fine-Line Minimalist Grid (Creative Layer) */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(13,148,136,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(13,148,136,0.03)_1px,transparent_1px)] bg-size:4rem_4rem mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)" />

			{/* Elegant Minimal Horizon Light Flare */}
			<div className="absolute top-0 left-1/4 right-1/4 h-1px bg-linear-to-r from-transparent via-teal-500/10 to-transparent" />

			{/* ========================================== */}
			{/* NEW DESIGN ADDITIONS (Unobtrusive Layers) */}
			{/* ========================================== */}

			{/* Premium Tactile Grain/Noise Overlay */}
			<div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZHRoPSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4=')]" />

			{/* Modernist Asymmetric Fine-Line Vector Accents */}
			<div className="absolute top-[20%] left-[15%] w-72 h-72 border border-teal-500/5 rounded-full pointer-events-none mix-blend-screen animate-[spin_120s_linear_infinite]" />
			<div className="absolute top-[20%] left-[15%] w-72 h-72 border-t border-l border-teal-400/10 rounded-full pointer-events-none mix-blend-screen animate-[spin_40s_linear_infinite_reverse]" />
			<div className="absolute top-[35%] right-[12%] w-1px h-40 bg-linear-to-b from-transparent via-teal-500/10 to-transparent hidden md:block" />

			{/* Subtle Aurora Light-Leak Wave */}
			<div className="absolute top-[15%] left-1/3 w-[60vw] h-[25vh] bg-linear-to-tr from-teal-300/5 to-transparent blur-[120px] rounded-[40px] transform -rotate-12 pointer-events-none" />

			{/* ========================================== */}

			{/* Global Styled Keyframe Injector */}
			<style>{`
                @keyframes realistic-fall {
                    0% {
                        transform: translateY(-12vh) translateX(0)
                            rotate(var(--leaf-rotate-start, 0deg)) rotateX(0deg) rotateY(0deg);
                        opacity: 0;
                    }
                    5% {
                        opacity: 0.6;
                    }
                    20% {
                        transform: translateY(15vh) translateX(calc(var(--leaf-sway, 30px) * 1.2))
                            rotate(calc(var(--leaf-rotate-start, 0deg) + 45deg)) rotateX(50deg) rotateY(20deg);
                    }
                    40% {
                        transform: translateY(42vh) translateX(calc(var(--leaf-sway, 30px) * -1.4))
                            rotate(calc(var(--leaf-rotate-start, 0deg) + 110deg)) rotateX(130deg) rotateY(-40deg);
                    }
                    60% {
                        transform: translateY(68vh) translateX(calc(var(--leaf-sway, 30px) * 1.5))
                            rotate(calc(var(--leaf-rotate-start, 0deg) + 190deg)) rotateX(210deg) rotateY(50deg);
                    }
                    80% {
                        transform: translateY(92vh) translateX(calc(var(--leaf-sway, 30px) * -1.1))
                            rotate(calc(var(--leaf-rotate-start, 0deg) + 280deg)) rotateX(290deg) rotateY(-30deg);
                    }
                    95% {
                        opacity: 0.5;
                    }
                    100% {
                        transform: translateY(115vh) translateX(calc(var(--leaf-sway, 30px) * 0.6))
                            rotate(calc(var(--leaf-rotate-start, 0deg) + 360deg)) rotateX(360deg) rotateY(10deg);
                        opacity: 0;
                    }
                }
            `}</style>

			{/* ===== Falling Leaves Layer ===== */}
			{leaves.map((leaf) => {
				const leafStyle: React.CSSProperties & {
					"--leaf-rotate-start"?: string;
					"--leaf-sway"?: string;
				} = {
					left: leaf.left,
					width: leaf.size,
					height: leaf.size,
					animationDuration: leaf.duration,
					animationDelay: leaf.delay,
					"--leaf-rotate-start": `${leaf.rotateStart}deg`,
					"--leaf-sway": leaf.sway,
					animationName: "realistic-fall",
					animationTimingFunction: "ease-in-out",
					animationIterationCount: "infinite",
					transformStyle: "preserve-3d",
				};

				return (
					<svg
						key={leaf.id}
						className="absolute top-0 pointer-events-none drop-shadow-[0_4px_6px_rgba(13,148,136,0.08)]"
						style={leafStyle}
						viewBox="0 0 24 24"
						fill={leaf.color}
						aria-hidden="true"
					>
						<path d="M 2,22 C 1,15 5,5 12,3 C 18,2 22,7 22,12 C 22,18 14,23 2,22 Z" />
						<path
							d="M 2,22 C 7,16 14,9 22,3"
							stroke="rgba(255,255,255,0.3)"
							strokeWidth="1"
							strokeLinecap="round"
							fill="none"
						/>
					</svg>
				);
			})}
		</div>
	);
}
