"use server";

import type * as z from "zod";

import { renderConfirmContactTemplate } from "@/components/email/confirm-contact-template";
import { renderConfirmNewsletterTemplate } from "@/components/email/confirm-newsletter-template";
import { renderConfirmTemplate } from "@/components/email/confirm-template";
import { renderContactTemplate } from "@/components/email/contact-template";
import { renderNewsletterTemplate } from "@/components/email/newsletter-template";
import { renderSignUpTemplate } from "@/components/email/signup-template";
import { renderSignUp2Template } from "@/components/email/signup2-template";
import { sendConfirmMail, sendMail } from "@/lib/send-mail";
import { ConfirmContactSchema, ConfirmNewsletterSchema, ConfirmSchema, ContactSchema, NewsletterSchema, SignUpSchema } from "@/schemas";

export async function signupmail(values: z.infer<typeof SignUpSchema>) {
  const validatedFields = SignUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Tarkista, että tietosi ovat oikein!" };
  }

  const { email, firstname, lastname, telephone, message } = validatedFields.data;

  await sendMail({
    to: "info@parisuhdetango.fi",
    cc: "admin@parisuhdetango.fi",
    subject: "Uusi ilmoittautuminen",
    body: await renderSignUpTemplate({ firstname, email, lastname, telephone, message, subject: "Uusi Ilmoittautuminen Parisuhdetangokursille" }),
  });

  return { success: "Kiitos! Lähetämme sinulle sähköpostia pian!" };
}
export async function signupmail2(values: z.infer<typeof SignUpSchema>) {
  const validatedFields = SignUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Tarkista, että tietosi ovat oikein!" };
  }

  const { email, firstname, lastname, telephone, message } = validatedFields.data;

  await sendMail({
    to: "info@parisuhdetango.fi",
    cc: "admin@parisuhdetango.fi",
    subject: "Uusi ilmoittautuminen",
    body: await renderSignUp2Template({ firstname, email, lastname, telephone, message, subject: "Uusi Ilmoittautuminen Parisuhdetangokursille" }),
  });

  return { success: "Kiitos! Lähetämme sinulle sähköpostia pian!" };
}
export async function contactmail(values: z.infer<typeof ContactSchema>) {
  const validatedFields = ContactSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Tarkista, että tietosi ovat oikein!" };
  }

  const { email, name, message } = validatedFields.data;

  await sendMail({
    to: "info@parisuhdetango.fi",
    cc: "admin@parisuhdetango.fi",
    subject: "Contact from Parisuhdetango",
    body: await renderContactTemplate({ name, email, message, subject: "Contact from Parisuhdetango" }),
  });

  return { success: "Kiitos! Lähetämme sinulle sähköpostia pian!" };
}
export async function newslettermail(values: z.infer<typeof NewsletterSchema>) {
  const validatedFields = NewsletterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Tarkista, että tietosi ovat oikein!" };
  }

  const { email } = validatedFields.data;

  await sendMail({
    to: "info@parisuhdetango.fi",
    cc: "admin@parisuhdetango.fi",
    subject: "Newsletter from Parisuhdetango",
    body: await renderNewsletterTemplate({ email, subject: "Newsletter from Parisuhdetango" }),
  });

  return { success: "Kiitos! olet liittynyt postitustlistaan" };
}

export async function confirmmail(values: z.infer<typeof ConfirmSchema>) {
  const validatedFields = ConfirmSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Tarkista, että tietosi ovat oikein!" };
  }

  const { email, firstname } = validatedFields.data;

  await sendConfirmMail({
    to: email,
    bcc: "admin@parisuhdetango.fi",
    subject: "Ilmoittautuminen Parisuhdetangokurssille",
    body: await renderConfirmTemplate({ email, firstname, subject: "Ilmoittautuminen Parisuhdetangokurssille" }),
  });
}

export async function confirmnews(values: z.infer<typeof ConfirmNewsletterSchema>) {
  const validatedFields = ConfirmNewsletterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Tarkista, että tietosi ovat oikein!" };
  }

  const { email } = validatedFields.data;

  await sendConfirmMail({
    to: email,
    bcc: "admin@parisuhdetango.fi",
    subject: "Improtango/Parisuhdetango uustiskirje",
    body: await renderConfirmNewsletterTemplate({ email, subject: "Improtango/Parisuhdetango uustiskirje" }),
  });
}

export async function confirmcon(values: z.infer<typeof ConfirmContactSchema>) {
  const validatedFields = ConfirmContactSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Tarkista, että tietosi ovat oikein!" };
  }

  const { email, name } = validatedFields.data;

  await sendConfirmMail({
    to: email,
    bcc: "admin@parisuhdetango.fi",
    subject: "Olemme vastaanottaneet viestisi",
    body: await renderConfirmContactTemplate({ email, name, subject: "Olemme vastaanottaneet viestisi" }),
  });
}
