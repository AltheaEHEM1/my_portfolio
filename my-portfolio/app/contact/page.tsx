import contactData from "@/data/contactme.json";
import FlipContactCard from "./contact-card";
import ContactForm from "./contact-form";
import HeroContact from "./hero-contact";

const Contact = () => {
	return (
		<div>
			<HeroContact />

			<section>
				<p className="text-[15px] pt-5 text-teal font-valorant">
					{"01 ----// CONTACT ME FORM"}
				</p>

				<ContactForm />

				<p className="text-[15px] pt-20 text-teal font-valorant">
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
