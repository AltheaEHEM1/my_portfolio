import HeroSection from "@/components/hero/hero";
import contactData from "@/data/contactme.json";
import FlipContactCard from "./contact-card";
import ContactForm from "./contact-form";

const Contact = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	return (
		<div>
			<HeroSection
				image="/assets/bg-hero/contact_bg.png"
				title="Contact"
				description="Feel free to reach out for collaborations or inquiries."
			/>

			<section>
				<p className="text-[20px] py-5 text-teal font-valorant">
					{"01 ----// CONTACT ME FORM"}
				</p>

				<ContactForm />

				<p className="text-[20px] pt-20 text-teal font-valorant">
					{"02 ----// CONTACT ME THROUGH"}
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 justify-items-center w-full">
					{contactData.map((contact) => (
						<FlipContactCard key={contact.id} contact={contact} />
					))}
				</div>
			</section>
		</div>
	);
};

export default Contact;
