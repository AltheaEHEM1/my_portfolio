import { AnimateSection } from "../page-animate-provider";
import Certification from "./certification";
import HeaderAbout from "./header-about";
import Hobbies from "./hobbies";
import Media from "./media";

const About = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	return (
		<section className="max-w-7xl mx-auto px-4">
			<HeaderAbout />

			<AnimateSection>
				<p className="text-[20px] pt-20 text-teal font-valorant">
					{"01 ----// Certification "}
				</p>
			</AnimateSection>
			<Certification />

			<AnimateSection>
				<p className="text-[20px] pt-20 text-teal font-valorant">
					{"02 ----// Hobbie & Interest "}
				</p>
			</AnimateSection>
			<Hobbies />

			<AnimateSection>
				<p className="text-[20px] pt-20 text-teal font-valorant">
					{"03 ----// Media "}
				</p>
			</AnimateSection>
			<Media/>
		</section>
	);
};

export default About;
