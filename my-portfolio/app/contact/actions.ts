"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormState {
	success?: boolean;
	error?: string;
}

export async function submitContact(
	_prev: ContactFormState | null,
	formData: FormData,
): Promise<ContactFormState> {
	const firstName = formData.get("firstName")?.toString().trim() ?? "";
	const lastName = formData.get("lastName")?.toString().trim() ?? "";
	const email = formData.get("email")?.toString().trim() ?? "";
	const message = formData.get("message")?.toString().trim() ?? "";

	if (!firstName || !lastName || !email || !message) {
		return { error: "All fields are required." };
	}

	if (firstName.length > 50 || lastName.length > 50) {
		return { error: "Name must be 50 characters or fewer." };
	}

	// Alphanumeric + space validation (includes 0-9)
	const nameRegex = /^[a-zA-Z0-9\s]+$/;
	if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
		return { error: "Name must only contain letters, numbers, and spaces." };
	}

	if (/\s{2,}/.test(firstName) || /\s{2,}/.test(lastName)) {
		return { error: "Name must not contain consecutive spaces." };
	}

	if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
		return { error: "Email must be a valid @gmail.com address." };
	}

	console.log("Transmission successful:", {
		firstName,
		lastName,
		email,
		message,
	});

	try {
		const { error } = await resend.emails.send({
			from: "Portfolio Contact Form <onboarding@resend.dev>",
			to: process.env.MY_EMAIL as string,
			subject: `New Message from ${firstName} ${lastName}`,
			replyTo: email,
			html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; padding: 20px; border-radius: 8px;">
            <h2 style="color: #0d9488;">New Contact Request</h2>
            <p>You have received a new message from your portfolio website:</p>
            
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px;">
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
            </div>
            
            <h3 style="margin-top: 20px;">Message:</h3>
            <p style="background-color: #ffffff; border-left: 4px solid #0d9488; padding: 10px; font-style: italic;">
                ${message.replace(/\n/g, "<br />")}
            </p>
            
            <hr style="border: 0; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
            <p style="font-size: 12px; color: #6b7280;">Sent via Portfolio Contact Form</p>
        </div>
    `,
		});

		if (error) {
			console.error("Email error:", error);
			return { error: `Failed to send: ${error.message}` };
		}

		return { success: true };
	} catch (error) {
		console.error("Email error:", error);
		const errMsg = error instanceof Error ? error.message : String(error);
		return { error: `Failed to send: ${errMsg}` };
	}
}
