"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import BaseModal from "@/components/layout/base-modal";

interface EducationItem {
	id: string;
	school: string;
	degree: string;
	period: string;
	location: string;
}

interface EducationModalProps {
	isOpen: boolean;
	onClose: () => void;
	item: EducationItem | null;
}

const EducationModal: React.FC<EducationModalProps> = ({
	isOpen,
	onClose,
	item,
}) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!item || !mounted) return null;

	return createPortal(
		<BaseModal isOpen={isOpen} onClose={onClose} title={`${item.id}.tsx`}>
			<div className="flex flex-col gap-6">
				<div>
					<span className="text-xs font-mono uppercase tracking-widest text-teal-500">
						Education
					</span>
					<h3 className="mt-1 text-2xl font-bold font-orbitron text-foreground">
						{item.school}
					</h3>
				</div>

				<div className="flex flex-wrap items-center gap-3 text-xs font-mono">
					<span className="rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-teal-600 dark:text-teal-400">
						{item.period}
					</span>
					<span className="rounded-full border border-border bg-background/50 px-3 py-1 text-muted-foreground">
						{item.location}
					</span>
				</div>

				<div className="space-y-2">
					<h4 className="text-xs font-bold font-mono uppercase tracking-wider text-muted-foreground">
						Program
					</h4>
					<p className="text-sm leading-relaxed font-poppins text-foreground/80">
						{item.degree}
					</p>
				</div>
			</div>
		</BaseModal>,
		document.body,
	);
};

export default EducationModal;
