export default function G7Page() {
  return (
    <main style={{ padding: "40px 20px", fontFamily: "sans-serif", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ background: "#ffffff", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", marginBottom: "30px" }}>
        <h1 style={{ color: "#2563eb", marginTop: 0 }}>Grade 7 (G7) Learning Area</h1>
        <p style={{ color: "#64748b", fontSize: "16px" }}>
          Welcome to the G7 Mathematics and school subjects hub. Choose a category below to start learning.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        <div style={{ background: "#ffffff", padding: "20px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
          <h3 style={{ color: "#1e293b", marginTop: 0 }}>📚 Lessons & Notes</h3>
          <p style={{ color: "#64748b", fontSize: "14px" }}>Access chapter-by-chapter mathematics lessons and detailed notes.</p>
        </div>

        <div style={{ background: "#ffffff", padding: "20px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
          <h3 style={{ color: "#1e293b", marginTop: 0 }}>✍️ Practice & Quizzes</h3>
          <p style={{ color: "#64748b", fontSize: "14px" }}>Test your skills with interactive exercises and weekly quizzes.</p>
        </div>
      </div>
    </main>
  );
            }
