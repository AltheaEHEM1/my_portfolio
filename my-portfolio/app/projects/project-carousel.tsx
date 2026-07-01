"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Swiper as SwiperClass } from "swiper";
import projectsData from "@/data/projects.json";
import CurvedCarousel from "../projects/curved-carousel";

// Define the shape of your project data
interface Project {
	id: number;
	title: string;
	description: string;
	images?: string[];
}

// Ensure the data matches the interface
const FEATURED_PROJECTS: Project[] = projectsData as Project[];

interface ProjectPlaceholderSlideProps {
	project: Project;
	isActive: boolean;
}

function ProjectPlaceholderSlide({ project }: ProjectPlaceholderSlideProps) {
	return (
		<div className="relative flex h-full flex-col justify-between overflow-hidden border-x-[3px] border-[#1e40af] bg-[radial-gradient(circle_at_top,rgba(53,164,185,0.28),transparent_55%),linear-gradient(135deg,rgba(3,7,18,0.96),rgba(15,23,42,0.92)_55%,rgba(30,64,175,0.55))] px-8 shadow-[0_24px_60px_rgba(0,0,0,0.8)] transition-[filter,opacity,transform] duration-500">
			{project.images && project.images.length > 0 && (
				<div className="absolute inset-0">
					<Image
						src={`/assets/project-cover-picture/${project.images[0]}`}
						alt={project.title}
						fill
						className="object-cover opacity-100"
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				</div>
			)}
			<div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(53,164,185,0.08)_45%,transparent_100%)]" />
		</div>
	);
}

interface FeaturedProjectsCarouselProps {
	projects?: Project[];
}

function FeaturedProjectsCarousel({
	projects = FEATURED_PROJECTS,
}: FeaturedProjectsCarouselProps) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
		null,
	);
	const router = useRouter();
	const activeProject = projects[activeIndex] ?? projects[0];

	return (
		<div className="relative z-10 flex w-full flex-col items-center overflow-hidden bg-transparent py-12">
			<div className="z-40 mb-2 mt-5 text-center">
				<h2
					className="text-3xl font-valorant tracking-widest"
					style={{
						color: "var(--text-title2, #00000)",
					}}
				>
					{activeProject.title}
				</h2>
			</div>

			<CurvedCarousel
				items={projects}
				className="mb-3 h-112.5 w-full"
				autoplay={true}
				autoplayDelay={4000}
				onActiveIndexChange={setActiveIndex}
				onSwiper={setSwiperInstance}
				renderSlide={(project: Project, index: number) => (
					<ProjectPlaceholderSlide
						project={project}
						isActive={index === activeIndex}
					/>
				)}
			/>

			<div className="relative z-40 flex items-center justify-center gap-4 md:gap-4">
				{/* Previous Button */}
				<button
					type="button"
					onClick={() => swiperInstance?.slidePrev()}
					className="group flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-border bg-teal-pale text-teal transition-all hover:scale-105 hover:bg-teal hover:text-white"
				>
					<ChevronLeft size={15} strokeWidth={2.5} />
				</button>

				{/* View Button */}
				<button
					type="button"
					onClick={() => router.push(`/projects/${activeProject.id}`)}
					className="font-mono flex h-8 items-center justify-center rounded-lg border border-teal/30 bg-teal-pale px-6 text-sm tracking-[0.2em] text-teal shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:bg-teal hover:text-white md:px-8"
				>
					View Project
				</button>

				{/* Next Button */}
				<button
					type="button"
					onClick={() => swiperInstance?.slideNext()}
					className="group flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-border bg-teal-pale text-teal transition-all hover:scale-105 hover:bg-teal hover:text-white"
				>
					<ChevronRight size={15} strokeWidth={2.5} />
				</button>
			</div>

			{/* Description Card */}
			<div className="relative z-40 mt-6 w-full max-w-2xl px-4">
				<div className="relative rounded-xl border border-border bg-background/50 p-4 backdrop-blur-md shadow-sm">
					<p className="line-clamp-3 text-center text-xs leading-relaxed text-muted-foreground md:text-sm md:leading-loose tracking-wide">
						{activeProject.description}
					</p>
				</div>
			</div>

			{/* Pagination Dots */}
			<div className="z-40 mt-6 flex items-center justify-center gap-2">
				{projects.map((project, index) => (
					<button
						type="button"
						key={project.id}
						onClick={() => swiperInstance?.slideToLoop(index)}
						className={`cursor-pointer rounded-full transition-all duration-300 ${
							index === activeIndex
								? "h-2 w-6 bg-teal shadow-[0_0_8px_var(--teal)]"
								: "h-2 w-2 bg-border hover:bg-teal/50"
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
}

export default FeaturedProjectsCarousel;
