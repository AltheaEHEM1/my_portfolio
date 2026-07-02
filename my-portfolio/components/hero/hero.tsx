import Image from "next/image";

interface HeroSectionProps {
	title?: string;
	subtitle?: string;
	description?: string;
	image?: string;
}

const HeroSection = ({
	title = "HeroSection",
	image = "/assets/certification/PUPCAAD.jpg",
	description = "Lorem ipsum...",
}: HeroSectionProps) => {
	return (
		<div className="w-full text-center py-15 relative overflow-hidden h-40">
			{/* Next.js Optimized Background Image */}
			<Image
				src={image}
				alt={title}
				fill
				priority
				className="object-cover object-[center_60%] pointer-events-none"
			/>

			{/* Dark overlay */}
			<div className="absolute inset-0 bg-black/50 pointer-events-none z-10"></div>

			{/* Content Container */}
			<div className="flex flex-col items-center justify-center relative z-20 text-white">
				<h1 className="text-3xl font-valorant">{title}</h1>
				<p className="text-[10px] font-poppins text-gray-200">{description}</p>
			</div>
		</div>
	);
};

export default HeroSection;
