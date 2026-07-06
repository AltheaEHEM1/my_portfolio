"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const skills = [
	{ name: "Bootstrap", src: "/assets/skills/bootstrap.png" },
	{ name: "Figma", src: "/assets/skills/figma.png" },
	{ name: "React", src: "/assets/skills/reactjs.png" },
	{ name: "Next.js", src: "/assets/skills/nextjs.png" },
	{ name: "Tailwind CSS", src: "/assets/skills/tailwindcss.png" },
	{ name: "Canva", src: "/assets/skills/canva.png" },
	{ name: "ClickUp", src: "/assets/skills/clickup.png" },
	{ name: "Discord", src: "/assets/skills/discord.png" },
	{ name: "Docker", src: "/assets/skills/docker.png" },
	{ name: "Draw.io", src: "/assets/skills/draw.io.avif" },
	{ name: "FlutterFlow", src: "/assets/skills/flutterflow.png" },
	{ name: "GitHub Desktop", src: "/assets/skills/github-desktop.png" },
	{ name: "GitHub", src: "/assets/skills/github.png" },
	{ name: "Google Docs", src: "/assets/skills/google_docs.png" },
	{ name: "Google Meet", src: "/assets/skills/Google_Meet.png" },
	{ name: "Google Sheets", src: "/assets/skills/Google_Sheets.png" },
	{ name: "Jira", src: "/assets/skills/jira.png" },
	{ name: "Lucid", src: "/assets/skills/lucid.png" },
	{ name: "Mabl", src: "/assets/skills/mabl.png" },
	{ name: "Excel", src: "/assets/skills/Microsoft_Office_Excel.png" },
	{ name: "OneNote", src: "/assets/skills/Microsoft_Office_OneNote.png" },
	{ name: "PowerPoint", src: "/assets/skills/Microsoft_Office_PowerPoint.png" },
	{ name: "Teams", src: "/assets/skills/microsoft-teams.png" },
	{ name: "Word", src: "/assets/skills/microsoft-word.png" },
	{ name: "Notion", src: "/assets/skills/notion.png" },
	{ name: "Zoom", src: "/assets/skills/zoom.png" },
];

const Skills = () => {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const containerRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!containerRef.current) return;
		const { left, top, width, height } =
			containerRef.current.getBoundingClientRect();
		const x = ((e.clientX - left) / width - 0.5) * 2;
		const y = ((e.clientY - top) / height - 0.5) * 2;
		setMousePos({ x, y });
	};

	return (
		<article
			ref={containerRef}
			className="relative h-[300px] md:h-140 w-full flex items-center justify-center transition-all duration-500 ease-out overflow-hidden md:overflow-visible scale-75 md:scale-100"
			onMouseMove={handleMouseMove}
			onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
			style={{
				transform: `perspective(1000px) rotateY(${mousePos.x * 5}deg) rotateX(${-mousePos.y * 5}deg)`,
			}}
		>
			{/* Background Glow */}
			<div
				className="absolute w-64 h-64 bg-cyan-500/20 blur-[120px] rounded-full transition-transform duration-700"
				style={{
					transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 50}px)`,
				}}
			/>

			{/* Orbit Rings */}
			{[80, 130, 180].map((r) => (
				<div
					key={r}
					className="absolute border border-cyan-500/10 rounded-full transition-transform duration-300"
					style={{
						width: "200px",
						height: "200px",
						transform: `scale(${r / 80}) translateZ(0px)`,
					}}
				/>
			))}

			{/* Central Globe element */}
			<div className="relative z-5 flex items-center justify-center">
				<div className="absolute w-28 h-28 rounded-full bg-cyan-500/10 animate-pulse" />
				<div className="relative w-20 h-20 rounded-full bg-slate-950 border border-cyan-500/50 flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-all duration-500 hover:scale-105 hover:border-cyan-400">
					<span className="text-4xl">🌐</span>
				</div>
			</div>

			{/* Orbiting Nodes */}
			{skills.map((skill, index) => {
				const ring = index % 3;
				const radius = 80 + ring * 50;
				const itemsInRing =
					Math.floor(skills.length / 3) +
					(index % 3 < skills.length % 3 ? 1 : 0);
				const ringIndex = Math.floor(index / 3);
				const angle = (360 / itemsInRing) * ringIndex;

				return (
					<div
						key={skill.name}
						className="absolute flex items-center justify-center transition-transform duration-500"
						style={{
							transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
						}}
					>
						<div
							className="animate-spin-orbit hover:paused"
							style={
								{
									"--radius": `${radius}px`,
									"--angle": `${angle}deg`,
								} as React.CSSProperties
							}
						>
							<button
								type="button"
								className="w-14 h-14 bg-slate-800 border-0 rounded-lg p-2 transition-all duration-300 shadow-lg flex items-center justify-center"
							>
								<div className="relative w-9 h-9">
									<Image
										src={skill.src}
										alt={skill.name}
										fill
										className="object-contain"
									/>
								</div>
							</button>
						</div>
					</div>
				);
			})}

			<style jsx>{`
                @keyframes orbit {
                    from { transform: rotate(var(--angle)) translateX(var(--radius)) rotate(calc(-1 * var(--angle))); }
                    to { transform: rotate(calc(var(--angle) + 360deg)) translateX(var(--radius)) rotate(calc(-1 * var(--angle) - 360deg)); }
                }
                .animate-spin-orbit { animation: orbit 40s linear infinite; }
            `}</style>
		</article>
	);
};

export default Skills;
