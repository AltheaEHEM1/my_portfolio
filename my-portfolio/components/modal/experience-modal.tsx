"use client";

import Image from "next/image";
import type React from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import BaseModal from "@/components/layout/base-modal";

interface ExperienceItem {
	id: string;
	role: string;
	period: string;
	company: string;
	location: string;
	description: string;
	images?: string[];
}

interface ExperienceModalProps {
	isOpen: boolean;
	onClose: () => void;
	item: ExperienceItem | null;
}

const ExperienceModal: React.FC<ExperienceModalProps> = ({
	isOpen,
	onClose,
	item,
}) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// If no item is passed yet, don't render the content fields to prevent errors
	if (!item || !mounted) return null;

	return createPortal(
		<BaseModal isOpen={isOpen} onClose={onClose} title={`${item.id}.tsx`}>
			<div className="flex flex-col gap-6">
				{/* Role & Company Header */}
				<div>
					<span className="text-xs font-mono uppercase tracking-widest text-teal-500">
						{item.company}
					</span>
					<h3 className="text-2xl font-bold font-orbitron text-foreground mt-1">
						{item.role}
					</h3>
				</div>

				{/* Metadata Badges (Period & Location) */}
				<div className="flex flex-wrap items-center gap-3 text-xs font-mono">
					<span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
						{item.period}
					</span>
					<span className="px-3 py-1 rounded-full bg-background/50 text-muted-foreground border border-border">
						{item.location}
					</span>
				</div>

				{/* Description */}
				<div className="space-y-2">
					<h4 className="text-xs font-bold font-mono uppercase tracking-wider text-muted-foreground">
						Overview & Contributions
					</h4>
					<p className="text-sm text-foreground/80 leading-relaxed font-poppins">
						{item.description}
					</p>
				</div>

				{/* Images Grid */}
				{item.images && item.images.length > 0 && (
					<div className="space-y-2 pt-2">
						<h4 className="text-xs font-bold font-mono uppercase tracking-wider text-muted-foreground">
							Project / Gallery Assets
						</h4>
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
							{item.images.map((imgSrc, index) => (
								<div
									key={imgSrc}
									className="relative h-28 w-full rounded-xl overflow-hidden border border-border bg-background/50 group"
								>
									<Image
										src={imgSrc}
										alt={`${item.company} asset ${index + 1}`}
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-300"
									/>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</BaseModal>,
		document.body,
	);
};

export default ExperienceModal;
