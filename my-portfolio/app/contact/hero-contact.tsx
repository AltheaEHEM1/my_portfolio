import Image from "next/image";

const HeroContact = () => {
	return (
		<div className="w-full text-center py-20 relative overflow-hidden">
			{/* Next.js Optimized Background Image */}
			<Image
				src="/assets/contact_bg.png"
				alt="Contact section background"
				fill
				priority
				className="object-cover object-[center_60%] pointer-events-none"
			/>

			{/* Dark overlay */}
			<div className="absolute inset-0 bg-black/50 pointer-events-none z-10"></div>

			{/* Content Container */}
			<div className="flex flex-col items-center justify-center relative z-20 text-white">
				<h1 className="text-4xl font-valorant mb-2">Contact</h1>
				<p className="text-[14px] font-poppins text-gray-200 max-w-xl px-4">
					Let&apos;s start a conversation.
				</p>
			</div>
		</div>
	);
};

export default HeroContact;
