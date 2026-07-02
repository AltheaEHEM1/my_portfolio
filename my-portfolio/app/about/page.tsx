import Certification from "./certification";
import HeaderAbout from "./header-about";
import Hobbies from "./hobbies";

const About = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	return (
		<section className="max-w-7xl mx-auto px-4">
			<HeaderAbout />

			<p className="text-[20px] pt-20 text-teal font-valorant">
				{"01 ----// Certification "}
			</p>
			<Certification />

			<p className="text-[20px] pt-20 text-teal font-valorant">
				{"02 ----// Hobbie & Interest "}
			</p>
			<Hobbies />
		</section>
	);
};

export default About;
