"use client";

import { useEffect, useState } from "react";
import HeroBackgroundDark from "./hero-background-dark";
import HeroBackgroundLight from "./hero-background-light";

export default function HeroBackground(): React.JSX.Element {
	const [isDark, setIsDark] = useState<boolean>(false);

	useEffect(() => {
		const checkTheme = (): void => {
			setIsDark(document.documentElement.classList.contains("dark"));
		};

		checkTheme();

		const observer = new MutationObserver(checkTheme);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"],
		});

		return () => observer.disconnect();
	}, []);

	return isDark ? <HeroBackgroundDark /> : <HeroBackgroundLight />;
}
