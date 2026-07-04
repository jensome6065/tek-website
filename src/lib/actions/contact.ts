"use server";

import { Resend } from "resend";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";

export type ContactActionState = {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof ContactFormData, string[]>>;
};

export async function submitContactForm(
  _prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    role: formData.get("role"),
    topic: formData.get("topic"),
    message: formData.get("message"),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const data = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "tek@umass.edu";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "TEK Website <onboarding@resend.dev>";

  if (!apiKey) {
    console.info("Contact form submission (Resend not configured):", data);
    return {
      success: true,
      message:
        "Thanks for reaching out. We've received your message and will get back to you soon.",
    };
  }

  try {
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `[TEK Contact] ${data.topic}  -  ${data.name}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `I am a: ${data.role}`,
        `Topic: ${data.topic}`,
        "",
        "Message:",
        data.message,
      ].join("\n"),
    });

    return {
      success: true,
      message:
        "Thanks for reaching out. We've received your message and will get back to you soon.",
    };
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again or email us directly.",
    };
  }
}
