
import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

export async function GET(
  req: Request,
  context: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  try {
    const { id } =
      await context.params;

    const doc =
      await adminDb
        .collection("audits")
        .doc(id)
        .get();

    if (!doc.exists) {
      return NextResponse.json(
        {
          error:
            "Audit not found",
        },
        { status: 404 }
      );
    }

    const data =
      doc.data();

    const publicAudit = {
      tool:
        data?.tool,
      currentPlan:
        data?.currentPlan,
      recommendedPlan:
        data?.recommendedPlan,
      spend:
        data?.spend,
      seats:
        data?.seats,
      teamSize:
        data?.teamSize,
      monthlySavings:
        data?.monthlySavings,
      annualSavings:
        data?.annualSavings,
      recommendation:
        data?.recommendation,
      summary:
        data?.summary,
    };

    return NextResponse.json({
      id: doc.id,
      ...publicAudit,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Failed to fetch audit",
      },
      { status: 500 }
    );
  }
}
