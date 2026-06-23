import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import MatrixBackground from "../components/background/hero-background";
import Footer from "../components/footer/footer";
import NavHeader from "../components/navbar/header";
import PageAnimateProvider from "./page-animate-provider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
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
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col relative bg-background text-foreground">
				{/* Background Design */}
				<MatrixBackground />

				{/* Navbar */}
				<NavHeader />

				{/* Main Content Safe Layer */}
				<main className="relative z-10">
					<PageAnimateProvider>{children}</PageAnimateProvider>
				</main>

				{/* Footer */}
				<footer className="mt-auto">
					<Footer />
				</footer>
			</body>
		</html>
	);
}
