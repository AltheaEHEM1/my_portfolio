"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react"; // Install: npm install lucide-react
import Link from "next/link";

export default function ErrorPage({
	error,
}: {
	error: Error & { digest?: string };
}) {
	const isNetworkError =
		error.message.toLowerCase().includes("fetch") ||
		error.message.toLowerCase().includes("network");

	return (
		<>
			<style>{`
				#global-nav-header, #global-scroll-to-top, #global-footer {
					display: none !important;
				}
			`}</style>
			<div
				data-page-type="error"
				className="flex min-h-100 flex-col items-center justify-center p-6 text-center"
			>
			{/* Abstract Error Motif */}
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-rose-50 ring-4 ring-rose-100"
			>
				<AlertTriangle className="h-10 w-10 text-rose-500" strokeWidth={1.5} />
			</motion.div>

			{/* Error Details */}
			<div className="space-y-2 mb-8">
				<h2 className="text-4xl font-extrabold tracking-tighter text-slate-900">
					{isNetworkError ? "Connection Lost" : "System Error"}
				</h2>
				<p className="text-slate-500 max-w-xs mx-auto">
					{isNetworkError
						? "We are unable to reach our servers. Please check your internet connection."
						: "An unexpected error occurred on our end. Our engineering team has been notified."}
				</p>
			</div>

			<Link
				href="/"
				className="mt-6 inline-block px-6 py-2 bg-[#0d9488] text-white rounded-lg hover:bg-[#0f766e] transition-colors font-mono text-sm"
			>
				Back to Home
			</Link>
		</div>
		</>
	);
}
