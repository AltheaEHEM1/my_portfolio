"use client";

import Image from "next/image";
import { useState } from "react";
import certs from "../../data/certification.json";
import { AnimateItem, AnimateStagger } from "../page-animate-provider";

interface Certification {
	id: string | number;
	title: string;
	image: string;
	description: string;
	issuer: string;
	date: string;
}

export default function Certification() {
	const [activeCert, setActiveCert] = useState<Certification>(certs[0]);

	return (
		<AnimateStagger className="flex flex-col md:flex-row w-full gap-6 md:gap-12 px-4 md:px-15 pt-3 md:divide-x divide-border">
			<AnimateItem className="w-full md:w-80 shrink-0 md:pr-12">
				<nav className="overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
					<AnimateStagger className="flex md:flex-col gap-2 md:gap-0 md:space-y-1 w-max md:w-full">
						{certs.map((cert) => (
							<AnimateItem key={cert.id} className="shrink-0">
								<button
									type="button"
									onClick={() => setActiveCert(cert)}
									className={`whitespace-nowrap md:whitespace-normal w-full text-left px-3 py-2 text-sm md:text-base font-medium transition-all rounded-lg border ${
										activeCert.id === cert.id
											? "bg-teal-pale border-teal text-teal-dark shadow-sm"
											: "border-transparent hover:bg-muted text-foreground"
									}`}
								>
									{cert.title}
								</button>
							</AnimateItem>
						))}
					</AnimateStagger>
				</nav>
			</AnimateItem>

			<AnimateItem className="flex-1">
				<h1 className="font-valorant text-lg text-foreground tracking-tight">
					{activeCert.title}
				</h1>
				<div className="flex gap-3 text-xs text-teal font-medium mb-5 uppercase tracking-wider">
					<span>{activeCert.issuer}</span>
					<span>|</span>
					<span>{activeCert.date}</span>
				</div>
				<div className="w-full max-w-1xl aspect-video bg-muted rounded-xl overflow-hidden mb-4 border border-border flex items-center justify-center">
					<Image
						src={activeCert.image}
						alt={activeCert.title}
						width={800}
						height={450}
						className="object-contain w-full h-full p-2"
					/>
				</div>
				<div className="max-w-1xl">
					<h3 className="font-valorant text-sm text-foreground uppercase tracking-wider">
						About the Certificate
					</h3>
					<p className="text-base text-muted-foreground leading-relaxed">
						{activeCert.description}
					</p>
				</div>
			</AnimateItem>
		</AnimateStagger>
	);
}
