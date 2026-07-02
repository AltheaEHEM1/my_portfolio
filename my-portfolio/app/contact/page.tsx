import HeroSection from "@/components/hero/hero";
import ContactCardsGrid from "./contact-cards-grid";
import ContactForm from "./contact-form";
import { AnimateSection } from "@/app/page-animate-provider";

const Contact = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	return (
		<div>
			<AnimateSection>
				<HeroSection
					image="/assets/bg-hero/contact_bg.png"
					title="Contact"
					description="Feel free to reach out for collaborations or inquiries."
				/>
			</AnimateSection>

			<section className="max-w-7xl mx-auto px-4">
				<AnimateSection>
					<p className="text-[20px] py-5 text-teal font-valorant">
						{"01 ----// CONTACT ME FORM"}
					</p>
				</AnimateSection>

				<ContactForm />

				<AnimateSection>
					<p className="text-[20px] pt-20 text-teal font-valorant">
						{"02 ----// CONTACT ME THROUGH"}
					</p>
				</AnimateSection>

				<ContactCardsGrid />
			</section>
		</div>
	);
};

export default Contact;
