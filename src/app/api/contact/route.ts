import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, projectType, message } = body;

  if (!name || !email || !projectType || !message) {
    return NextResponse.json({ error: "Please fill out all required fields." }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const recipient = process.env.EMAIL_RECIPIENT || siteConfig.email;

  if (!smtpHost || !smtpUser || !smtpPassword || !recipient) {
    return NextResponse.json(
      { error: "Email configuration is missing. Please set SMTP_HOST, SMTP_USER, SMTP_PASSWORD, and EMAIL_RECIPIENT." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });

  const adminMailOptions = {
    from: `${name} <${email}>`,
    to: recipient,
    subject: `New portfolio query from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\nMessage:\n${message}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Project type:</strong> ${projectType}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `,
  };

  const confirmationMailOptions = {
    from: `${siteConfig.name} <${siteConfig.email}>`,
    to: email,
    subject: "Thank you for reaching out",
    text: `Hi ${name},\n\nThank you for reaching out and getting in touch with me. I’ve received your message successfully and will review it shortly.\n\nI’ll get back to you as soon as possible.\n\nBest regards,\n${siteConfig.name}`,
    html: `
      <p>Hi ${name},</p>
      <p>Thank you for reaching out and getting in touch with me. I’ve received your message successfully and will review it shortly.</p>
      <p>I’ll get back to you as soon as possible.</p>
      <p>Best regards,<br />${siteConfig.name}</p>
    `,
  };

  try {
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(confirmationMailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form send error:", error);
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 });
  }
}
