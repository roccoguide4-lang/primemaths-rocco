import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { prompt } = await request.json();
    const lowerPrompt = prompt ? prompt.toLowerCase() : "";

    let aiResponse = "";

    // Math & Science smart rule-based AI engine for Myanmar students
    if (lowerPrompt.includes("quadratic") || lowerPrompt.includes("ညီမျှခြင်း") || lowerPrompt.includes("x^2") || lowerPrompt.includes("equation")) {
      aiResponse = `🤖 Rocco AI (Math Tutor):\n\nQuadratic Equation ပုစ္ဆာတွေအတွက် General Formula: x = [-b ± sqrt(b² - 4ac)] / 2a ကို အသုံးပြုရပါတယ်။\n\nဒီနေရာမှာ a, b, c တန်ဖိုးတွေကို အရင်ရှာပြီး ဖော်မြူလာထဲ ထည့်တွက်ရတာပါ ဆရာတို့ ရှင်းပြသလို ဆက်လုပ်ကြည့်ပါဦး!`;
    } 
    else if (lowerPrompt.includes("physics") || lowerPrompt.includes("စွမ်းအင်") || lowerPrompt.includes("energy") || lowerPrompt.includes("gravity")) {
      aiResponse = `⚡ Rocco AI (Science Tutor):\n\nရောင်ခြည်စွမ်းအင် (Solar Energy) သို့မဟုတ် ရူပဗေဒဆိုင်ရာ စွမ်းအင်လေ့ကျင့်ခန်းတွေအတွက် စွမ်းအင်တည်မြဲမှုဥပဒေ (Law of Conservation of Energy) ကို အခြေခံပြီး စဉ်းစားရပါတယ်။ မေးခွန်းထဲက ပေးထားချက် (Given values) လေးတွေ စုရေးကြည့်ရအောင်လား?`;
    } 
    else if (lowerPrompt.includes("english") || lowerPrompt.includes("grammar") || lowerPrompt.includes("tenses")) {
      aiResponse = `📚 Rocco AI (English Tutor):\n\nEnglish Grammar လေ့ကျင့်ခန်းအတွက် Tense ပုံစံတွေကို သေချာခွဲခြားဖို့ လိုပါတယ်။ Subject + Verb (1/2/3) ပုံစံမှန်ကန်မှုကို စစ်ဆေးပြီး ဖြေဆိုရပါတယ်။ ဘယ်နေရာလေးမှာ ဝေခွဲမရဖြစ်နေတာလဲ ဆရာ့ကို ထပ်မေးလို့ရပါတယ်ရှင်။`;
    } 
    else {
      aiResponse = `👋 မင်္ဂလာပါရှင်! ကျွန်တော်ကတော့ Prime Maths & Science Hub ရဲ့ Rocco AI Tutor ဖြစ်ပါတယ်။ ဆရာ့ရဲ့ မေးခွန်း ("${prompt}") နဲ့ ပတ်သက်ပြီး G6 ကနေ G12 အထိ သင်ခန်းစာများနှင့်အညီ တစ်ဆင့်ချင်း ဆွေးနွေးပေးသွားမှာ ဖြစ်ပါတယ်။ ထပ်မံသိလိုသည်များကို မေးမြန်းနိုင်ပါတယ်ရှင်!`;
    }

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

