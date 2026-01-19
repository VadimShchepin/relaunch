import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const rawEmail = body.email;

        if (!rawEmail || typeof rawEmail !== "string") {
            return NextResponse.json({ ok: false, error: "INVALID_EMAIL" }, { status: 400 });
        }

        // Trim and lowercase email
        const email = rawEmail.trim().toLowerCase();

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ ok: false, error: "INVALID_EMAIL" }, { status: 400 });
        }

        const apiKey = process.env.BREVO_API_KEY!;
        const templateId = Number(process.env.BREVO_DOI_TEMPLATE_ID);
        const listId = Number(process.env.BREVO_NEWSLETTER_LIST_ID); // Should be 5 (Confirmed list)
        const redirectionUrl = process.env.BREVO_DOI_REDIRECT_URL!;

        if (!apiKey || !templateId || !listId || !redirectionUrl) {
            console.error("Missing Brevo configuration:", { apiKey: !!apiKey, templateId, listId, redirectionUrl });
            return NextResponse.json({ ok: false, error: "SERVER_MISCONFIG" }, { status: 500 });
        }

        // Brevo DOI endpoint
        const response = await fetch("https://api.brevo.com/v3/contacts/doubleOptinConfirmation", {
            method: "POST",
            headers: {
                "api-key": apiKey,
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                email,
                includeListIds: [listId], // List 5 (Confirmed list)
                templateId,
                redirectionUrl,
                // Removed attributes to avoid Brevo validation errors
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();

            // Log detailed error for debugging
            console.error("Brevo API error details:", {
                status: response.status,
                statusText: response.statusText,
                error: errorText,
                requestBody: { email, includeListIds: [listId], templateId, redirectionUrl }
            });

            // Treat "already subscribed" scenarios as success to avoid email enumeration
            if (errorText.includes("already exists") ||
                errorText.includes("already in list") ||
                errorText.includes("already confirmed") ||
                errorText.includes("duplicate_parameter")) {
                return NextResponse.json({ ok: true });
            }

            // Return detailed error for debugging (temporary)
            return NextResponse.json(
                {
                    ok: false,
                    error: "BREVO_ERROR",
                    status: response.status,
                    detail: errorText.slice(0, 500)
                },
                { status: response.status }
            );
        }

        // 201 Created => success
        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Newsletter subscription error:", error);
        return NextResponse.json({ ok: false, error: "UNKNOWN" }, { status: 500 });
    }
}