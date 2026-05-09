
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      email,
      company,
      role,
      teamSize,
    } = body;

    const data =
      await resend.emails.send({
        from:
          "AI Spend Audit <onboarding@resend.dev>",

        to: [email],

        subject:
          "Your AI Spend Audit Report",

        html: `
          <div style="font-family:sans-serif;padding:20px;">
            <h1>AI Spend Audit Received</h1>

            <p>
              Thanks for using AI Spend Audit.
            </p>

            <p>
              Your optimization request was received successfully.
            </p>

            <hr />

            <p>
              <strong>Company:</strong>
              ${company}
            </p>

            <p>
              <strong>Role:</strong>
              ${role}
            </p>

            <p>
              <strong>Team Size:</strong>
              ${teamSize}
            </p>

            <br />

            <p>
              We’ll notify you with future savings opportunities.
            </p>
          </div>
        `,
      });

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(
      "EMAIL ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}

