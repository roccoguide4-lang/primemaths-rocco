import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(request) {
  try {
    const { prompt } = await request.json();
    if (!prompt) {
      return NextResponse.json({ response: "ကျေးဇူးပြု၍ မေးခွန်းတစ်ခု ရိုက်ထည့်ပါရှင်။" }, { status: 400 });
    }

    const systemInstruction = "You are Rocco, a friendly, patient, and professional AI tutor for Myanmar students from Grade 6 to Grade 12. Answer academic questions (Math, Science, English, etc.) clearly, step-by-step, and in Burmese language.";

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return NextResponse.json({ response: response.text });
  } catch (error) {
    console.err("AI Error:", error);
    return NextResponse.json({ response: "AI စနစ် ချိတ်ဆက်ရာတွင် အခက်အခဲ ရှိနေပါသည်ရှင်။ API Key မှန်ကန်မှု ရှိမရှိ စစ်ဆေးပေးပါ။" }, { status: 500 });
  }
}
