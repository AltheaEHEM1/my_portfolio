"use client";

// import { useState } from "react";
// import EducationModal from "@/components/modal/education-modal";
import education from "@/data/education.json";
import { AnimateItem, AnimateStagger } from "../page-animate-provider";

// type EducationItem = (typeof education)[number];

const Education = () => {
	// const [isOpen, setIsOpen] = useState(false);
	// const [selectedEducation, setSelectedEducation] =
	// 	useState<EducationItem | null>(null);

	// const handleCardClick = (item: EducationItem) => {
	// 	setSelectedEducation(item);
	// 	setIsOpen(true);
	// };

	return (
		<>
			<AnimateStagger className="w-full py-8 space-y-6">
				{education.map((edu) => (
					<AnimateItem
						key={edu.school}
						className="relative flex justify-center lg:justify-start lg:pl-8 group"
					>
						<div className="absolute -left-2 top-6 hidden lg:block ">
							<div className="w-4 h-4 rounded-full border-2 border-teal-500 bg-white dark:bg-slate-950 group-hover:bg-teal-500 transition-all duration-300 ring-4 ring-transparent group-hover:ring-teal-500/20 shadow-sm" />
						</div>

						{/* onClick={() => handleCardClick(edu)} */}
						<div className="relative w-full max-w-lg border border-black/40 dark:border-border rounded-xl p-5 bg-transparent font-mono transition-all duration-300 hover:border-teal/50 hover:shadow-xl hover:scale-[1.01]">
						
							<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
								<h3 className="text-base font-bold text-foreground uppercase tracking-wide">
									{edu.school}
								</h3>
								<span className="mt-2 sm:mt-0 text-[11px] font-bold bg-teal/10 text-teal px-4 py-1 rounded-full whitespace-nowrap border border-teal/20">
									{edu.period}
								</span>
							</div>
							<p className="text-sm font-semibold text-foreground/90">
								{edu.degree}
							</p>
							<p className="text-xs text-teal-dark italic">📍 {edu.location}</p>
						</div>
					</AnimateItem>
				))}
			</AnimateStagger>
			{/*
			<EducationModal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				item={selectedEducation}
			/>
			*/}
		</>
	);
};

export default Education;
