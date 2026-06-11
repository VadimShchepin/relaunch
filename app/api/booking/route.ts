import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, company, phone, slot1, slot2, daytime, topic } = body;

        // Validate required fields
        if (!name || !email || !slot1) {
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
        const senderEmail = process.env.CONTACT_SENDER_EMAIL || "hello@aiseo.hamburg";

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
            requireTLS: true,
        });

        // Email content
        const subject = `Neue Terminanfrage von ${name}`;
        const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4FAF8C;">Neue Terminanfrage</h2>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Kontaktdaten</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          ${company ? `<p><strong>Unternehmen:</strong> ${company}</p>` : ''}
          ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
        </div>

        <div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
          <h3 style="margin-top: 0; color: #333;">Wunschtermin</h3>
          <p><strong>1. Wunschtermin:</strong> ${slot1}</p>
          ${slot2 ? `<p><strong>2. Wunschtermin:</strong> ${slot2}</p>` : ''}
          ${daytime ? `<p><strong>Bevorzugte Tageszeit:</strong> ${daytime}</p>` : ''}
          ${topic ? `<p style="white-space: pre-wrap; line-height: 1.6;"><strong>Anliegen:</strong><br/>${topic}</p>` : ''}
        </div>

        <div style="margin-top: 20px; padding: 15px; background: #e8f5e8; border-radius: 8px;">
          <p style="margin: 0; font-size: 14px; color: #666;">
            Terminanfrage über aiseo.hamburg. Lege ein Google Meet an und antworte direkt an ${email}.
          </p>
        </div>
      </div>
    `;

        const textContent = `
Neue Terminanfrage

Name: ${name}
E-Mail: ${email}
${company ? `Unternehmen: ${company}` : ''}
${phone ? `Telefon: ${phone}` : ''}

1. Wunschtermin: ${slot1}
${slot2 ? `2. Wunschtermin: ${slot2}` : ''}
${daytime ? `Bevorzugte Tageszeit: ${daytime}` : ''}
${topic ? `Anliegen:\n${topic}` : ''}

---
Terminanfrage über aiseo.hamburg. Lege ein Google Meet an und antworte direkt an ${email}.
    `;

        // Send email with configured sender and recipient
        await transporter.sendMail({
            from: `"AISEO Terminanfrage" <${senderEmail}>`,
            sender: senderEmail, // Explicit sender header for Brevo
            to: recipientEmail,
            subject: subject,
            text: textContent,
            html: htmlContent,
            replyTo: email, // Allow direct reply to the requester
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Booking form error:", error);
        return NextResponse.json(
            { ok: false, error: "SEND_FAILED" },
            { status: 500 }
        );
    }
}
