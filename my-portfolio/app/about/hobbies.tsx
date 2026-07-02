"use client";

import Image from "next/image";
import type { FC } from "react";
import hobbiesData from "../../data/hobbies.json";
import { AnimateItem, AnimateStagger } from "../page-animate-provider";

interface Hobby {
	id: number;
	title: string;
	description: string;
	image: string;
}

const Hobbies: FC = () => {
	return (
		<div className="max-w-6xl mx-auto p-6">
			<AnimateStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{hobbiesData.map((hobby: Hobby) => (
					<AnimateItem
						key={hobby.id}
						className="group relative h-80 w-full overflow-hidden rounded-xl shadow-lg cursor-pointer border border-teal"
					>
						<Image
							src={hobby.image}
							alt={hobby.title}
							fill
							className="object-cover transition-transform duration-500 group-hover:scale-110"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>

						<div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center items-center text-white p-6 text-center">
							<h3 className="text-2xl font-bold mb-2">{hobby.title}</h3>
							<p className="text-sm">{hobby.description}</p>
						</div>
					</AnimateItem>
				))}
			</AnimateStagger>
		</div>
	);
};

export default Hobbies;
