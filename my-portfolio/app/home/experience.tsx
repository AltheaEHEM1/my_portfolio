"use client";

// import { useState } from "react";
import ExperienceData from "../../data/experience.json";
import { AnimateItem, AnimateStagger } from "../page-animate-provider";

// import ExperienceModal from "@/components/modal/experience-modal";

// interface ExperienceItem {
//     id: string;
//     role: string;
//     period: string;
//     company: string;
//     location: string;
//     description: string;
//     images?: string[];
// }

const Experience = () => {
	// const [isOpen, setIsOpen] = useState(false);
	// const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

	// const handleCardClick = (exp: ExperienceItem) => {
	//     setSelectedExp(exp);
	//     setIsOpen(true);
	// };

	return (
		<>
			<AnimateStagger className="w-full py-8 space-y-6">
				{ExperienceData.map((exp) => (
					<AnimateItem
						key={exp.id}
						className="relative flex justify-center lg:justify-end lg:pr-8 group"
					>
						<div className="absolute -right-2 top-6 hidden lg:block w-4 h-4 rounded-full border-2 border-teal-500 bg-white dark:bg-slate-950 z-10" />

						{/* onClick={() => handleCardClick(exp)} */}
						<div className="relative w-full max-w-lg border border-black/40 dark:border-border rounded-xl p-5 bg-transparent font-mono transition-all duration-300 hover:border-teal/50 hover:shadow-xl hover:scale-[1.01]">
							<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
								<h3 className="text-base font-bold text-foreground uppercase tracking-wide">
									{exp.role}
								</h3>

								<span className="mt-2 sm:mt-0 text-[11px] font-bold bg-teal/10 text-teal px-4 py-1 rounded-full whitespace-nowrap border border-teal/20">
									{exp.period}
								</span>
							</div>

							<p className="text-sm font-semibold text-foreground/90">
								{exp.company}
							</p>

							<p className="text-xs text-teal-dark italic">📍 {exp.location}</p>
						</div>
					</AnimateItem>
				))}
			</AnimateStagger>

			{/*
            <ExperienceModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                item={selectedExp}
            />
            */}
		</>
	);
};

export default Experience;
