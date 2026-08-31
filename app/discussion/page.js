'use client';
import { useState } from 'react';

export default function SimpleChat() {
  const [messages, setMessages] = useState([
    { sender: 'AI', text: 'မင်္ဂလာပါရှင်! Rocco AI Tutor ပါ။ မေးချင်တာများကို အောက်ပါဘောက်စ်မှာ စာရိုက်ပြီး မေးမြန်းနိုင်ပါတယ်ရှင်။' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { sender: 'Student', text: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMsg })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { sender: 'AI', text: data.response || 'အဖြေထုတ်၍ မရပါရှင်။' }]);
    } catch (err) {
      setMessages(prev => [...prev, { sender: 'AI', text: 'ချိတ်ဆက်မှု အခက်အခဲ ရှိနေပါသည်ရှင်။' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#f3f4f6', fontFamily: 'sans-serif' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#2563eb', color: 'white', padding: '15px', textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}>
        🤖 Rocco AI Tutor Hub
      </div>

      {/* Messages List */}
      <div style={{ flex: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {messages.map((m, i) => (
          <div key={i} style={{ alignSelf: m.sender === 'AI' ? 'flex-start' : 'flex-end', maxWidth: '85%' }}>
            <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '2px' }}>{m.sender}</div>
            <div style={{ padding: '10px 14px', borderRadius: '10px', backgroundColor: m.sender === 'AI' ? 'white' : '#2563eb', color: m.sender === 'AI' ? '#111827' : 'white', whiteSpace: 'pre-wrap', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && <div style={{ color: '#6b7280', fontSize: '14px', fontStyle: 'italic' }}>AI စဉ်းစားနေပါသည်...</div>}
      </div>

      {/* Input Form */}
      <form onSubmit={sendMessage} style={{ padding: '10px 15px', backgroundColor: 'white', borderTop: '1px solid #e5e7eb', display: 'flex', gap: '8px' }}>
        <input 
          type="text" 
          placeholder="မေးခွန်းတစ်ခု ရိုက်ထည့်ပါ..." 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, padding: '12px', fontSize: '16px', border: '1px solid #d1d5db', borderRadius: '8px', outline: 'none' }}
        />
        <button type="submit" style={{ padding: '0 20px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px' }}>
          ပို့မည်
        </button>
      </form>
    </div>
  );
}
