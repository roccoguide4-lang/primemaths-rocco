export default function QARoomPage() {
  return (
    <main style={{ padding: "40px 20px", fontFamily: "sans-serif", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ background: "#ffffff", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", marginBottom: "30px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "15px" }}>
        <div>
          <h1 style={{ color: "#2563eb", marginTop: 0, marginBottom: "8px" }}>💬 Student Q&A Room</h1>
          <p style={{ color: "#64748b", fontSize: "15px", margin: 0 }}>
            Ask questions, help peers, and discuss mathematics and school topics together.
          </p>
        </div>
        <button style={{ background: "#2563eb", color: "#fff", border: "none", padding: "12px 20px", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>
          Ask Question
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div style={{ background: "#ffffff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", border: "1px solid #e2e8f0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "13px", color: "#64748b" }}>
            <span style={{ background: "#eff6ff", color: "#2563eb", padding: "2px 8px", borderRadius: "4px", fontWeight: "bold" }}>Grade 8 • Mathematics</span>
            <span>Posted by Student</span>
          </div>
          <h3 style={{ color: "#1e293b", margin: "0 0 8px 0" }}>How do I solve linear equations with fractions?</h3>
          <p style={{ color: "#475569", fontSize: "14px", margin: 0 }}>
            I am having trouble finding the common denominator when solving equations like (x/2) + (x/3) = 5. Can someone explain?
          </p>
        </div>
      </div>
    </main>
  );
}
