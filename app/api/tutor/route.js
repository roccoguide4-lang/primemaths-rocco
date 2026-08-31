import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { prompt } = await request.json();

    // AI API integration point (Gemini / OpenAI API)
    const aiResponse = `Hello! I am Rocco AI. You asked: "${prompt}". Let's solve this step-by-step for your math or science lesson!`;

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
