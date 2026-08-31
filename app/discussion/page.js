'use client';
import { useState } from 'react';

export default function QAPage() {
  const [questions, setQuestions] = useState([
    { id: 1, author: "Mg Mg", text: "ဆရာရေ G9 ရဲ့ Quadratic Equation ပုစ္ဆာလေး တစ်ခုလောက် ရှင်းပြပေးပါလားဗျာ။", answer: "သေချာတာပေါ့ Mg Mg ရေ။ formula ကို သုံးပြီး ဖြေရှင်းရတာပါ..." },
    { id: 2, author: "Su Su", text: "Physics က နေရောင်ခြည်စွမ်းအင်နဲ့ ပတ်သက်တဲ့ exercise လေး ဘယ်လိုစလုပ်ရမလဲရှင့်။" }
  ]);
  const [newQuestion, setNewQuestion] = useState("");
  const [authorName, setAuthorName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newQuestion.trim() || !authorName.trim()) return;

    const newItem = {
      id: questions.length + 1,
      author: authorName,
      text: newQuestion,
      answer: "ဆရာများ သို့မဟုတ် AI Tutor မှ မကြာမီ အဖြေထုတ်ပေးပါမည်။"
    };

    setQuestions([newItem, ...questions]);
    setNewQuestion("");
    setAuthorName("");
  };

  return (
    <main style={{ padding: "30px 20px", maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif", backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "28px", color: "#1e3a8a", marginBottom: "10px" }}>❓ Q&A Discussion Room</h1>
      <p style={{ color: "#4b5563", marginBottom: "30px" }}>မေးခွန်းများမေးမြန်းပြီး ဆရာများ၊ သူငယ်ချင်းများနှင့် အပြန်အလှန် ဆွေးနွေးနိုင်ပါသည်ရှင်။</p>

      {/* Question Form */}
      <form onSubmit={handleSubmit} style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "12px", boxShadow: "0 2px 4px rgba(0,0,0,0.05)", marginBottom: "30px" }}>
        <h2 style={{ fontSize: "18px", marginBottom: "15px", color: "#374151" }}>မေးခွန်းအသစ် တင်ရန်</h2>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontSize: "14px", color: "#4b5563" }}>နာမည်:</label>
          <input 
            type="text" 
            value={authorName} 
            onChange={(e) => setAuthorName(e.target.value)} 
            placeholder="သင့်နာမည်ထည့်ပါ..." 
            style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontSize: "14px", color: "#4b5563" }}>မေးခွန်း / ဆွေးနွေးချက်:</label>
          <textarea 
            value={newQuestion} 
            onChange={(e) => setNewQuestion(e.target.value)} 
            placeholder="သင်မေးလိုသည်များကို აქရေးပါ..." 
            rows="3"
            style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db" }}
          />
        </div>
        <button type="submit" style={{ backgroundColor: "#2563eb", color: "#ffffff", padding: "10px 20px", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>
          မေးခွန်းတင်မည်
        </button>
      </form>

      {/* Questions List */}
      <div>
        <h2 style={{ fontSize: "20px", marginBottom: "20px", color: "#1f2937" }}>မေးခွန်းများ စာရင်း</h2>
        {questions.map((q) => (
          <div key={q.id} style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "12px", marginBottom: "15px", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
            <div style={{ fontWeight: "bold", color: "#2563eb", marginBottom: "5px" }}>{q.author}</div>
            <div style={{ fontSize: "16px", color: "#111827", marginBottom: "10px" }}>{q.text}</div>
            {q.answer && (
              <div style={{ backgroundColor: "#f3f4f6", padding: "12px", borderRadius: "8px", fontSize: "14px", color: "#374151", borderLeft: "4px solid #2563eb" }}>
                <strong>အဖြေ:</strong> {q.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
  }
