import ProjectCards from "@/app/projects/project-cards";
import allProjects from "@/data/projects.json";

const GRID_PROJECTS = allProjects;

function ProjectGrid({ projects = GRID_PROJECTS }) {
	return (
		<section className="w-full max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6 py-12 relative z-20">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
				{projects.map((project) => (
					<ProjectCards key={project.id} project={project} />
				))}
			</div>
		</section>
	);
}

export default ProjectGrid;
