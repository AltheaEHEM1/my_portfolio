"use client";

import Image from "next/image";
import Link from "next/link";

const IntroPage = () => {
	return (
		<div className="relative mt-3 flex items-center justify-center overflow-hidden">
			<div
				className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] pointer-events-none opacity-70 w-150 h-125"
				style={{ backgroundColor: "var(--teal-pale, rgba(20,184,166,0.15))" }}
			/>

			<div
				className="relative z-10 w-full max-w-7xl mx-auto border shadow-2xl backdrop-blur-md px-6 sm:px-12 pb-12 md:pb-6 flex flex-col justify-between min-h-125 md:min-h-140 mt-0"
				style={{
					backgroundColor: "rgba(255, 255, 255, 0.15)",
					borderColor: "var(--border, rgba(255,255,255,0.25))",
					borderRadius: "2rem",
				}}
			>
				<div
					className="title-bar absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-3 border-b"
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

				<svg
					viewBox="0 0 1000 250"
					className="absolute inset-x-0 top-0 w-full pointer-events-none select-none z-0 mt-13 opacity-35 uppercase font-black tracking-widest"
					style={{
						fontFamily: "var(--font-valorant, sans-serif)",
					}}
				>
					<title>Portfolio</title>
					<defs>
						<path
							id="textCurve"
							d="M 50,180 Q 500,80 950,180"
							fill="transparent"
						/>
					</defs>
					<text
						fontSize="140"
						className="fill-(--teal,#0d9488)"
						stroke="#000000"
						strokeWidth="6"
						strokeLinejoin="round"
						style={{
							paintOrder: "stroke fill",
						}}
					>
						<textPath href="#textCurve" startOffset="50%" textAnchor="middle">
							portfolio
						</textPath>
					</text>
				</svg>

				<div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-end w-full h-full grow">
					<div className="md:col-span-5 flex justify-center md:justify-start pt-6 md:pt-0 -mb-12 md:-mb-6 relative h-64 sm:h-72 md:h-80 w-full">
						<div className="relative w-full h-full max-w-125 md:max-w-none">
							<Image
								src="/assets/me_1.png"
								alt="Althea Amor character illustration"
								fill
								priority
								className="object-contain object-bottom drop-shadow-[0_8px_20px_rgba(13,148,136,0.15)]"
							/>
						</div>
					</div>

					<div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left space-y-4 pb-4">
						<div className="space-y-2">
							<h3
								className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight drop-shadow-xs"
								style={{
									fontFamily: "var(--font-orbitron, sans-serif)",
									color: "var(--teal-dark, #134e4a)",
								}}
							>
								hi, I am Althea Amor
							</h3>

							<p
								className="text-sm sm:text-base leading-relaxed max-w-md font-light"
								style={{
									fontFamily: "var(--font-poppins, sans-serif)",
									color: "var(--text, #1a2e2a)",
								}}
							>
								A BS Information Technology student turning real problems into
								working software — from full-stack web apps to clean, minimalist
								interfaces.
							</p>
						</div>

						<div className="flex flex-row gap-4 pt-2 w-full justify-center md:justify-start max-w-sm">
							{/* View My Work Button -> Links to /projects */}
							<Link
								href="/projects" /* Change this path to match your exact route name (e.g., /work or #projects) */
								className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap active:scale-95 group relative overflow-hidden hover:shadow-[0_0_20px_rgba(13,148,136,0.4)] hover:-translate-y-0.5"
								style={{
									fontFamily: "var(--font-poppins, sans-serif)",
									backgroundColor: "var(--teal, #0d9488)",
									borderRadius: "1rem",
								}}
							>
								{/* Subtle sliding light overlay overlay on hover */}
								<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
								view my work
							</Link>

							{/* Let's Talk Button -> Links to /contact */}
							<Link
								href="/contact" /* Change this path to match your exact contact route or anchor link (e.g., #contact) */
								className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-widest border transition-all duration-300 cursor-pointer whitespace-nowrap active:scale-95 hover:border-teal-500/50 hover:bg-teal-100/40 hover:text-[#0b7369] dark:hover:bg-teal-950/30 hover:-translate-y-0.5 hover:shadow-sm"
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

				<span
					className="absolute bottom-4 right-5 px-3 py-1 text-[9px] uppercase tracking-wider font-semibold shadow-xs z-20"
					style={{
						fontFamily: "var(--font-orbitron, sans-serif)",
						backgroundColor: "var(--nav-bg-color, rgba(0,0,0,0.2))",
						color: "var(--nav-teal, #0d9488)",
						borderRadius: "var(--radius-pill, 9999px)",
					}}
				>
					IT Student
				</span>
			</div>

			<div className="absolute bottom-0 right-0 w-48 h-48 z-0 opacity-5 pointer-events-none mix-blend-multiply">
				<Image
					src="/assets/tech-grid.svg"
					alt=""
					width={192}
					height={192}
					className="w-full h-full object-contain"
				/>
			</div>
		</div>
	);
};

export default IntroPage;
