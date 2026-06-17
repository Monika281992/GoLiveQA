import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Here you can integrate with email services like:
    // - Resend (recommended for Next.js)
    // - SendGrid
    // - Nodemailer
    // - Or save to a database
    
    // For now, we'll log it and send a success response
    console.log("Contact Form Submission:", {
      name,
      email,
      company,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Send email notification
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'noreply@goliveqa.com',
    //   to: 'monika@goliveqa.com',
    //   subject: `New Contact Form: ${service}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Company:</strong> ${company}</p>
    //     <p><strong>Service:</strong> ${service}</p>
    //     <p><strong>Message:</strong> ${message}</p>
    //   `
    // });

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
