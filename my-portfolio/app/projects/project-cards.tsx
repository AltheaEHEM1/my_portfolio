"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Project {
	id: string | number;
	title: string;
	description: string;
	images?: string[];
}

interface ProjectCardsProps {
	project: Project;
}

function ProjectCards({ project }: ProjectCardsProps) {
	const router = useRouter();

	return (
		<div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-teal/50 hover:shadow-lg">
			{/* Image Container */}
			<div className="relative h-40 w-full overflow-hidden border-b border-border bg-muted/20">
				{project.images?.[0] && (
					<Image
						src={`/assets/project-cover-picture/${project.images[0]}`}
						alt={project.title}
						fill
						className="object-cover transition-transform duration-500 group-hover:scale-105"
						sizes="(max-width: 768px) 100vw, 33vw"
					/>
				)}
			</div>

			{/* Content */}
			<div className="flex flex-1 flex-col px-3 py-2">
				<h3 className="mb-2 text-lg font-bold text-foreground">
					{project.title}
				</h3>

				<p className="line-clamp-3 text-xs leading-relaxed text-muted-foreground">
					{project.description}
				</p>
			</div>

			{/* Footer */}
			<div className="flex items-center justify-end px-4 pb-3">
				<button
					type="button"
					onClick={() => router.push(`/projects/${project.id}`)}
					className="text-xs font-mono hover:text-teal"
				>
					View
				</button>
			</div>
		</div>
	);
}

export default ProjectCards;
