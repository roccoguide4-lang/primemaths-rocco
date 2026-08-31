export default function G9Learning() {
  return (
    <main style={{ padding: "30px 16px", fontFamily: "sans-serif", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ background: "#2563eb", color: "#fff", padding: "30px", borderRadius: "16px", marginBottom: "25px" }}>
        <h1 style={{ fontSize: "24px", margin: "0 0 10px 0" }}>📖 Grade 9 Learning Hub</h1>
        <p style={{ fontSize: "15px", margin: 0, opacity: 0.9 }}>
          Master high school foundational subjects, mathematics, and sciences designed for Grade 9.
        </p>
      </div>

      <h2 style={{ color: "#1e293b", fontSize: "18px", marginBottom: "15px" }}>📚 Grade 9 Subjects & Lessons</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "15px" }}>
        <div style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <h3 style={{ color: "#2563eb", marginTop: 0, marginBottom: "8px" }}>Mathematics</h3>
          <p style={{ color: "#64748b", fontSize: "14px", margin: "0 0 12px 0" }}>Quadratic equations, functions, and advanced geometry.</p>
          <span style={{ background: "#dbeafe", color: "#1d4ed8", padding: "4px 10px", borderRadius: "6px", fontSize: "12px", fontWeight: "bold" }}>Active Lessons</span>
        </div>

        <div style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <h3 style={{ color: "#2563eb", marginTop: 0, marginBottom: "8px" }}>Science</h3>
          <p style={{ color: "#64748b", fontSize: "14px", margin: "0 0 12px 0" }}>Physics, chemistry fundamentals, and biological systems.</p>
          <span style={{ background: "#dbeafe", color: "#1d4ed8", padding: "4px 10px", borderRadius: "6px", fontSize: "12px", fontWeight: "bold" }}>Active Lessons</span>
        </div>
      </div>
    </main>
  );
}
