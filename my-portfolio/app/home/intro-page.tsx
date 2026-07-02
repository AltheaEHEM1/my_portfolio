"use client";

import Image from "next/image";
import Link from "next/link";

const IntroPage = () => {
	return (
		<div className="relative mt-3 flex items-center justify-center overflow-hidden">
			{/* Background Glow */}
			<div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] pointer-events-none opacity-70 w-150 h-100 bg-teal-pale" />

			<div
				className="relative z-10 w-full max-w-7xl mx-auto border border-border bg-glass-light dark:bg-glass-dark backdrop-blur-md shadow-2xl px-6 sm:px-12 pb-12 md:pb-6 rounded-[2rem] flex flex-col justify-between min-h-auto mt-0"
				>
				{/* Title Bar */}
				<div className="title-bar flex items-center justify-between px-5 py-3 border-b border-border z-10">
					<div className="flex items-center gap-2">
						<span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
						<span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
						<span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
					</div>
					
					<span className="text-sm font-mono tracking-wider text-text opacity-60">
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
						<div className="relative z-0 opacity-35 font-black tracking-widest mt-8 pointer-events-none select-none font-valorant">
							<div className="flex flex-col">
								<h2 className="text-teal-500 dark:text-teal-300 text-stroke-black dark:text-stroke-white paint-order-stroke text-[45px] leading-[1]">
								hi, i am
								</h2>

								<h1 className="text-teal-500 dark:text-teal-300 text-stroke-black dark:text-stroke-white paint-order-stroke text-[90px] leading-[1]">
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
							BS Information Technology student turning real-world problems into seamless, high-performance software. Focused on building clean, minimalist interfaces and reliable technical solutions.
						</p>


						<div className="flex flex-row gap-3 pt-3 w-full justify-center md:justify-start max-w-sm">
							<Link
								href="/projects"
								// Added hover:scale-105 for the pop-up effect and hover:bg-teal-700 for the color change
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

							<Link
								href="/contact"
								// Added hover:scale-105 for the pop-up effect and hover:bg-teal-200 for the color change
								className="inline-flex items-center justify-center px-4 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 active:scale-95 hover:scale-105 hover:bg-teal-200 hover:border-teal-400"
								style={{
									fontFamily: "var(--font-poppins, sans-serif)",
									color: "var(--nav-teal, #115e59)",
									borderColor: "rgba(13, 148, 136, 0.2)",
									backgroundColor:
										"var(--nav-bg-btn, rgba(187, 247, 237, 0.62))",
									borderRadius: "0.75rem",
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
