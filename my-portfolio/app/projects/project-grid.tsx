import ProjectCards from "@/app/projects/project-cards";
import allProjects from "@/data/projects.json";

const GRID_PROJECTS = allProjects;

function ProjectGrid({ projects = GRID_PROJECTS }) {
	return (
		<div className="relative z-20 mx-auto w-full max-w-7xl px-4 py-10">
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project) => (
					<div
						key={project.id}
						className="transition-transform duration-300 hover:-translate-y-1"
					>
						<ProjectCards project={project} />
					</div>
				))}
			</div>
		</div>
	);
}

export default ProjectGrid;
