import type { Metadata } from "next";
import {
	Geist,
	Geist_Mono,
	Orbitron,
	Rajdhani,
	Space_Mono,
} from "next/font/google";
import "./globals.css";

import MatrixBackground from "../components/background/hero-background";
import Footer from "../components/footer/footer";
import NavHeader from "../components/navbar/header";
import PageAnimateProvider from "./page-animate-provider";
import ScrollToTop from "../components/scroll-to-top/scroll-to-top";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const orbitron = Orbitron({
	variable: "--font-orbitron",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
});

const rajdhani = Rajdhani({
	variable: "--font-rajdhani",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
	variable: "--font-space-mono",
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: "Althea | Portfolio",
	description:
		"Welcome to my space. A simple archive showcasing my work, projects, and ideas.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${rajdhani.variable} ${spaceMono.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col relative bg-background text-foreground">
				{/* Background Design */}
				<MatrixBackground />

				{/* Navbar */}
				<NavHeader />

				{/* Main Content Safe Layer */}
				<main className="relative z-10 mb-10">
					<PageAnimateProvider>
						<div className="w-full">{children}</div>
					</PageAnimateProvider>
				</main>

				{/* Scroll to Top Button */}
				<ScrollToTop />

				{/* Footer */}
				<footer className="mt-auto">
					<Footer />
				</footer>
			</body>
		</html>
	);
}
