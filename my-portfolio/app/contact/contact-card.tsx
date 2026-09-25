"use client";

import { useState } from "react";

interface Contact {
	id: number;
	name: string;
	title: string;
	subtitle: string;
	actionLabel: string;
	link: string;
	bgColor: string;
	textColor: string;
	brandColor: string;
	svgPath: string;
}

function FlipContactCard({ contact }: { contact: Contact }) {
	const [isFlipped, setIsFlipped] = useState(false);
	const handleFlip = () => setIsFlipped(!isFlipped);

	const handleKeyDownFront = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			handleFlip();
		}
	};

	const handleActionClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		if (contact.link.startsWith("mailto:") || contact.link.startsWith("tel:")) {
			window.location.href = contact.link;
		} else {
			window.open(contact.link, "_blank", "noreferrer");
		}
	};

	const ContactIcon = ({ className = "w-20 h-20" }: { className?: string }) => (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="currentColor"
			role="img"
			aria-label={contact.name}
		>
			<title>{contact.name}</title>
			<path d={contact.svgPath} />
		</svg>
	);

	const renderBackHeaderArt = () => {
		const artConfigs: Record<
			string,
			{
				bg: string;
				iconClass: string;
				containerClass?: string;
				isNested?: boolean;
			}
		> = {
			LinkedIn: {
				bg: "bg-[#0077b5]",
				iconClass: "w-[180%] h-[180%] fill-white/10 -mt-12 -ml-12",
			},
			Github: {
				bg: "bg-white",
				iconClass: "w-[115%] h-[115%] fill-[#1f2328] translate-y-[12%]",
			},
			"Phone Number": {
				bg: "bg-white",
				iconClass: "w-[55%] h-[55%] fill-white rotate-[-10deg]",
				containerClass:
					"w-[125%] h-[125%] bg-[#009b62] rounded-full flex items-center justify-center translate-y-[-10%]",
				isNested: true,
			},
		};

		const config = artConfigs[contact.name];
		if (!config) return <div className="absolute inset-0 bg-slate-200" />;

		return (
			<div
				className={`absolute inset-0 ${config.bg} flex items-center justify-center overflow-hidden ${contact.name === "LinkedIn" ? "items-start justify-start p-2" : ""}`}
			>
				{config.isNested ? (
					<div className={config.containerClass}>
						<ContactIcon className={config.iconClass} />
					</div>
				) : (
					<ContactIcon className={config.iconClass} />
				)}
			</div>
		);
	};

	const renderBackBadgeIcon = () => {
		const badgeConfigs: Record<
			string,
			{ path: string; isStroke?: boolean; colorClass: string }
		> = {
			GitHub: {
				path: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
				isStroke: true,
				colorClass: "text-white",
			},
			LinkedIn: {
				path: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
				isStroke: false,
				colorClass: "text-slate-800",
			},
		};

		const config = badgeConfigs[contact.name];
		if (!config) return <ContactIcon className="w-10 h-10" />;

		return (
			<svg
				className={`w-10 h-10 ${config.colorClass}`}
				fill={config.isStroke ? "none" : "currentColor"}
				stroke={config.isStroke ? "currentColor" : "none"}
				strokeWidth={config.isStroke ? "2.5" : undefined}
				viewBox="0 0 24 24"
				role="img"
				aria-label={`${contact.name} Badge`}
			>
				<title>{contact.name} Badge</title>
				<path
					strokeLinecap={config.isStroke ? "round" : undefined}
					strokeLinejoin={config.isStroke ? "round" : undefined}
					d={config.path}
				/>
			</svg>
		);
	};

	return (
		<section
			className="w-80 h-90 -mx-8 perspective-distant group select-none text-left block relative hover:z-50 transition-all duration-300"
			aria-label={`${contact.name} contact options`}
		>
			<div
				className={`relative w-full h-full transition-all duration-500 transform-3d ${isFlipped ? "transform-[rotateY(180deg)]" : ""}`}
			>
				<button
					type="button"
					onClick={handleFlip}
					onKeyDown={handleKeyDownFront}
					className={`absolute inset-0 w-full h-full backface-hidden flex flex-col items-center justify-center gap-4 rounded-3xl shadow-xl border border-slate-200/10 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 ${contact.bgColor} z-10`}
					aria-expanded={isFlipped}
					aria-label={`Reveal details for ${contact.name}`}
				>
					<div
						className={`${contact.textColor} transition-transform duration-300 group-hover:scale-105`}
					>
						<ContactIcon className="w-16 h-16" />
					</div>
					<span
						className={`text-xl font-bold tracking-normal ${contact.textColor}`}
					>
						{contact.name}
					</span>
				</button>

				<div className="absolute inset-0 w-full h-full backface-hidden transform-[rotateY(180deg)] bg-slate-50 dark:bg-zinc-900 rounded-3xl shadow-xl overflow-hidden flex flex-col">
					<button
						type="button"
						onClick={handleFlip}
						className="h-[55%] w-full relative flex items-center justify-center cursor-pointer focus:outline-hidden focus-visible:bg-slate-100 dark:focus-visible:bg-zinc-800"
						aria-label="Go back to front of card"
					>
						{renderBackHeaderArt()}
						<div
							className={`absolute -bottom-6 p-3 rounded-full shadow-md z-20 border ${contact.name === "Github" ? "bg-[#001117] border-zinc-800" : "bg-white border-slate-100"}`}
						>
							<div
								className={
									contact.name === "Github" ? "text-white" : "text-slate-800"
								}
							>
								{renderBackBadgeIcon()}
							</div>
						</div>
					</button>

					<div className="mt-6 flex flex-col items-center flex-1 px-4 pb-4 text-center justify-between">
						<div className="flex flex-col gap-1">
							<h3 className="text-blue-900 dark:text-blue-400 font-bold text-base leading-tight">
								{contact.title}
							</h3>
							<p className="text-slate-500 dark:text-zinc-400 text-xs font-medium leading-relaxed">
								{contact.subtitle}
							</p>
						</div>
						<button
							type="button"
							onClick={handleActionClick}
							className="w-[50%] bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2 rounded-full text-[10px] font-bold transition-all shadow-md shadow-blue-500/10 active:scale-95 cursor-pointer"
						>
							{contact.actionLabel}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FlipContactCard;
