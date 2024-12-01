import * as z from "zod";

export const SignUpSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  firstname: z.string().min(2, {
    message: "Etunimi tarvitaan",
  }),
  lastname: z.string().min(2, {
    message: "Sukunimi tarvitaan",
  }),
  telephone: z.string().optional(),
  message: z.string().optional(),
});

export const NewsletterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});
export const ContactSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  name: z.string().min(2, {
    message: "nameimi tarvitaan",
  }),
  message: z.string().min(5, {
    message: "Kirjoita viesti",
  }),
});

export const ConfirmSchema = z.object({
  email: z.string().email(),
  firstname: z.string(),
});
export const ConfirmNewsletterSchema = z.object({
  email: z.string().email(),
});
export const ConfirmContactSchema = z.object({
  email: z.string().email(),
  name: z.string(),
});
