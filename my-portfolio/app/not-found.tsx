"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound404() {
	return (
		<div
			data-page-type="not-found"
			className="flex flex-col items-center justify-center text-center"
		>
			{/* Roadblock Illustration */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="relative mb-12"
			>
				<svg
					width="300"
					height="200"
					viewBox="0 0 300 200"
					className="drop-shadow-lg"
					role="img"
				>
					<title>404 Roadblock warning sign</title>
					{/* Barrier Rails */}
					<rect x="50" y="80" width="200" height="20" fill="#ef4444" />
					<rect x="50" y="120" width="200" height="20" fill="#ef4444" />
					{/* Sign */}
					<motion.path
						d="M150 40 L220 100 L150 160 L80 100 Z"
						fill="#facc15"
						stroke="#eab308"
						strokeWidth="5"
						whileHover={{ scale: 1.05 }}
					/>
					<text
						x="150"
						y="110"
						textAnchor="middle"
						className="font-black text-3xl fill-slate-800"
					>
						404
					</text>
				</svg>

				{/* Floating Cones */}
				<motion.div
					animate={{ y: [0, -10, 0] }}
					transition={{ repeat: Infinity, duration: 2 }}
					className="absolute -bottom-10 left-10 w-16 h-20 bg-orange-600 rounded-t-sm clip-cone"
				/>
				<motion.div
					animate={{ y: [0, -10, 0] }}
					transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
					className="absolute -bottom-10 right-10 w-16 h-20 bg-orange-600 rounded-t-sm clip-cone"
				/>
			</motion.div>

			{/* Content */}
			<h2 className="text-2xl font-black text-slate-800 mb-2">Oops!</h2>
			<p className="text-sm text-slate-600 max-w-sm mb-4">
				Sorry, the page you're looking for doesn't exist. If you think something
				is broken, report a problem.
			</p>

			<Link
				href="/"
				className="mt-6 px-6 py-2 bg-[#0d9488] text-white rounded-lg hover:opacity-90 transition font-mono text-sm"
			>
				Back to Home
			</Link>

			<style jsx>{`
        .clip-cone {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
		</div>
	);
}
