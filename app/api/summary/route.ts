import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const tool = body.tools?.[0];

    const prompt = `
You are an AI finance optimization assistant.

Generate a concise professional audit summary under 100 words.

Tool: ${tool?.name}
Current Spend: $${tool?.currentSpend}
Potential Savings: $${body.totalSavings}
Recommended Action: ${tool?.recommendedAction}
Reason: ${tool?.reason}

Keep the tone executive-friendly.
Return only the paragraph.
`;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json({
      summary:
        data.choices?.[0]?.message?.content ||
        "Your AI stack has optimization opportunities through smarter plan allocation and spend management.",
    });
  } catch (error) {
    return NextResponse.json({
      summary:
        "Your AI stack has optimization opportunities through smarter plan allocation and vendor consolidation.",
    });
  }
}