'use client';
import { useState } from 'react';

export default function DiscussionPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'AI', text: 'မင်္ဂလာပါရှင်! Prime Maths & Science Hub ရဲ့ Rocco AI Tutor ပါ။ G6 ကနေ G12 အထိ သင်ခန်းစာများ၊ မေးခွန်းများကို လွတ်လပ်စွာ မေးမြန်းနိုင်ပါတယ်ရှင်။' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // 1. Login လုပ်သည့် ပုံစံ
  const handleLogin = (e) => {
    e.preventDefault();
    if (studentName.trim()) {
      setIsLoggedIn(true);
    }
  };

  // 2. AI ဆီသို့ မေးခွန်းပို့ပြီး အဖြေထုတ်သည့် ပုံစံ
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || loading) return;

    const userText = inputMessage;
    setInputMessage('');
    setMessages(prev => [...prev, { sender: studentName, text: userText }]);
    setLoading(true);

    try {
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userText })
      });
      const data = await res.json();
      
      setMessages(prev => [...prev, { sender: 'AI', text: data.response || 'အမှားအယွင်း ရှိသွားပါသည်ရှင်။' }]);
    } catch (err) {
      setMessages(prev => [...prev, { sender: 'AI', text: 'ဆာဗာချိတ်ဆက်မှု အခက်အခဲ ရှိနေပါသည်ရှင်။' }]);
    } finally {
      setLoading(false);
    }
  };

  // ကျောင်းသား Login မဝင်ရသေးရင် ပြမည့် Login Form
  if (!isLoggedIn) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6', fontFamily: 'sans-serif' }}>
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
          <h2 style={{ color: '#2563eb', marginBottom: '10px' }}>Prime Maths & Science Hub</h2>
          <p style={{ color: '#4b5563', marginBottom: '20px', fontSize: '14px' }}>AI Tutor နဲ့ ဆွေးနွေးရန် ကျောင်းသားနာမည်ဖြင့် ဝင်ရောက်ပါရှင်</p>
          <form onSubmit={handleLogin}>
            <input 
              type="text" 
              placeholder="ကျောင်းသား နာမည် (သို့) Email ထည့်ပါ" 
              value={studentName} 
              onChange={(e) => setStudentName(e.target.value)}
              style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '16px', boxSizing: 'border-box' }}
              required 
            />
            <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
              စတင်မေးမြန်းမည်
            </button>
          </form>
        </div>
      </main>
    );
  }

  // Login ဝင်ပြီးရင် ပေါ်မယ့် AI Chat Room
  return (
    <main style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#f9fafb', fontFamily: 'sans-serif' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#2563eb', color: 'white', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, fontSize: '18px' }}>Rocco AI Q&A Room</h3>
        <span style={{ fontSize: '14px', backgroundColor: '#1d4ed8', padding: '5px 10px', borderRadius: '6px' }}>👤 {studentName}</span>
      </header>

      {/* Chat Messages Box */}
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '800px', width: '100%', margin: '0 auto' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ alignSelf: msg.sender === 'AI' ? 'flex-start' : 'flex-end', maxWidth: '75%' }}>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px', textAlign: msg.sender === 'AI' ? 'left' : 'right' }}>
              {msg.sender}
            </div>
            <div style={{ padding: '12px 16px', borderRadius: '12px', backgroundColor: msg.sender === 'AI' ? 'white' : '#2563eb', color: msg.sender === 'AI' ? '#1f2937' : 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', whiteSpace: 'pre-wrap', lineHeight: '1.5' }}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && <div style={{ color: '#6b7280', fontStyle: 'italic' }}>Rocco AI စဉ်းစားနေပါသည်...</div>}
      </div>

      {/* Message Input Box */}
      <form onSubmit={handleSendMessage} style={{ padding: '15px', backgroundColor: 'white', borderTop: '1px solid #e5e7eb', display: 'flex', gap: '10px', maxWidth: '800px', width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
        <input 
          type="text" 
          placeholder="သင်ခန်းစာ မေးခွန်းတစ်ခု မေးမြန်းပါ..." 
          value={inputMessage} 
          onChange={(e) => setInputMessage(e.target.value)}
          style={{ flex: 1, padding: '12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '16px' }}
        />
        <button type="submit" style={{ padding: '12px 20px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
          ပို့မည်
        </button>
      </form>
    </main>
  );
  }
  
