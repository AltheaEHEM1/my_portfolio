import Education from "./home/education";
import Experience from "./home/experience";
import IntroPage from "./home/intro-page";
import SkillsCategories from "./home/skill-categories";
import Skills from "./home/skills";

const Home = () => {
	return (
		<div className="w-full px-4 md:px-0">
			<IntroPage />

			<section className="max-w-7xl mx-auto">
				{/* Skills Section remains the same */}
				<p className="text-[15px] pt-20 text-teal font-valorant">
					{"01 ----// TECHNICAL SKILLS "}
				</p>
				<div className="grid lg:grid-cols-12 items-center w-full">
					<div className="lg:col-span-5 w-full">
						<SkillsCategories />
					</div>
					<div className="lg:col-span-7 w-full flex justify-center">
						<Skills />
					</div>
				</div>

				{/* --- Timeline Section --- */}
				<div className="relative grid lg:grid-cols-12 w-full mt-25">
					{/* The Center Line: top-20 clears the headers */}
					<div className="absolute left-1/2 top-20 bottom-0 w-0.5 bg-teal-500 hidden lg:block -translate-x-1/2" />

					{/* Left Column (Experience) */}
					<div className="lg:col-span-6 px-4">
						<p className="text-[15px] mb-2 text-teal font-valorant text-center">
							{"02 ----// EXPERIENCES "}
						</p>
						<Experience />
					</div>

					{/* Right Column (Education) */}
					<div className="lg:col-span-6 px-4">
						<p className="text-[15px] mb-2 text-teal font-valorant text-center">
							{"03 ----// EDUCATION "}
						</p>
						<Education />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
