"use client";

import SkillCategoriesData from "../../data/skill-categories.json";
import { AnimateItem, AnimateStagger } from "../page-animate-provider";

interface SkillCategory {
	category: string;
	items: string[];
}

const SkillCategories = () => {
	const data = SkillCategoriesData as SkillCategory[];

	return (
		<div className="w-full mx-auto py-2 px-6 md:px-10 selection:bg-teal-500/30">
			<AnimateStagger className="relative border-l-2 border-slate-200/60 dark:border-slate-800 pl-8 ml-3 space-y-5">
				{data.map((item: SkillCategory) => (
					<AnimateItem key={item.category} className="relative group">
						<div className="absolute -left-10.25 flex items-center justify-center">
							<div className="w-4 h-4 rounded-full border-2 border-teal-500 bg-white dark:bg-slate-950 group-hover:bg-teal-500 transition-all duration-300 ring-4 ring-transparent group-hover:ring-teal-500/20 shadow-sm" />
						</div>
						{/* Content Container */}
						<div className="space-y-2 transform transition-all duration-300 group-hover:translate-x-1">
							<h5 className="text-lg font-bold font-mono uppercase text-muted-foreground group-hover:text-teal transition-colors duration-200">
								{item.category}
							</h5>

							{/* Badges Flex Grid */}
							<div className="flex flex-wrap gap-2 pl-3">
								{item.items.map((skill: string) => (
									<span
										key={skill}
										className="cursor-default rounded-lg px-3 py-1 text-[13px] transition-all duration-200 ease-in-out bg-muted text-muted-foreground border border-border/70 hover:-translate-y-0.5 hover:border-teal/40 hover:text-teal hover:bg-teal-pale"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					</AnimateItem>
				))}
			</AnimateStagger>
		</div>
	);
};

export default SkillCategories;
