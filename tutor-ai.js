export default function TutorAIPage() {
  return (
    <main style={{ padding: "40px 20px", fontFamily: "sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ background: "#ffffff", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", marginBottom: "30px", textAlign: "center" }}>
        <h1 style={{ color: "#2563eb", marginTop: 0 }}>🤖 Tutor Rocco AI</h1>
        <p style={{ color: "#64748b", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
          Your patient professional AI tutor. Ask academic questions, get step-by-step explanations, and master your mathematics and school subjects.
        </p>
      </div>

      <div style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", border: "1px solid #e2e8f0", minHeight: "300px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ padding: "15px", background: "#f8f9fa", borderRadius: "8px", marginBottom: "20px", color: "#334155", fontSize: "15px" }}>
          👋 Hello! I am Tutor Rocco AI. How can I help you with your studies today? Feel free to ask any math or school subject questions!
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <input 
            type="text" 
            placeholder="Ask a question about G6-G12 mathematics..." 
            style={{ flex: 1, padding: "12px", borderRadius: "8px", border: "1px solid #cbd5e1", outline: "none", fontSize: "14px" }}
            disabled 
          />
          <button style={{ background: "#2563eb", color: "#fff", border: "none", padding: "12px 20px", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>
            Ask
          </button>
        </div>
      </div>
    </main>
  );
}
