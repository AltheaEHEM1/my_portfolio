"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormState {
	success?: boolean;
	error?: string;
}

// Helper: Consolidates name validation
const validateName = (name: string): string | null => {
	if (name.length > 50) return "Name must be 50 characters or fewer.";

	if (!/^[a-zA-Z0-9\s'.-]+$/.test(name))
		return "Name contains invalid characters.";

	if (/\s{2,}/.test(name)) return "Name must not contain consecutive spaces.";

	if (/['.-]{2,}/.test(name))
		return "Name must not contain consecutive symbols.";

	if (/^['.-]|['.-]$/.test(name))
		return "Name cannot start or end with a symbol.";

	return null;
};

export async function submitContact(
	_prev: ContactFormState | null,
	formData: FormData,
): Promise<ContactFormState> {
	const firstName = formData.get("firstName")?.toString().trim() ?? "";
	const lastName = formData.get("lastName")?.toString().trim() ?? "";
	const email = formData.get("email")?.toString().trim() ?? "";
	const message = formData.get("message")?.toString().trim() ?? "";

	// 1. Basic Presence Validation
	if (!firstName || !lastName || !email || !message) {
		return { error: "All fields are required." };
	}

	// 2. Name Validation
	const nameError = validateName(firstName) || validateName(lastName);
	if (nameError) return { error: nameError };

	// 3. Email Validation
	if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
		return { error: "Email must be a valid @gmail.com address." };
	}

	// 4. Sanitization
	const sanitize = (str: string) =>
		str.replace(/[&<>"']/g, (m) => {
			const map: Record<string, string> = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;",
			};
			return map[m] || m;
		});

	const cleanFirstName = sanitize(firstName);
	const cleanLastName = sanitize(lastName);
	const cleanMessage = sanitize(message).replace(/\n/g, "<br />");

	try {
		const { error } = await resend.emails.send({
			from: "Portfolio Contact Form <onboarding@resend.dev>",
			to: process.env.MY_EMAIL as string,
			subject: `New Message from ${cleanFirstName} ${cleanLastName}`,
			replyTo: email,
			html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px;">
            <h2 style="color: #0d9488;">New Contact Request</h2>
            <p><strong>Name:</strong> ${cleanFirstName} ${cleanLastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <h3 style="margin-top: 20px;">Message:</h3>
            <p style="background-color: #f9fafb; padding: 10px; border-left: 4px solid #0d9488;">
                ${cleanMessage}
            </p>
        </div>`,
		});

		if (error) throw new Error(error.message);
		return { success: true };
	} catch (err) {
		console.error("Email error:", err);
		return { error: "Failed to send message. Please try again later." };
	}
}
