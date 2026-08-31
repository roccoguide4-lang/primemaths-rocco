import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { prompt } = await request.json();
    const query = prompt ? prompt.trim() : "";
    const lowerPrompt = query.toLowerCase();

    let aiResponse = "";

    // Math & Science & General Smart Rules for Myanmar Students (G6 - G12)
    if (lowerPrompt.includes("quadratic") || lowerPrompt.includes("ညီမျှခြင်း") || lowerPrompt.includes("x^2") || lowerPrompt.includes("equation") || lowerPrompt.includes("သင်္ချာ")) {
      aiResponse = `🤖 Rocco AI (Math Tutor):\n\n"${query}" နဲ့ ပတ်သက်တဲ့ သင်္ချာပုစ္ဆာအတွက် ရှင်းလိပ်ချက်:\n၁။ ပေးထားချက်များကို အရင် စုစည်းရေးသားပါ။\n၂။ သင့်လျော်သော ဖော်မြူလာ သို့မဟုတ် ညီမျှခြင်းကို အသုံးပြုပါ။ (ဥပမာ- Quadratic Equation အတွက် x = [-b ± sqrt(b² - 4ac)] / 2a)\n၃။ အဆင့်ဆင့် တွက်ချက်ပြီး တန်ဖိုးများကို ရှာပါ။\n\nဆက်လက်ပြီး ဘယ်နေရာလေး ဆက်တွက်ရမလဲ ဆရာ့ကို ထပ်မံမေးမြန်းနိုင်ပါတယ်ရှင်!`;
    } 
    else if (lowerPrompt.includes("physics") || lowerPrompt.includes("စွမ်းအင်") || lowerPrompt.includes("energy") || lowerPrompt.includes("gravity") || lowerPrompt.includes("သိပ္ပံ")) {
      aiResponse = `⚡ Rocco AI (Science Tutor):\n\n"${query}" နဲ့ ပတ်သက်သော သိပ္ပံ/ရူပဗေဒ ဆိုင်ရာ ရှင်းလင်းချက်:\n- သဘောတရားအရ သက်ဆိုင်ရာ ဥပဒေများ (ဥပမာ- စွမ်းအင်တည်မြဲမှုဥပဒေ) ကို အခြေခံတွက်ချက်ရပါမယ်။\n- လိုအပ်သော တန်ဖိုးများနှင့် ယူနစ် (Units) များကို သေချာာ စစ်ဆေးပါ။\n\nထပ်မံသိရှိလိုသည်များကို မေးမြန်းနိုင်ပါတယ်ရှင်။`;
    } 
    else if (lowerPrompt.includes("english") || lowerPrompt.includes("grammar") || lowerPrompt.includes("tenses") || lowerPrompt.includes("vocabulary")) {
      aiResponse = `📚 Rocco AI (English Tutor):\n\n"${query}" နှင့် ပတ်သက်သော English Grammar လေ့ကျင့်ခန်း:\n- Sentence Structure ( Subject + Verb + Object ) မှန်ကန်မှုကို ဦးစားပေး စစ်ဆေးရပါမယ်။\n- Tense သို့မဟုတ် Form ပုံစံများကို သေချာခွဲခြားသုံးသပ်ပါ။\n\nပိုမိုရှင်းလင်းချက် လိုအပ်ပါက ဆက်မေးလို့ရပါတယ်ရှင်။`;
    } 
    else {
      aiResponse = `💡 Rocco AI Tutor ၏ အဖြေ:\n\nဆရာ့ရဲ့ မေးခွန်းဖြစ်သော ("${query}") ကို လက်ခံရရှိပါပြီရှင်။ G6 မှ G12 အထိ သင်ခန်းစာများနှင့် ပတ်သက်၍ အသေးစိတ် ရှင်းလင်းချက်များ၊ ဥပမာများနှင့်တကွ တစ်ဆင့်ချင်း ဆွေးနွေးပေးသွားမည် ဖြစ်ပါသည်။ ထပ်မံသိလိုသည်များကို ဆက်လက် မေးမြန်းနိုင်ပါတယ်ရှင်!`;
    }

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    return NextResponse.json({ response: "ဆာဗာတွင် အမှားအယွင်း ရှိသွားပါသည်ရှင်။ ကျေးဇူးပြု၍ ခဏနေမှ ထပ်ကြိုးစားပါ။" }, { status: 500 });
  }
}
