"use client";

import { type Easing, motion, type Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

import FeaturesAndFunctionalities from "@/app/projects/[slug]/feature-functionalities";
import MiniCarousel from "@/app/projects/[slug]/mini-carousel";
import ProjectCards from "@/app/projects/project-cards";

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 32 },
	visible: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.15,
			duration: 0.55,
			ease: "easeOut" as Easing,
		},
	}),
};

interface ProjectFeature {
	icon: string;
	name: string;
	description: string;
}

interface Project {
	id: number;
	title: string;
	subtitle?: string;
	role: string;
	description: string;
	link?: string;
	images?: string[];
	features?: ProjectFeature[];
	teamSize: number;
}

interface BaseProjectDetailsProps {
	project: Project;
	otherProjects?: Project[];
}

export default function BaseProjectDetails({
	project,
	otherProjects = [],
}: BaseProjectDetailsProps) {
	const router = useRouter();
	const otherProjectsRef = useRef<HTMLElement>(null);
	const isSnapping = useRef(false);

	useEffect(() => {
		const section = otherProjectsRef.current;
		if (!section) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !isSnapping.current) {
					isSnapping.current = true;
					section.scrollIntoView({ behavior: "smooth", block: "start" });
					setTimeout(() => {
						isSnapping.current = false;
					}, 800);
				}
			},
			{ threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
		);

		const timeoutId = setTimeout(() => {
			observer.observe(section);
		}, 500);

		return () => {
			clearTimeout(timeoutId);
			observer.disconnect();
		};
	}, []);

	return (
		<article className="relative z-10 flex w-full flex-col items-center">
			<motion.section
				className="w-full max-w-[1600px] px-2 sm:px-4 lg:px-6 pt-var(--space-section) pb-var(--space-section)"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.1 }}
			>
				<div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-16">
					{/* Left Column */}
					<div className="order-2 flex w-full flex-col lg:order-1 lg:w-[40%]">
						<motion.div className="mb-8" variants={fadeUp} custom={0}>
							<h1 className="project-title mb-1">{project.title}</h1>
							<p className="text-xs tracking-[0.35em] opacity-80 sm:text-sm text-teal-dark -font-geist-mono">
								<span className="opacity-60">------------- {"//"}</span>{" "}
								{project.subtitle ?? "PROJECT"}
							</p>
						</motion.div>

						<motion.div variants={fadeUp} custom={2}>
							<h1 className="mb-6 text-base font-bold uppercase tracking-[0.19em] sm:text-lg text-teal-dark -font-geist-mono">
								Features & Functionalities:
							</h1>
							<FeaturesAndFunctionalities features={project.features ?? []} />
						</motion.div>
					</div>

					{/* Right Column */}
					<div className="order-1 mb-8 flex w-full flex-col lg:order-2 lg:mb-0 lg:w-[60%]">
						<motion.div
							className="group relative mb-8 overflow-hidden rounded-xl"
							style={{ border: "2px solid var(--border-accent)" }}
							variants={fadeUp}
							custom={0}
						>
							<MiniCarousel images={project.images ?? []} alt={project.title} />
						</motion.div>

						<motion.div
							className="flex flex-col gap-4"
							variants={fadeUp}
							custom={1}
						>
							{project.link && (
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-teal-dark hover:text-teal-pale transition-colors duration-200 font-medium"
								>
									<span>View Live Project</span>
								</a>
							)}
							{project.description.split("\n\n").map((paragraph) => {
								const trimmed = paragraph.trim();
								return (
									<p
										key={trimmed} // Uses
										className="leading-relaxed text-muted sm:leading-loose text-justify"
									>
										{trimmed}
									</p>
								);
							})}
						</motion.div>
					</div>
				</div>
			</motion.section>

			{/* Other Projects Section */}
			{otherProjects.length > 0 && (
				<>
					<div className="w-full max-w-[1600px] px-2 sm:px-4 lg:px-6">
						<div className="brand-divider glow-pulse my-4" />
					</div>

					<motion.section
						ref={otherProjectsRef}
						className="w-full max-w-[1600px] px-2 sm:px-4 lg:px-6 pt-var(--space-section) pb-var(--space-section)"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.08 }}
					>
						<motion.div
							className="mb-10 text-center"
							variants={fadeUp}
							custom={0}
						>
							<h2 className="var(--font-geist-mono)">Other Projects</h2>
						</motion.div>

						<motion.div
							className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10"
							variants={fadeUp}
							custom={1}
						>
							{otherProjects.map((proj) => (
								<button
									key={proj.id}
									type="button"
									className="cursor-pointer"
									onClick={() => router.push(`/projects/${proj.id}`)}
								>
									<ProjectCards project={project} />
								</button>
							))}
						</motion.div>
					</motion.section>
				</>
			)}
		</article>
	);
}
