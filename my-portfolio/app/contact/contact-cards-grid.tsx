"use client";

import { AnimateItem, AnimateStagger } from "@/app/page-animate-provider";
import contactData from "@/data/contactme.json";
import FlipContactCard from "./contact-card";

const ContactCardsGrid = () => {
	return (
		<AnimateStagger className="grid grid-cols-1 md:grid-cols-3 justify-items-center w-full">
			{contactData.map((contact) => (
				<AnimateItem key={contact.id}>
					<FlipContactCard contact={contact} />
				</AnimateItem>
			))}
		</AnimateStagger>
	);
};

export default ContactCardsGrid;
