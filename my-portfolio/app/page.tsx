import Education from "./home/education";
import Experience from "./home/experience";
import IntroPage from "./home/intro-page";
import SkillsCategories from "./home/skill-categories";
import Skills from "./home/skills";
import { AnimateSection } from "./page-animate-provider";

const Home = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	return (
		<div className="w-full px-4 md:px-8 xl:px-0">
			<IntroPage />

			<section className="max-w-7xl mx-auto">
				<AnimateSection>
					<p className="text-[20px] pt-15 text-teal font-valorant">
						{"01 ----// TECHNICAL SKILLS "}
					</p>
				</AnimateSection>
				<div className="grid lg:grid-cols-12 items-center w-full">
					<AnimateSection delay={1} className="lg:col-span-5 w-full">
						<SkillsCategories />
					</AnimateSection>
					<AnimateSection
						delay={2}
						className="lg:col-span-7 w-full flex justify-center"
					>
						<Skills />
					</AnimateSection>
				</div>

				<div className="relative grid lg:grid-cols-12 w-full mt-25">
					<div className="absolute left-1/2 top-20 bottom-0 w-0.5 bg-teal-500 hidden lg:block -translate-x-1/2" />

					<div className="lg:col-span-6 px-4">
						<AnimateSection>
							<p className="text-[20px] mb-2 text-teal font-valorant text-center">
								{"02 ----// EXPERIENCES "}
							</p>
						</AnimateSection>
						<Experience />
					</div>

					<div className="lg:col-span-6 px-4">
						<AnimateSection>
							<p className="text-[20px] mb-2 text-teal font-valorant text-center">
								{"03 ----// EDUCATION "}
							</p>
						</AnimateSection>
						<Education />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
