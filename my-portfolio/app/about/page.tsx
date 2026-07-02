import Certification from "./certification";
import HeaderAbout from "./header-about";
import Hobbies from "./hobbies";

const About = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	return (
		<section className="max-w-7xl mx-auto">
			<HeaderAbout />

			<p className="text-[15px] pt-20 text-teal font-valorant">
				{"01 ----// Certificate "}
			</p>
			<Certification />

			<p className="text-[15px] pt-20 text-teal font-valorant">
				{"02 ----// Hobbie & Interest "}
			</p>
			<Hobbies />
		</section>
	);
};

export default About;
