"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useEffect, useState } from "react";
import HeroSection from "@/components/hero/hero";
import blogPosts from "@/data/blog.json";

export default function IndividualBlog({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = use(params);
	const post = blogPosts.find((p) => p.id === slug);

	const [step, setStep] = useState(0);

	// 1. Initialize Motion Values at the top level
	const count = useMotionValue(0);
	const rounded = useTransform(count, (latest) => Math.round(latest));
	const display = useTransform(
		rounded,
		(latest) => post?.content?.slice(0, latest) || "",
	);

	useEffect(() => {
		if (!post) return;

		const sequence = async () => {
			// Small delay for entrance
			await new Promise((r) => setTimeout(r, 1500));
			setStep(1);
			await new Promise((r) => setTimeout(r, 200));
			setStep(2);
			await new Promise((r) => setTimeout(r, 200));
			setStep(3);

			// 2. Perform the animation directly using the motion value
			await animate(count, post.content.length, {
				duration: post.content.length * 0.004,
				ease: "linear",
			});
			setStep(4);
		};

		sequence();
	}, [post, count]); // Dependencies are stable

	if (!post) {
		notFound();
		return null;
	}

	return (
		<main className="min-h-screen transition-colors duration-300">
			<HeroSection
				image="/assets/bg-hero/contact_bg.png"
				subtitle="----// 002 - KNOWLEDGE BASE"
				title="Developer Log"
				description="Insights, technical deep dives, and reflections."
			/>

			<article className="max-w-5xl mx-auto px-6 py-10">
				{step === 0 ? (
					<div className="animate-pulse space-y-8">
						<div className="h-6 w-32 bg-slate-200 dark:bg-slate-800 rounded"></div>
						<div className="h-4 w-48 bg-slate-200 dark:bg-slate-800 rounded mt-12"></div>
						<div className="h-10 w-3/4 bg-slate-200 dark:bg-slate-800 rounded"></div>
						<div className="space-y-4 pt-4">
							<div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
							<div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
							<div className="h-4 w-5/6 bg-slate-200 dark:bg-slate-800 rounded"></div>
						</div>
					</div>
				) : (
					<>
						<div className="mb-12">
							<Link
								href="/blog"
								className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-500 border-b border-slate-300 hover:border-cyan-600 dark:border-slate-700 dark:hover:border-cyan-500 transition-colors"
							>
								← BACK TO LOGS
							</Link>
						</div>

						{step >= 1 && (
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								className="text-cyan-600 dark:text-cyan-500 font-mono mb-4 text-xs tracking-widest uppercase"
							>
								{post.category} {" // "} {post.date}
							</motion.div>
						)}

						{step >= 2 && (
							<motion.h1
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								className="text-3xl md:text-3xl font-bold mb-8 text-slate-900 dark:text-white"
							>
								{post.title}
							</motion.h1>
						)}

						{step >= 3 && (
							<div className="prose dark:prose-invert font-mono prose-slate prose-lg max-w-none text-justify">
								{/* 3. Render the motion-transformed value */}
								<motion.p>{display}</motion.p>
							</div>
						)}
					</>
				)}
			</article>
		</main>
	);
}
