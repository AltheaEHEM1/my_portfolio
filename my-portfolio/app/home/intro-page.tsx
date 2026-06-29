"use client";

import Image from "next/image";
import Link from "next/link";

const IntroPage = () => {
	return (
		<div className="relative mt-3 flex items-center justify-center overflow-hidden">
			{/* Background Glow */}
			<div
				className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] pointer-events-none opacity-70 w-150 h-100"
				style={{ backgroundColor: "var(--teal-pale, rgba(20,184,166,0.15))" }}
			/>

			<div
				className="relative z-10 w-full max-w-7xl mx-auto border shadow-2xl backdrop-blur-md px-6 sm:px-12 pb-12 md:pb-6 flex flex-col justify-between min-h-auto mt-0"
				style={{
					backgroundColor: "rgba(255, 255, 255, 0.15)",
					borderColor: "var(--border, rgba(255,255,255,0.25))",
					borderRadius: "2rem",
				}}
			>
				{/* Title Bar */}
				<div
					className="title-bar flex items-center justify-between px-5 py-3 border-b z-10"
					style={{ borderColor: "var(--border, rgba(255,255,255,0.2))" }}
				>
					<div className="flex items-center gap-2">
						<span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
						<span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
						<span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
					</div>
					<span
						className="text-xs font-mono tracking-wider opacity-60"
						style={{ color: "var(--text, #1a2e2a)" }}
					>
						home.tsx
					</span>
					<div className="w-12"></div>
				</div>

				{/* Foreground Content */}
				<div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full grow mt-4">
					{/* Image (Left Side) */}
					<div className="md:col-span-4 flex justify-center md:justify-start relative h-72 sm:h-80 md:h-96 w-full order-1">
						<div className="relative w-full h-full max-w-full">
							<Image
								src="/assets/me_1.png"
								alt="Althea Amor"
								fill
								priority
								className="object-contain object-bottom drop-shadow-[0_8px_20px_rgba(13,148,136,0.15)]"
							/>
						</div>
					</div>

					{/* Text and Buttons (Right Side) */}
					<div className="md:col-span-8 flex flex-col items-center md:items-start text-center md:text-left pb-4 order-2 px-2">
						<div
							className="relative z-0 opacity-35 font-black tracking-widest mt-8 pointer-events-none select-none"
							style={{ fontFamily: "var(--font-valorant, sans-serif)" }}
						>
							<div className="flex flex-col">
								<h2
									className="text-teal-600"
									style={{
										fontSize: "45px",
										WebkitTextStroke: "6px #000000",
										paintOrder: "stroke fill",
										lineHeight: "1",
										fontFamily: "var(--font-valorant, sans-serif)",
									}}
								>
									hi, i am
								</h2>

								<h1
									className="text-teal-600"
									style={{
										fontSize: "90px",
										WebkitTextStroke: "6px #000000",
										paintOrder: "stroke fill",
										lineHeight: "1",
									}}
								>
									ALTHEA AMOR
								</h1>
							</div>
						</div>
						<h5 className="text-2xl font-bold font-orbitron text-teal-dark mb-1">
							Welcome to My Portfolio
						</h5>
						<p
							className="text-sm sm:text-base leading-relaxed max-w-md font-light font-poppins"
							style={{
								color: "var(--text, #1a2e2a)",
							}}
						>
							A BS Information Technology student turning real problems into
							working software — from full-stack web apps to clean, minimalist
							interfaces.
						</p>
						<div className="flex flex-row gap-4 pt-2 w-full justify-center md:justify-start max-w-sm">
							<Link
								href="/projects"
								className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 shadow-md active:scale-95 group relative overflow-hidden"
								style={{
									fontFamily: "var(--font-poppins, sans-serif)",
									backgroundColor: "var(--teal, #0d9488)",
									borderRadius: "1rem",
								}}
							>
								<span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
								view my work
							</Link>
							<Link
								href="/contact"
								className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-widest border transition-all duration-300 active:scale-95"
								style={{
									fontFamily: "var(--font-poppins, sans-serif)",
									color: "var(--nav-teal, #115e59)",
									borderColor: "rgba(13, 148, 136, 0.2)",
									backgroundColor:
										"var(--nav-bg-btn, rgba(187, 247, 237, 0.62))",
									borderRadius: "1rem",
								}}
							>
								Let's Talk
							</Link>
						</div>
					</div>
				</div>

				{/* Footer Badge */}
				<span
					className="absolute bottom-4 right-5 px-3 py-1 text-[9px] uppercase tracking-wider font-semibold z-20"
					style={{
						fontFamily: "var(--font-orbitron, sans-serif)",
						backgroundColor: "var(--nav-bg-color, rgba(0,0,0,0.2))",
						color: "var(--nav-teal, #0d9488)",
						borderRadius: "9999px",
					}}
				>
					IT Student
				</span>
			</div>
		</div>
	);
};

export default IntroPage;
