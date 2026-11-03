"use client";

import { type Easing, motion, type Variants } from "framer-motion";
import { Briefcase, Code2, Layers } from "lucide-react";
import { notFound, useRouter } from "next/navigation";
import React, { use, useEffect, useRef } from "react";

import FeaturesAndFunctionalities from "@/app/projects/[slug]/feature-functionalities";
import HeroProject from "@/app/projects/[slug]/hero-project";
import MiniCarousel from "@/app/projects/[slug]/mini-carousel";
import ProjectCards from "@/app/projects/project-cards";
import allProjects from "@/data/projects.json";

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

// Helper to safely handle both string and array inputs from JSON
const ensureArray = (value: string | string[] | undefined): string[] => {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    return value.split(",").map((item) => item.trim());
};

interface ProjectFeature {
    icon: string;
    name?: string;
    description: string;
}

interface Project {
    id: number;
    title: string;
    subtitle?: string;
    category: string;
    role: string[] | string;
    techstack: string[] | string;
    description: string;
    link?: string;
    images?: string[];
    features?: ProjectFeature[];
    teamSize?: number;
}

interface BaseProjectDetailsProps {
    project: Project;
    otherProjects?: Project[];
}

export function BaseProjectDetails({
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

    // Normalized arrays for role and techstack
    const roles = ensureArray(project.role);
    const techStackItems = ensureArray(project.techstack);

    return (
        <div>
            <HeroProject title={project.title} subtitle={project.subtitle} />
            <section className="relative z-10 flex w-full flex-col">
                <motion.section
                    className="w-full px-2 flex flex-wrap"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {/* Left */}
                    <div className="order-1 flex w-full flex-col lg:w-7/12">
                        <motion.div
                            className="group relative mb-3 overflow-hidden rounded-xl border border-teal-dark/20 bg-teal-dark/5 shadow-lg shadow-teal-dark/10 transition-all hover:shadow-teal-dark/20"
                            variants={fadeUp}
                            custom={0}
                        >
                            <MiniCarousel images={project.images ?? []} alt={project.title} />
                        </motion.div>
                    </div>

                    {/* Right */}
                    <div className="order-2 mb-8 flex w-full mt-3 flex-col lg:mb-0 lg:w-5/12 pl-0 lg:pl-8">
                        <motion.div className="flex flex-col" variants={fadeUp} custom={1}>
                            <div className="flex flex-col">
                                {/* Description */}
                                <div className="space-y-4">
                                    {project.description.split("\n\n").map((paragraph) => (
                                        <p
                                            key={paragraph.substring(0, 20)}
                                            className="text-sm text-justify font-mono font-light"
                                        >
                                            {paragraph.trim()}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Category Footer */}
                            <div className="flex items-center gap-2 mt-10 shrink-0">
                                <div className="text">
                                    <Layers size={18} strokeWidth={2.5} />
                                </div>
                                <span className="font-mono text-sm text whitespace-nowrap">
                                    {project.category}
                                </span>
                            </div>

                            {/* Roles Header with Teal Separator */}
                            <div className="flex flex-col mt-5">
                                <div className="flex items-start gap-3">
                                    <div className="flex items-center pt-0.5">
                                        <Briefcase size={18} strokeWidth={2.5} />
                                    </div>
                                    <div className="flex flex-wrap items-center gap-x-2 font-mono text-sm">
                                        {roles.map((role, index, arr) => (
                                            <React.Fragment key={role}>
                                                <span>{role}</span>
                                                {index < arr.length - 1 && (
                                                    <span className="text-teal-500 font-semibold">|</span>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Tech Stack Header with Teal Separator */}
                            <div className="flex flex-col mt-5 mb-7">
                                <div className="flex items-start gap-3">
                                    <div className="flex items-center pt-0.5">
                                        <Code2 size={18} strokeWidth={2.5} />
                                    </div>
                                    <div className="flex flex-wrap items-center gap-x-2 font-mono text-sm">
                                        {techStackItems.map((tech, index, arr) => (
                                            <React.Fragment key={tech}>
                                                <span>{tech}</span>
                                                {index < arr.length - 1 && (
                                                    <span className="text-teal-500 font-semibold">|</span>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Action Link */}
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 text-sm font-bold text-teal-dark mt-5 hover:opacity-70 transition-opacity"
                                >
                                    View Project
                                    <span className="text-lg">→</span>
                                </a>
                            )}
                        </motion.div>
                    </div>
                </motion.section>

                <motion.div variants={fadeUp} custom={2}>
                    <h1 className="mb-3 mt-7 text-base font-bold uppercase tracking-[0.19em] sm:text-lg text-teal-dark -font-geist-mono">
                        Features & Functionalities:
                    </h1>
                    <FeaturesAndFunctionalities features={project.features ?? []} />
                </motion.div>

                {/* Other Projects Section */}
                {otherProjects.length > 0 && (
                    <>
                        <div className="w-full max-w-[1600px] px-2 sm:px-4 lg:px-6">
                            <div className="brand-divider glow-pulse my-4" />
                        </div>

                        <motion.section
                            ref={otherProjectsRef}
                            className=" px-2 sm:px-4 lg:px-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.08 }}
                        >
                            <motion.div
                                className="mb-4 mt-13 text-center"
                                variants={fadeUp}
                                custom={0}
                            >
                                <h1 className="font-valorant text-teal-dark">Other Projects</h1>
                            </motion.div>

                            <motion.div
								className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10"
								variants={fadeUp}
								custom={1}
							>
								{otherProjects.map((proj, index) => (
									<div
										key={`${proj.id}-${index}`}
										role="button"
										tabIndex={0}
										className="cursor-pointer text-left block"
										onClick={() => router.push(`/projects/${proj.id}`)}
										onKeyDown={(e) => {
											if (e.key === 'Enter' || e.key === ' ') {
												router.push(`/projects/${proj.id}`);
											}
										}}
									>
										<ProjectCards project={proj} />
									</div>
								))}
							</motion.div>
                        </motion.section>
                    </>
                )}
            </section>
        </div>
    );
}

export default function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const project = (allProjects as unknown as Project[]).find(
        (p) => p.id.toString() === slug,
    );
    const otherProjects = (allProjects as unknown as Project[]).filter(
        (p) => p.id.toString() !== slug,
    );

    if (!project) {
        notFound();
    }

    return <BaseProjectDetails project={project} otherProjects={otherProjects} />;
}