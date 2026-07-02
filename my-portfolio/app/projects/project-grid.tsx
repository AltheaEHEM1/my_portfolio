"use client";

import ProjectCards from "@/app/projects/project-cards";
import allProjects from "@/data/projects.json";
import { AnimateItem, AnimateStagger } from "@/app/page-animate-provider";

const GRID_PROJECTS = allProjects;

function ProjectGrid({ projects = GRID_PROJECTS }) {
	return (
		<div className="relative z-20 mx-auto w-full max-w-7xl px-4 py-10">
			<AnimateStagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project) => (
					<AnimateItem
						key={project.id}
						className="transition-transform duration-300 hover:-translate-y-1"
					>
						<ProjectCards project={project} />
					</AnimateItem>
				))}
			</AnimateStagger>
		</div>
	);
}

export default ProjectGrid;
