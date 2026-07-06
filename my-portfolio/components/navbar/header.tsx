"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import { useEffect, useState } from "react";

export default function NavHeader(): React.JSX.Element {
	const pathname = usePathname();
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
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
	}, []);

	const toggleDarkMode = () => {
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
		<nav className="sticky top-0 z-50 w-full backdrop-blur-md transition-colors duration-300">
			<div className="w-full px-6 md:px-12 lg:px-20 xl:px-24 h-18 flex items-center justify-between">
				{/* Logo */}
				<Link
					href="/"
					className="focus:outline-none select-none cursor-pointer group"
					aria-label="Home"
				>
					<span className="inline-block font-valorant text-lg tracking-widest uppercase">
						<span className="font-sans text-(--nav-teal)">&lt;</span>
						<span className="text-(--nav-teal) mx-0.5">AAJ.ASIS</span>
						<span className="font-sans text-(--nav-teal)">/&gt;</span>
					</span>
				</Link>

				{/* Right Side Navigation & Theme Toggle */}
				<div className="flex items-center space-x-4">
					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center">
						<ul className="flex items-center space-x-1">
							{navItems.map((item) => {
								const isActive =
									item.href === "/"
										? pathname === "/"
										: pathname === item.href ||
											pathname.startsWith(`${item.href}/`);
								return (
									<li key={item.name}>
										<Link
											href={item.href}
											className={`px-4 py-2.5 text-xs tracking-widest uppercase font-valorant rounded-xl transition-all duration-300 ${
												isActive
													? "bg-(--nav-bg-btn) text-(--nav-teal)"
													: "text-(--nav-text-color) hover:text-(--nav-teal) dark:hover:text-teal-200 hover:bg-(--nav-bg-hover)"
											}`}
										>
											{item.name}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>

					{/* Theme Toggle Button */}
					<button
						type="button"
						onClick={toggleDarkMode}
						className="p-2 rounded-xl text-(--nav-text-color) hover:bg-(--nav-bg-hover) hover:text-(--nav-teal) dark:hover:text-teal-200 transition-all duration-300 focus:outline-none cursor-pointer"
						aria-label="Toggle theme"
					>
						{isDarkMode ? (
							<svg
								className="h-5 w-5 fill-none stroke-current"
								viewBox="0 0 24 24"
							>
								<title>Light Mode</title>
								<circle cx="12" cy="12" r="4" strokeWidth="2" />
								<path
									strokeWidth="2"
									strokeLinecap="round"
									d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
								/>
							</svg>
						) : (
							<svg
								className="h-5 w-5 fill-none stroke-current"
								viewBox="0 0 24 24"
							>
								<title>Dark Mode</title>
								<path
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
								/>
							</svg>
						)}
					</button>

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
							<title>Menu Icon</title>
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
			</div>

			{/* Mobile Menu Dropdown */}
			<div
				className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
					isMenuOpen
						? "max-h-64 border-t border-(--nav-border-color) opacity-100"
						: "max-h-0 opacity-0 pointer-events-none"
				}`}
			>
				<ul className="px-4 py-3 space-y-1 bg-(--nav-bg-color) backdrop-blur-md">
					{navItems.map((item) => {
						const isActive =
							item.href === "/"
								? pathname === "/"
								: pathname === item.href ||
									pathname.startsWith(`${item.href}/`);
						return (
							<li key={item.name}>
								<Link
									href={item.href}
									onClick={() => setIsMenuOpen(false)}
									className={`block px-4 py-2.5 text-sm font-bold tracking-widest uppercase font-valorant rounded-xl transition-all duration-300 ${
										isActive
											? "bg-(--nav-bg-btn) text-(--nav-teal)"
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
