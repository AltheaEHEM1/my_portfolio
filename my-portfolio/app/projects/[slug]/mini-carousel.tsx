import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface MiniCarouselProps {
	images?: string[];
	alt?: string;
}

function MiniCarousel({
	images = [],
	alt = "Project image",
}: MiniCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);

	const nextImage = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % images.length);
	}, [images.length]);

	const prevImage = useCallback(() => {
		setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
	}, [images.length]);

	useEffect(() => {
		if (!isAutoPlaying || images.length <= 1) return;

		const interval = setInterval(nextImage, 3000);
		return () => clearInterval(interval);
	}, [isAutoPlaying, images.length, nextImage]);

	if (!images || images.length === 0) {
		return (
			<div className="flex aspect-video w-full items-center justify-center placeholder-shimmer">
				<span
					className="text-sm uppercase tracking-[0.3em] opacity-40"
					style={{ color: "var(--text-title2)" }}
				>
					Project Preview
				</span>
			</div>
		);
	}

	return (
		<section
			className="group relative overflow-hidden rounded-xl"
			onMouseEnter={() => setIsAutoPlaying(false)}
			onMouseLeave={() => setIsAutoPlaying(true)}
			aria-label="Project image carousel"
		>
			<div className="relative w-full h-0 pb-[56.25%]">
				{images.map((image) => (
					<Image
						key={image}
						src={`/assets/project-cover-picture/${image}`}
						alt={alt}
						fill
						className={`absolute inset-0 object-cover transition-all duration-700 ease-in-out group-hover:scale-[1.02] ${
							images.indexOf(image) === currentIndex
								? "opacity-100 scale-100"
								: "opacity-0 scale-95"
						}`}
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				))}
			</div>

			{images.length > 1 && (
				<>
					<button
						type="button"
						onClick={prevImage}
						aria-label="Previous image"
						className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-black/70 z-10"
					>
						<ChevronLeft size={20} />
					</button>

					<button
						type="button"
						onClick={nextImage}
						aria-label="Next image"
						className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-black/70 z-10"
					>
						<ChevronRight size={20} />
					</button>

					<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
						{images.map((image, index) => (
							<button
								type="button"
								key={image}
								aria-label={`Go to image ${index + 1}`}
								onClick={() => setCurrentIndex(index)}
								className={`h-2 w-2 rounded-full transition-all duration-300 ${
									index === currentIndex
										? "bg-white scale-125"
										: "bg-white/50 hover:bg-white/75"
								}`}
							/>
						))}
					</div>
				</>
			)}
		</section>
	);
}

export default MiniCarousel;
