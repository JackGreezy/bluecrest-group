import { NextResponse } from "next/server";
import { getBrand } from "@/lib/brand";
import { sendCustomerConfirmation, sendInternalNotifications } from "@/lib/email/sendgrid";

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

    // Send emails via SendGrid
    const brand = getBrand();
    const lead = {
      name: String(name),
      email: String(email),
      phone: phone ? String(phone).replace(/\D/g, '') : undefined,
      phone_plain: phone ? String(phone).replace(/\D/g, '') : undefined,
      company: company ? String(company) : undefined,
      projectType: String(projectType),
      timeline: timeline ? String(timeline) : undefined,
      projectDescription: details ? String(details) : undefined,
    };

    // Add submitted_date to brand data
    const brandWithDate = {
      ...brand,
      submitted_date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };

    try {
      await Promise.all([
        sendCustomerConfirmation(brandWithDate, lead),
        sendInternalNotifications(brandWithDate, lead),
      ]);
      console.log('SendGrid emails sent successfully to:', email);
    } catch (error) {
      console.error("SendGrid email failed", error);
      // Continue without blocking UX - form still submitted successfully
    }

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
