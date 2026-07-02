import HeroSection from "@/components/hero/hero";

const Blog = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	return (
		<HeroSection
			image="/assets/bg-hero/contact_bg.png"
			subtitle="----// 001 - GET TO KNOW ME"
			title="Projects"
			description="this is the projects page"
		/>
	);
};

export default Blog;
