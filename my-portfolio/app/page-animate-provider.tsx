"use client";

import {
	motion,
	type HTMLMotionProps,
	type Variants,
} from "framer-motion";
import { usePathname } from "next/navigation";
import type React from "react";

const PAGE_EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUpVariants: Variants = {
	hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
	visible: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			delay: i * 0.12,
			duration: 0.6,
			ease: PAGE_EASE,
		},
	}),
};

export const fadeUpItemVariants: Variants = {
	hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			duration: 0.6,
			ease: PAGE_EASE,
		},
	},
};

export const staggerContainerVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.05,
		},
	},
};

type AnimateSectionProps = HTMLMotionProps<"div"> & {
	delay?: number;
};

export function AnimateSection({
	children,
	className,
	delay = 0,
	...props
}: AnimateSectionProps): React.JSX.Element {
	return (
		<motion.div
			className={className}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.15 }}
			variants={fadeUpVariants}
			custom={delay}
			{...props}
		>
			{children}
		</motion.div>
	);
}

export function AnimateStagger({
	children,
	className,
	...props
}: HTMLMotionProps<"div">): React.JSX.Element {
	return (
		<motion.div
			className={className}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.1 }}
			variants={staggerContainerVariants}
			{...props}
		>
			{children}
		</motion.div>
	);
}

export function AnimateItem({
	children,
	className,
	...props
}: HTMLMotionProps<"div">): React.JSX.Element {
	return (
		<motion.div className={className} variants={fadeUpItemVariants} {...props}>
			{children}
		</motion.div>
	);
}

export default function PageAnimateProvider({
	children,
}: {
	children: React.ReactNode;
}): React.JSX.Element {
	const pathname = usePathname();

	return (
		<div key={pathname} className="page-transition">
			{children}
		</div>
	);
}
