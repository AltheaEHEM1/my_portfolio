import { useId } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

interface Project {
	id: number;
	title: string;
	description: string;
	images?: string[];
	carouselKey?: string;
}

interface CurvedCarouselProps {
	items: Project[];
	className?: string;
	slideClassName?: string;
	spaceBetween?: number;
	speed?: number;
	autoplay?: boolean;
	autoplayDelay?: number;
	onSwiper?: (swiper: SwiperClass) => void;
	onActiveIndexChange?: (index: number) => void;
	renderSlide: (project: Project, index: number) => React.ReactNode;
}

function CurvedCarousel({
	items = [],
	className = "",
	slideClassName = "!w-[74%] sm:!w-[64%] lg:!w-[56%]",
	spaceBetween = 24,
	speed = 700,
	autoplay = false,
	autoplayDelay = 3000,
	onSwiper,
	onActiveIndexChange,
	renderSlide,
}: CurvedCarouselProps) {
	const clipPathId = useId().replace(/:/g, "-");

	return (
		<div
			className={`relative w-full px-4 sm:px-6 lg:px-8 ${className}`.trim()}
			style={{ perspective: "1800px" }}
		>
			<svg
				aria-hidden="true"
				className="absolute pointer-events-none h-0 w-0"
				focusable="false"
			>
				<title>Curved Carousel Mask</title>
				<defs>
					<clipPath id={clipPathId} clipPathUnits="objectBoundingBox">
						<path d="M0,0 Q0.5,0.15 1,0 L1,1 Q0.5,0.85 0,1 Z" />
					</clipPath>
				</defs>
			</svg>

			<svg
				className="pointer-events-none absolute inset-0 z-50 h-full w-full"
				preserveAspectRatio="none"
				viewBox="0 0 100 100"
			>
				<title>Carousel Decorative Curves</title>
				<path
					d="M0,0 Q50,15 100,0"
					fill="none"
					stroke="#35A4B9"
					strokeWidth="3"
					vectorEffect="non-scaling-stroke"
				/>
				<path
					d="M0,100 Q50,85 100,100"
					fill="none"
					stroke="#35A4B9"
					strokeWidth="3"
					vectorEffect="non-scaling-stroke"
				/>
			</svg>

			<div
				className="h-full w-full"
				style={{
					clipPath: `url(#${clipPathId})`,
					WebkitClipPath: `url(#${clipPathId})`,
				}}
			>
				<Swiper
					modules={[EffectCoverflow, Autoplay]}
					effect="coverflow"
					centeredSlides
					loop={true}
					grabCursor
					observer
					observeParents
					observeSlideChildren
					slidesPerView="auto"
					spaceBetween={spaceBetween}
					speed={speed}
					autoplay={autoplay ? { delay: autoplayDelay } : false}
					onSwiper={(swiper) => {
						onSwiper?.(swiper);
						requestAnimationFrame(() => {
							swiper.update();
							swiper.slideToLoop(swiper.realIndex, 0, false);
						});
					}}
					onSlideChange={(swiper) => onActiveIndexChange?.(swiper.realIndex)}
					coverflowEffect={{
						rotate: 28,
						stretch: -30,
						depth: 260,
						scale: 0.8,
						modifier: 1.15,
						slideShadows: false,
					}}
					className="h-full overflow-visible!"
				>
					{items.map((item, index) => (
						<SwiperSlide
							key={item.carouselKey ?? item.id ?? index}
							className={slideClassName}
						>
							{renderSlide(item, index)}
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default CurvedCarousel;
