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
						fill // Required for absolute parent containers
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
		<section className="relative z-10 flex w-full flex-col items-center overflow-hidden bg-transparent py-12">
			<div className="z-40 mb-8 text-center">
				<h2
					className="text-4xl font-bold uppercase tracking-widest md:text-5xl lg:text-6xl"
					style={{
						color: "var(--text-title2, #35A4B9)",
						fontFamily: "var(--font-family-title, monospace)",
					}}
				>
					{activeProject.title}
				</h2>
			</div>

			<CurvedCarousel
				items={projects}
				className="mb-8 h-[350px] w-full sm:h-[450px] lg:h-[500px]"
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

			<div className="relative z-40 flex items-center justify-center gap-6 md:gap-12">
				<button
					type="button"
					onClick={() => swiperInstance?.slidePrev()}
					className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-white text-white transition-all hover:scale-105 hover:bg-white/10 md:h-12 md:w-12"
				>
					<ChevronLeft size={24} strokeWidth={2.5} className="-ml-[2px]" />
				</button>

				<button
					type="button"
					onClick={() => {
						router.push(`/projects/${activeProject.id}`);
					}}
					className="h-12 cursor-pointer rounded-2xl bg-[#2563EB] px-10 text-lg font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all hover:scale-105 hover:bg-blue-600 md:h-14 md:px-16"
					style={{ fontFamily: "var(--font-family, sans-serif)" }}
				>
					View
				</button>

				<button
					type="button"
					onClick={() => swiperInstance?.slideNext()}
					className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-white text-white transition-all hover:scale-105 hover:bg-white/10 md:h-12 md:w-12"
				>
					<ChevronRight size={24} strokeWidth={2.5} className="-mr-[2px]" />
				</button>
			</div>

			<div className="relative z-40 mt-8 w-full max-w-3xl px-4">
				<div className="rounded-2xl border border-white/5 bg-[#000814]/70 p-6 shadow-[0_0_40px_rgba(0,10,30,0.8)] backdrop-blur-xl md:p-8">
					<p className="line-clamp-3 text-center text-xs leading-relaxed text-gray-300 md:text-sm md:leading-loose">
						{activeProject.description}
					</p>
				</div>
			</div>

			<div className="z-40 mt-8 flex items-center justify-center gap-3">
				{projects.map((project, index) => (
					<button
						type="button"
						key={project.id}
						onClick={() => swiperInstance?.slideToLoop(index)}
						className={`cursor-pointer rounded-full transition-all duration-300 ${
							index === activeIndex
								? "h-4 w-4 scale-110 bg-gray-200 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
								: "h-3 w-3 bg-gray-600 hover:bg-gray-400"
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</section>
	);
}

export default FeaturedProjectsCarousel;
