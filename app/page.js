export default function Home() {
  return (
    <main style={{ padding: "40px 20px", fontFamily: "sans-serif", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ background: "linear-gradient(135deg, #2563eb, #1d4ed8)", color: "#fff", padding: "40px", borderRadius: "16px", marginBottom: "30px", textAlign: "center", boxShadow: "0 10px 25px rgba(37,99,235,0.2)" }}>
        <h1 style={{ fontSize: "32px", margin: "0 0 10px 0" }}>📚 Prime Mathematics & Learning Hub</h1>
        <p style={{ fontSize: "16px", opacity: 0.9, maxWidth: "600px", margin: "0 auto" }}>
          Empowering students from G6 to G12 with interactive lessons, AI tutoring, and peer discussions.
        </p>
      </div>

      <h2 style={{ color: "#1e293b", marginBottom: "20px" }}>🚀 Explore Hub Sections</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
        <a href="/dashboard" style={{ background: "#ffffff", padding: "24px", borderRadius: "12px", border: "1px solid #e2e8f0", textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <h3 style={{ color: "#2563eb", marginTop: 0, marginBottom: "8px" }}>📊 Student Dashboard</h3>
          <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>Track your learning progress and enrolled courses.</p>
        </a>

        <a href="/tutor" style={{ background: "#ffffff", padding: "24px", borderRadius: "12px", border: "1px solid #e2e8f0", textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <h3 style={{ color: "#2563eb", marginTop: 0, marginBottom: "8px" }}>🤖 Tutor Rocco AI</h3>
          <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>Get step-by-step academic explanations from your AI tutor.</p>
        </a>

        <a href="/qa" style={{ background: "#ffffff", padding: "24px", borderRadius: "12px", border: "1px solid #e2e8f0", textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <h3 style={{ color: "#2563eb", marginTop: 0, marginBottom: "8px" }}>💬 Student Q&A Room</h3>
          <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>Ask questions, discuss problems, and help peers.</p>
        </a>

        <a href="/g7" style={{ background: "#ffffff", padding: "24px", borderRadius: "12px", border: "1px solid #e2e8f0", textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <h3 style={{ color: "#2563eb", marginTop: 0, marginBottom: "8px" }}>📖 Grade 7 Learning Area</h3>
          <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>Access mathematics lessons, notes, and exercises.</p>
        </a>
      </div>
    </main>
  );
            }
            
