import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const safeEmail = email.trim().replace(/[<>]/g, "");

    await resend.emails.send({
      from: "GoLiveQA <onboarding@resend.dev>",
      to: "monika@goliveqa.com",
      replyTo: safeEmail,
      subject: `Book a Call — ${safeEmail}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #c2613f; padding-bottom: 10px;">
            📧 Email captured — form not yet submitted
          </h2>
          <p style="font-size: 16px; color: #444;">
            Someone entered their email and landed on the Book a Call page. They haven't filled out the form yet.
          </p>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-size: 15px;">
              <strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a>
            </p>
          </div>
          <p style="color: #6b7280; font-size: 12px;">
            Submitted on ${new Date().toLocaleString("en-US", {
              dateStyle: "full",
              timeStyle: "short",
            })}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
