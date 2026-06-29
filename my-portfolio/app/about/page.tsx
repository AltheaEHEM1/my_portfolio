import HeroSection from "@/components/hero/hero";

const About = () => {
	return (
		<>
			<HeroSection
				subtitle="----// 001 - GET TO KNOW ME"
				title="About"
				description="This is the about page"
			/>

			<section className="max-w-7xl mx-auto">
				<p className="text-[15px] pt-20 text-teal font-valorant">
					{"01 ----// Certificate "}
				</p>

				<p className="text-[15px] pt-20 text-teal font-valorant">
					{"01 ----// Achievements "}
				</p>

				<p className="text-[15px] pt-20 text-teal font-valorant">
					{"01 ----// Hobbie & Interest "}
				</p>

				<p className="text-[15px] pt-20 text-teal font-valorant">
					{"01 ----//Funfact "}
				</p>
			</section>
		</>
	);
};

export default About;
