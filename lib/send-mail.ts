import { createTransport, type TransportOptions } from "nodemailer";

import { env } from "@/env";

const EMAIL_SENDER = "\"Parisuhdetango\" <admin@parisuhdetango.fi>";

const smtpConfig = {
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASSWORD,
  },
};

const transporter = createTransport(smtpConfig as TransportOptions);

export interface MessageInfo {
  to: string;
  cc: string;
  subject: string;
  body: string;
}

export async function sendMail(message: MessageInfo) {
  const { to, subject, body, cc } = message;
  const mailOptions = {
    from: EMAIL_SENDER,
    to,
    cc,
    subject,
    html: body,
  };
  return await transporter.sendMail(mailOptions);
}

export interface ConfirmMessageInfo {
  to: string;
  bcc: string;
  subject: string;
  body: string;
}

export async function sendConfirmMail(message: ConfirmMessageInfo) {
  const { to, subject, body, bcc } = message;
  const mailOptions = {
    from: EMAIL_SENDER,
    to,
    bcc,
    subject,
    html: body,
  };
  return transporter.sendMail(mailOptions);
}
