import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, industry, developers, releaseCycle, hasQA, qaEngineers, coverage, notes } = body;

    if (!email || !industry || !developers || !releaseCycle || !hasQA) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    await resend.emails.send({
      from: "GoLiveQA <onboarding@resend.dev>",
      to: "monika@goliveqa.com",
      replyTo: email,
      subject: `Book a Call — ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #c2613f; padding-bottom: 10px;">
            New Book a Call Submission
          </h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 8px 0;"><strong>Industry:</strong> ${industry}</p>
            <p style="margin: 8px 0;"><strong>Developers on team:</strong> ${developers}</p>
            <p style="margin: 8px 0;"><strong>Release cycle:</strong> ${releaseCycle}</p>
            <p style="margin: 8px 0;"><strong>Has QA currently:</strong> ${hasQA}</p>
            ${hasQA === "Yes" && qaEngineers ? `<p style="margin: 8px 0;"><strong>QA engineers:</strong> ${qaEngineers}</p>` : ""}
            <p style="margin: 8px 0;"><strong>Coverage needed:</strong> ${Array.isArray(coverage) && coverage.length ? coverage.join(", ") : "None selected"}</p>
            ${notes ? `<p style="margin: 8px 0;"><strong>Additional notes:</strong> ${notes}</p>` : ""}
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
