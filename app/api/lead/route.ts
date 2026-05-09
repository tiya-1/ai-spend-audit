import { NextResponse } from "next/server";

import { adminDb } from "@/lib/firebase-admin";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (body.website) {
      return NextResponse.json(
        {
          success: false,
          message: "Spam detected",
        },
        { status: 400 }
      );
    }

    const leadData = {
      email: body.email || "",
      company: body.company || "",
      role: body.role || "",
      teamSize: body.teamSize || "",
      tool: body.tool || "",
      spend: body.spend || 0,
      createdAt: Date.now(),
    };

    const docRef = await adminDb
      .collection("leads")
      .add(leadData);

    return NextResponse.json({
      success: true,
      id: docRef.id,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save lead",
      },
      { status: 500 }
    );
  }
}