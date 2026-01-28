import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, company, email, phone, projectType, timeline, details } = body;

    // Validate required fields
    if (!name || !email || !phone || !projectType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    // For now, log the submission
    console.log("Contact form submission:", {
      name,
      company,
      email,
      phone,
      projectType,
      timeline,
      details,
      timestamp: new Date().toISOString(),
    });

    // In production, you would:
    // 1. Send email notification to the business
    // 2. Optionally send confirmation email to the submitter
    // 3. Store in a database or CRM

    return NextResponse.json(
      { message: "Form submitted successfully" },
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
