import ProjectsCarousel from "@/app/projects/project-carousel";
import ProjectGrid from "@/app/projects/project-grid";
import HeroSection from "@/components/hero/hero";

const Projects = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	return (
		<>
			<HeroSection
				image="/assets/bg-hero/project_bg.png"
				title="Projects"
				description="Explore my latest work, technical experiments, and creative projects."
			/>
			<ProjectsCarousel />

			<section>
				<ProjectGrid />
			</section>
		</>
	);
};

export default Projects;
