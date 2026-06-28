import ProjectsCarousel from "@/app/projects/project-carousel";
import ProjectGrid from "@/app/projects/project-grid";
import HeroSection from "@/components/hero/hero";

const Projects = () => {
	return (
		<>
			<HeroSection
				subtitle="----// 001 - GET TO KNOW ME"
				title="Projects"
				description="this is the projects page"
			/>
			<ProjectsCarousel />
			<ProjectGrid />
		</>
	);
};

export default Projects;
