import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, company, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { ok: false, error: "MISSING_FIELDS" },
                { status: 400 }
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { ok: false, error: "INVALID_EMAIL" },
                { status: 400 }
            );
        }

        // Get SMTP configuration from environment
        const smtpServer = process.env.BREVO_SMTP_SERVER;
        const smtpPort = Number(process.env.BREVO_SMTP_PORT);
        const smtpUser = process.env.BREVO_ANMELDUNG;
        const smtpPassword = process.env.BREVO_SMTP_KEY;
        const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || "hello@aiseo.hamburg";

        if (!smtpServer || !smtpPort || !smtpUser || !smtpPassword) {
            console.error("Missing SMTP configuration");
            return NextResponse.json(
                { ok: false, error: "SERVER_MISCONFIG" },
                { status: 500 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            host: smtpServer,
            port: smtpPort,
            secure: false, // true for 465, false for other ports
            auth: {
                user: smtpUser,
                pass: smtpPassword,
            },
        });

        // Email content
        const subject = `Neue Kontaktanfrage von ${name}`;
        const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4FAF8C;">Neue Kontaktanfrage</h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Kontaktdaten</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          ${company ? `<p><strong>Unternehmen:</strong> ${company}</p>` : ''}
        </div>
        
        <div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
          <h3 style="margin-top: 0; color: #333;">Nachricht</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: #e8f5e8; border-radius: 8px;">
          <p style="margin: 0; font-size: 14px; color: #666;">
            Diese E-Mail wurde über das Kontaktformular auf aiseo.hamburg gesendet.
          </p>
        </div>
      </div>
    `;

        const textContent = `
Neue Kontaktanfrage

Name: ${name}
E-Mail: ${email}
${company ? `Unternehmen: ${company}` : ''}

Nachricht:
${message}

---
Diese E-Mail wurde über das Kontaktformular auf aiseo.hamburg gesendet.
    `;

        // Send email
        await transporter.sendMail({
            from: `"AISEO Kontaktformular" <${smtpUser}>`,
            to: recipientEmail,
            subject: subject,
            text: textContent,
            html: htmlContent,
            replyTo: email, // Allow direct reply to the sender
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { ok: false, error: "SEND_FAILED" },
            { status: 500 }
        );
    }
}