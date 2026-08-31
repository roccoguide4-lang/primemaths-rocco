export default function Home() {
  return (
    <main style={{ padding: "30px 16px", fontFamily: "sans-serif", maxWidth: "900px", margin: "0 auto" }}>
      {/* Hero Section */}
      <div style={{ background: "linear-gradient(135deg, #1e293b, #0f172a)", color: "#fff", padding: "40px 20px", borderRadius: "16px", marginBottom: "30px", textAlign: "center" }}>
        <h1 style={{ fontSize: "28px", margin: "0 0 10px 0" }}>PRIME MATHS KIDS</h1>
        <h2 style={{ fontSize: "20px", color: "#38bdf8", margin: "0 0 15px 0" }}>ROCCO Learning Hub</h2>
        <p style={{ fontSize: "15px", opacity: 0.9, maxWidth: "600px", margin: "0 auto 20px auto", fontStyle: "italic" }}>
          &quot;Learn smarter. Understand deeper. Grow with Rocco.&quot;
        </p>
      </div>

      {/* Grade Selection G6 to G12 */}
      <section style={{ marginBottom: "30px" }}>
        <h3 style={{ color: "#1e293b", marginBottom: "15px", fontSize: "18px" }}>📚 Complete Grades (G6 — G12)</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))", gap: "10px" }}>
          {["g6", "g7", "g8", "g9", "g10", "g11", "g12"].map((grade) => (
            <a key={grade} href={`/${grade}`} style={{ background: "#ffffff", padding: "15px", borderRadius: "10px", textAlign: "center", border: "1px solid #e2e8f0", textDecoration: "none", color: "#2563eb", fontWeight: "bold", textTransform: "uppercase" }}>
              {grade}
            </a>
          ))}
        </div>
      </section>

      {/* Core Sections */}
      <section style={{ marginBottom: "30px" }}>
        <h3 style={{ color: "#1e293b", marginBottom: "15px", fontSize: "18px" }}>🚀 Hub Sections</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px" }}>
          <a href="/tutor" style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0", textDecoration: "none" }}>
            <h4 style={{ color: "#2563eb", margin: "0 0 8px 0" }}>🤖 Tutor Rocco AI</h4>
            <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>Step-by-step academic guidance.</p>
          </a>
          <a href="/qa" style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0", textDecoration: "none" }}>
            <h4 style={{ color: "#2563eb", margin: "0 0 8px 0" }}>💬 Q&A Room</h4>
            <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>Ask questions and learn from peers.</p>
          </a>
          <a href="/dashboard" style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0", textDecoration: "none" }}>
            <h4 style={{ color: "#2563eb", margin: "0 0 8px 0" }}>📊 Dashboard</h4>
            <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>Track your learning progress.</p>
          </a>
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "20px 0", color: "#64748b", fontSize: "13px", borderTop: "1px solid #e2e8f0" }}>
        <p style={{ margin: "0 0 5px 0" }}>PRIME MATHS KIDS — ROCCO Learning Hub</p>
        <p style={{ margin: 0 }}>Creator: Bhone Myint Thu (Rocco)</p>
      </footer>
    </main>
  );
}

