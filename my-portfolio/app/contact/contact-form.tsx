"use client";

import { useActionState, useEffect, useState } from "react";
import { submitContact } from "./actions";
import { SubmitButton } from "./submit-button";
import { toast } from "sonner"; 

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const [state, formAction] = useActionState(submitContact, {});
    const [errors, setErrors] = useState<Record<string, string>>({});

    // 2. Trigger toasts in your useEffect
    useEffect(() => {
        if (state?.success) {
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                message: "",
            });
            toast.success("Message received. I'll get back to you soon!");
        } else if (state?.error) {
            toast.error(state.error || "Failed to send message.");
        }
    }, [state]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        let newValue = value.replace(/\s{2,}/g, " ");

        if (name === "firstName" || name === "lastName") {
            newValue = newValue.replace(/[^a-zA-Z0-9\s]/g, "");
        }

        setFormData((prev) => ({ ...prev, [name]: newValue }));

        if (value !== newValue) {
            setErrors((prev) => ({
                ...prev,
                [name]: "Symbols not allowed.",
            }));
        } else {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    return (
        <div className="relative w-full flex flex-col lg:flex-row items-stretch rounded-2xl border border-teal/20 bg-background/20 backdrop-blur-xs overflow-hidden group">
            {/* Sidebar Content */}
            <div className="w-full lg:w-1/3 relative p-8 md:p-12 flex flex-col justify-between bg-linear-to-b from-teal/8 to-teal/1 border-b lg:border-b-0 lg:border-r border-teal/20">
                <div>
                    <h1 className="text-2xl md:text-3xl font-oxanium font-bold tracking-wide text-foreground leading-tight mb-3">
                        Let's get in touch.
                    </h1>
                    <p className="text-xs font-poppins text-muted-foreground mb-4 leading-relaxed">
                        Have a project in mind or just want to say hi? I'm currently open to
                        new opportunities and collaborations. Feel free to reach out, and
                        I'll get back to you as soon as I can.
                    </p>
                </div>

                <div className="py-10 flex flex-col items-center justify-center gap-4 text-teal/40"></div>

                <div className="mt-4 pt-4 border-t border-teal/20">
                    <h3 className="text-[10px] font-bold uppercase font-oxanium tracking-widest text-teal mb-1">
                        Expectation
                    </h3>
                    <p className="text-[10px] font-poppins text-muted-foreground">
                        I typically respond within 24–48 hours. Let's build something
                        amazing together.
                    </p>
                </div>
            </div>

            {/* Form Content */}
            <form
                action={formAction}
                className="w-full lg:w-2/3 md:p-15 flex flex-col gap-4 relative z-10 bg-transparent font-poppins"
            >

                <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <div className="flex flex-col gap-1 flex-1">
                        <label
                            htmlFor="LastName"
                            className="text-[10px] uppercase tracking-wider text-text/80 pl-1"
                        >
                            Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="LastName"
                            name="lastName"
                            type="text"
                            placeholder="Enter Last Name"
                            maxLength={50}
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border border-teal/20 bg-background/40 p-3 text-sm focus:border-teal outline-none placeholder:text-muted-foreground/50"
                        />
                        {errors.lastName && (
                            <p className="text-[10px] text-red-400">{errors.lastName}</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-1 flex-1">
                        <label
                            htmlFor="FirstName"
                            className="text-[10px] uppercase tracking-wider text-text/80 pl-1"
                        >
                            First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="FirstName"
                            name="firstName"
                            type="text"
                            placeholder="Enter First Name"
                            maxLength={50}
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border border-teal/20 bg-background/40 p-3 text-sm focus:border-teal outline-none placeholder:text-muted-foreground/50"
                        />
                        {errors.firstName && (
                            <p className="text-[10px] text-red-400">{errors.firstName}</p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <label
                        htmlFor="Email"
                        className="text-[10px] uppercase tracking-wider text-text/80 pl-1"
                    >
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="Email"
                        name="email"
                        type="email"
                        maxLength={50}
                        placeholder="example@gmail.com"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-teal/20 bg-background/40 p-3 text-sm focus:border-teal outline-none placeholder:text-muted-foreground/50"
                    />
                </div>

                <div className="flex flex-col gap-1 grow">
                    <label
                        htmlFor="Message"
                        className="text-[10px] uppercase tracking-wider text-text/80 pl-1"
                    >
                        Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="Message"
                        name="message"
                        required
                        placeholder="Type a message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full h-full rounded-lg border border-teal/20 bg-background/40 p-3 text-sm focus:border-teal outline-none resize-none placeholder:text-muted-foreground/50"
                    />
                </div>

                <div className="mt-auto">
                    <SubmitButton />
                </div>
            </form>
        </div>
    );
};

export default ContactForm;