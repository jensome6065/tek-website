import { z } from "zod";

export const contactRoles = [
  "Student",
  "Prospective Member",
  "Recruiter",
  "Company",
  "Speaker",
  "Faculty",
  "Other",
] as const;

export const contactTopics = [
  "General",
  "Recruitment",
  "Partnership",
  "Sponsorship",
  "Speaker Request",
  "Other",
] as const;

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  role: z.enum(contactRoles, { message: "Please select who you are." }),
  topic: z.enum(contactTopics, { message: "Please select a topic." }),
  message: z
    .string()
    .min(10, "Please write a message of at least 10 characters.")
    .max(2000, "Message is too long."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
