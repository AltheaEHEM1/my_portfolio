"use client";
import Image from "next/image";

interface HeroSectionProps {
	title?: string;
	subtitle?: string;
	description?: string;
}

const HeroProject = ({
	title = "HeroSection",
	subtitle = "Management System",
}: HeroSectionProps) => {
	return (
		<div className="w-full text-center py-15 relative overflow-hidden h-40">
			<Image
				src="/assets/bg-hero/main-project_bg.png"
				alt={title}
				fill
				priority
				className="object-cover object-[center_60%] pointer-events-none"
			/>
			<div className="absolute inset-0 bg-black/50 pointer-events-none z-10"></div>
			<div className="flex flex-col items-center justify-center relative z-20 text-white">
				<h1 className="text-3xl font-valorant">{title}</h1>
				<p className="text-xs font-mono">{subtitle}</p>
			</div>
		</div>
	);
};

export default HeroProject;
