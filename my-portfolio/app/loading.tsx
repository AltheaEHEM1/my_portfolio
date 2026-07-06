"use client";

import { usePathname } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
	const pathname = usePathname();
	console.log("Loading skeleton rendered for path:", pathname);

	if (pathname === "/") {
		return <HomeSkeleton />;
	} else if (pathname === "/about") {
		return <AboutSkeleton />;
	} else if (pathname === "/projects") {
		return <ProjectsSkeleton />;
	} else if (pathname === "/contact") {
		return <ContactSkeleton />;
	} else if (pathname?.startsWith("/blog")) {
		return <BlogSkeleton />;
	}

	// Fallback generic skeleton
	return (
		<div className="flex flex-col space-y-6 w-full px-4 md:px-0 max-w-7xl mx-auto mt-20 animate-pulse">
			<Skeleton className="h-75 w-full rounded-2xl" />
			<div className="space-y-4">
				<Skeleton className="h-6 w-62.5" />
				<Skeleton className="h-4 w-50" />
				<Skeleton className="h-4 w-75" />
			</div>
		</div>
	);
}

// HOME SKELETON
function HomeSkeleton() {
	return (
		<div className="w-full px-4 md:px-0">
			{/* Intro Page Skeleton */}
			<div className="max-w-4xl mx-auto h-[calc(100vh-80px)] md:h-[calc(100vh-120px)] flex flex-col md:flex-row items-center justify-center gap-10 mt-10 p-5 md:p-0 relative">
				<div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 p-3 pt-10">
					<Skeleton className="h-10 w-3/4 mb-2 rounded-lg" />
					<Skeleton className="h-12 w-1/2 mb-4 rounded-lg" />
					<Skeleton className="h-20 w-full mb-6 rounded-lg" />

					<div className="flex flex-row gap-3 mt-4">
						<Skeleton className="h-10 w-32 rounded-xl" />
						<Skeleton className="h-10 w-32 rounded-xl" />
					</div>
				</div>

				<div className="w-full md:w-1/2 flex justify-center mt-5 md:mt-0 z-10">
					<Skeleton className="w-64 h-64 md:w-87.5 md:h-87.5 rounded-full" />
				</div>
			</div>

			<section className="max-w-7xl mx-auto">
				{/* Skills Section Skeleton */}
				<div className="pt-20 mb-4">
					<Skeleton className="h-5 w-48" />
				</div>

				<div className="grid lg:grid-cols-12 items-center w-full gap-8">
					<div className="lg:col-span-5 w-full mx-auto py-2 px-6 md:px-10">
						<div className="relative border-l-2 border-slate-200/60 dark:border-slate-800 pl-8 ml-3 space-y-5">
							{[1, 2, 3, 4, 5].map((i) => (
								<div key={i} className="relative space-y-2">
									<div className="absolute -left-10.25 flex items-center justify-center top-0">
										<Skeleton className="w-4 h-4 rounded-full" />
									</div>
									<Skeleton className="h-4 w-32 rounded-md" />
									<div className="flex flex-wrap gap-2 pl-3 mt-2">
										<Skeleton className="h-6 w-16 rounded-lg" />
										<Skeleton className="h-6 w-20 rounded-lg" />
										<Skeleton className="h-6 w-14 rounded-lg" />
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="lg:col-span-7 w-full flex justify-center">
						<div className="relative h-100 w-full flex items-center justify-center">
							<Skeleton className="w-64 h-64 rounded-full blur-[100px] opacity-20" />
							<Skeleton className="absolute w-20 h-20 rounded-full" />
						</div>
					</div>
				</div>

				{/* Timeline Section Skeleton */}
				<div className="relative grid lg:grid-cols-12 w-full mt-25">
					<div className="absolute left-1/2 top-20 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 hidden lg:block -translate-x-1/2" />

					<div className="lg:col-span-6 px-4">
						<div className="mb-2 flex justify-center">
							<Skeleton className="h-5 w-40" />
						</div>
						<div className="w-full py-8 space-y-6">
							{[1, 2, 3].map((i) => (
								<div
									key={i}
									className="relative flex justify-center lg:justify-end lg:pr-8"
								>
									<Skeleton className="absolute -right-2 top-6 hidden lg:block w-4 h-4 rounded-full" />
									<Skeleton className="w-full max-w-lg h-30 rounded-xl" />
								</div>
							))}
						</div>
					</div>

					<div className="lg:col-span-6 px-4">
						<div className="mb-2 flex justify-center">
							<Skeleton className="h-5 w-40" />
						</div>
						<div className="w-full py-8 space-y-6">
							{[1, 2, 3].map((i) => (
								<div
									key={i}
									className="relative flex justify-center lg:justify-start lg:pl-8"
								>
									<Skeleton className="absolute -left-2 top-6 hidden lg:block w-4 h-4 rounded-full" />
									<Skeleton className="w-full max-w-lg h-30 rounded-xl" />
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

// ABOUT SKELETON
function AboutSkeleton() {
	return (
		<div className="w-full px-4 md:px-0">
			<section className="max-w-7xl mx-auto">
				{/* Header About Skeleton */}
				<div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 pt-2 items-center">
					<div className="md:col-span-5 relative flex justify-center md:justify-end">
						<div className="relative w-full max-w-xs">
							<Skeleton className="aspect-4/5 w-full rounded-2xl" />
						</div>
					</div>
					<div className="md:col-span-6 pt-5 flex flex-col items-center md:items-start text-center md:text-left space-y-5">
						<Skeleton className="h-10 w-64 rounded-lg" />
						<Skeleton className="h-6 w-56 rounded-full" />
						<Skeleton className="h-32 w-full rounded-lg" />
						<div className="flex flex-row gap-3 w-full max-w-sm">
							<Skeleton className="h-10 w-28 rounded-xl" />
							<Skeleton className="h-10 w-28 rounded-xl" />
						</div>
					</div>
				</div>

				{/* Certificates Skeleton */}
				<div className="pt-20 mb-4">
					<Skeleton className="h-5 w-40" />
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{[1, 2, 3].map((i) => (
						<Skeleton key={i} className="h-64 w-full rounded-xl" />
					))}
				</div>

				{/* Hobbies Skeleton */}
				<div className="pt-20 mb-4">
					<Skeleton className="h-5 w-48" />
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
					{[1, 2, 3, 4].map((i) => (
						<Skeleton key={i} className="h-32 w-full rounded-xl" />
					))}
				</div>
			</section>
		</div>
	);
}

// PROJECTS SKELETON
function ProjectsSkeleton() {
	return (
		<div className="w-full px-4 md:px-0">
			{/* Hero Section Skeleton */}
			<div className="w-full text-center py-15 relative overflow-hidden h-40 flex flex-col items-center justify-center">
				<Skeleton className="absolute inset-0 h-full w-full" />
				<Skeleton className="h-8 w-40 rounded-xl z-20 mb-2" />
				<Skeleton className="h-4 w-64 rounded-lg z-20" />
			</div>

			{/* Projects Carousel Skeleton */}
			<section className="max-w-7xl mx-auto mt-10">
				<Skeleton className="h-96 w-full max-w-5xl mx-auto rounded-3xl mb-12" />
			</section>

			{/* Project Grid Skeleton */}
			<section className="max-w-7xl mx-auto mt-12 mb-20">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[1, 2, 3, 4, 5, 6].map((i) => (
						<Skeleton key={i} className="h-87.5 w-full rounded-2xl" />
					))}
				</div>
			</section>
		</div>
	);
}

// CONTACT SKELETON
function ContactSkeleton() {
	return (
		<div className="w-full px-4 md:px-0">
			{/* Hero Section Skeleton */}
			<div className="w-full text-center py-15 relative overflow-hidden h-40 flex flex-col items-center justify-center">
				<Skeleton className="absolute inset-0 h-full w-full" />
				<Skeleton className="h-8 w-40 rounded-xl z-20 mb-2" />
				<Skeleton className="h-4 w-64 rounded-lg z-20" />
			</div>

			<section className="max-w-7xl mx-auto mt-12">
				<div className="pt-5 mb-4">
					<Skeleton className="h-5 w-48" />
				</div>

				{/* Contact Form Skeleton */}
				<div className="w-full max-w-2xl mt-8 space-y-6">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						<Skeleton className="h-12 w-full rounded-lg" />
						<Skeleton className="h-12 w-full rounded-lg" />
					</div>
					<Skeleton className="h-12 w-full rounded-lg" />
					<Skeleton className="h-32 w-full rounded-lg" />
					<Skeleton className="h-12 w-32 rounded-xl" />
				</div>

				<div className="pt-20 mb-8">
					<Skeleton className="h-5 w-56" />
				</div>

				{/* Flip Contact Cards Skeleton */}
				<div className="grid grid-cols-1 md:grid-cols-3 justify-items-center w-full mb-20 gap-8">
					{[1, 2, 3].map((i) => (
						<Skeleton
							key={i}
							className="h-40 w-full max-w-75 rounded-2xl"
						/>
					))}
				</div>
			</section>
		</div>
	);
}

// BLOG SKELETON
function BlogSkeleton() {
	return (
		<div className="w-full px-4 md:px-0">
			{/* Hero Section Skeleton */}
			<div className="w-full text-center py-15 relative overflow-hidden h-40 flex flex-col items-center justify-center">
				<Skeleton className="absolute inset-0 h-full w-full" />
				<Skeleton className="h-8 w-40 rounded-xl z-20 mb-2" />
				<Skeleton className="h-4 w-64 rounded-lg z-20" />
			</div>

			{/* Blog Posts Grid Skeleton */}
			<section className="max-w-6xl mx-auto px-6 py-20">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[1, 2, 3, 4, 5, 6].map((i) => (
						<div
							key={i}
							className="flex flex-col border border-slate-200 dark:border-slate-800 p-6 rounded-xl h-70"
						>
							<Skeleton className="h-3 w-32 mb-4 rounded-md" />
							<Skeleton className="h-6 w-3/4 mb-4 rounded-md" />
							<div className="space-y-2 mb-6 grow">
								<Skeleton className="h-4 w-full rounded-md" />
								<Skeleton className="h-4 w-full rounded-md" />
								<Skeleton className="h-4 w-5/6 rounded-md" />
							</div>
							<Skeleton className="h-4 w-24 rounded-md" />
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
