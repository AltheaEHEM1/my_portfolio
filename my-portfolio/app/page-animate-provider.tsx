"use client";

import { usePathname } from "next/navigation";
import type React from "react";

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
