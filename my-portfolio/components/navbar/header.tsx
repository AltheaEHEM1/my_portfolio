"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import { useEffect, useState } from "react";


export default function NavHeader(): React.JSX.Element {
	const pathname = usePathname();
	const [_isDarkMode, setIsDarkMode] = useState<boolean>(false);
	const [isPressed, setIsPressed] = useState<boolean>(false);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const navItems = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Projects", href: "/projects" },
		{ name: "Blog", href: "/blog" },
		{ name: "Contact", href: "/contact" },
	];

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;
		if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
			setIsDarkMode(true);
			document.documentElement.classList.add("dark");
		}
	}, []);

	// Close mobile menu on page transition
	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	const toggleDarkMode = () => {
		setIsPressed(true);
		setTimeout(() => setIsPressed(false), 500);

		const isDark = document.documentElement.classList.contains("dark");
		if (isDark) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
			setIsDarkMode(false);
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
			setIsDarkMode(true);
		}
	};

	return (
		<nav className="w-full bg-(--nav-bg-color) backdrop-blur-md border-b border-(--nav-border-color) transition-colors duration-300">
			<div className="max-w-7xl mx-auto px-6 h-17 flex items-center justify-between">
				<button
					type="button" // FIX: Added type="button" to satisfy a11y lint
					onClick={toggleDarkMode}
					className="focus:outline-none select-none cursor-pointer group"
					aria-label="Toggle theme"
				>
					<span
						className={`inline-block font-mono font-bold text-lg tracking-wide transition-all duration-500 ease-out ${isPressed ? "scale-95 opacity-30" : "hover:scale-105"}`}
					>
						<span className={isPressed ? "" : "text-teal"}>&lt;&nbsp;</span>
						<span className={isPressed ? "" : "text-teal-dark"}>AAJ.Asis</span>
						<span className={isPressed ? "" : "text-teal"}>&nbsp;/&gt;</span>
					</span>
				</button>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center">
					<ul className="flex items-center space-x-0.5 sm:space-x-1">
						{navItems.map((item) => {
							const isActive = pathname === item.href;
							return (
								<li key={item.name}>
									<Link
										href={item.href}
										className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
											isActive
												? "bg-(--nav-bg-btn) text-(--nav-teal) font-semibold"
												: "text-slate-600 dark:text-slate-300 hover:text-(--nav-teal) dark:hover:text-teal-200 hover:bg-(--nav-bg-hover)"
										}`}
									>
										{item.name}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>

				{/* Hamburger Button for Mobile */}
				<button
					type="button"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-(--nav-bg-hover) hover:text-(--nav-teal) transition-colors focus:outline-none cursor-pointer"
					aria-expanded={isMenuOpen}
					aria-label="Toggle menu"
				>
					<svg
						className="h-6 w-6 fill-none stroke-current"
						viewBox="0 0 24 24"
					>
						{isMenuOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						)}
					</svg>
				</button>
			</div>

			{/* Mobile Menu Dropdown */}
			<div
				className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
					isMenuOpen ? "max-h-64 border-t border-(--nav-border-color) opacity-100" : "max-h-0 opacity-0 pointer-events-none"
				}`}
			>
				<ul className="px-4 py-3 space-y-1 bg-(--nav-bg-color) backdrop-blur-md">
					{navItems.map((item) => {
						const isActive = pathname === item.href;
						return (
							<li key={item.name}>
								<Link
									href={item.href}
									className={`block px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
										isActive
											? "bg-(--nav-bg-btn) text-(--nav-teal) font-semibold"
											: "text-slate-600 dark:text-slate-300 hover:text-(--nav-teal) dark:hover:text-teal-200 hover:bg-(--nav-bg-hover)"
									}`}
								>
									{item.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
}
