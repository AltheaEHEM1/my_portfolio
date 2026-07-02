"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Forbidden403() {
	return (
		<div
			data-page-type="forbidden"
			className="flex flex-col items-center justify-center text-center"
		>
			<motion.div
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<svg
					viewBox="0 0 200 150"
					className="w-44 h-44 md:w-80 md:h-80"
					role="img"
				>
					<title>Locked padlock illustration</title>
					<circle cx="100" cy="75" r="50" fill="#f0fdf4" />
					<path
						d="M75 70V50a25 25 0 0 1 50 0v20"
						stroke="#0d9488"
						strokeWidth="8"
						fill="none"
						strokeLinecap="round"
					/>
					<rect x="75" y="70" width="50" height="40" rx="5" fill="#0d9488" />
					<circle cx="100" cy="90" r="5" fill="#f0fdf4" />
				</svg>
			</motion.div>

			{/* Increased negative margin to pull text closer to the SVG */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.8 }}
				className="-mt-15 flex flex-col items-center"
			>
				<h2 className="text-3xl font-bold text-gray-800 mb-2">
					403 - Forbidden
				</h2>
				<p className="text-gray-600 max-w-md">
					You do not have permission to access this page. Please contact the
					administrator if you believe this is a mistake.
				</p>
				<Link
					href="/"
					className="mt-6 inline-block px-6 py-2 bg-[#0d9488] text-white rounded-lg hover:bg-[#0f766e] transition-colors font-mono text-sm"
				>
					Back to Home
				</Link>
			</motion.div>
		</div>
	);
}
