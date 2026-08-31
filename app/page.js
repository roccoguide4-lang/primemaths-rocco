'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9fafb', fontFamily: 'sans-serif', paddingBottom: '40px' }}>
      {/* Navigation Bar အပြည့်အစုံ */}
      <nav style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 10 }}>
        <h2 style={{ color: '#2563eb', margin: 0, fontSize: '18px', fontWeight: 'bold' }}>PRIME MATHS & KIDS</h2>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <Link href="/" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>Home</Link>
          <Link href="/discussion" style={{ textDecoration: 'none', color: '#2563eb', fontWeight: 'bold', backgroundColor: '#eff6ff', padding: '6px 12px', borderRadius: '6px' }}>💬 Q&A & AI Tutor</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{ maxWidth: '800px', margin: '30px auto', padding: '0 20px' }}>
        <div style={{ backgroundColor: '#1e293b', color: 'white', padding: '40px 30px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
          <h1 style={{ fontSize: '28px', marginBottom: '10px' }}>PRIME MATHS KIDS</h1>
          <p style={{ fontSize: '20px', color: '#38bdf8', marginBottom: '15px', fontWeight: '600' }}>ROCCO Learning Hub</p>
          <p style={{ fontStyle: 'italic', color: '#94a3b8', fontSize: '14px', marginBottom: '25px' }}>"Learn smarter. Understand deeper. Grow with Rocco."</p>
          
          {/* တိုက်ရိုက်ဝင်မယ့် ခလုတ်ကြီး */}
          <Link href="/discussion" style={{ display: 'inline-block', backgroundColor: '#2563eb', color: 'white', padding: '12px 25px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.4)' }}>
            🚀 Rocco AI Tutor သို့ တိုက်ရိုက်ဝင်မည်
          </Link>
        </div>

        {/* Grades Section */}
        <h3 style={{ marginTop: '30px', color: '#1f2937' }}>📚 Complete Grades (G6 — G12)</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '15px' }}>
          {['G6', 'G7', 'G8', 'G9', 'G10', 'G11', 'G12'].map((grade) => (
            <div key={grade} style={{ backgroundColor: 'white', padding: '15px', textAlign: 'center', borderRadius: '8px', border: '1px solid #e5e7eb', fontWeight: 'bold', color: '#2563eb' }}>
              {grade}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

