export default function Dashboard() {
  return (
    <main style={{ padding: "30px 16px", fontFamily: "sans-serif", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ background: "linear-gradient(135deg, #2563eb, #1d4ed8)", color: "#fff", padding: "30px", borderRadius: "16px", marginBottom: "25px" }}>
        <h1 style={{ fontSize: "24px", margin: "0 0 10px 0" }}>📊 Student Dashboard</h1>
        <p style={{ fontSize: "15px", margin: 0, opacity: 0.9 }}>
          Track your learning progress, completed lessons, and academic activities across G6–G12.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px", marginBottom: "25px" }}>
        <div style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <h3 style={{ color: "#64748b", fontSize: "14px", margin: "0 0 8px 0" }}>Completed Lessons</h3>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#1e293b", margin: 0 }}>12</p>
        </div>
        <div style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <h3 style={{ color: "#64748b", fontSize: "14px", margin: "0 0 8px 0" }}>AI Tutor Sessions</h3>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#2563eb", margin: 0 }}>5</p>
        </div>
        <div style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <h3 style={{ color: "#64748b", fontSize: "14px", margin: "0 0 8px 0" }}>Current Grade Hub</h3>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#059669", margin: 0 }}>G6 – G12</p>
        </div>
      </div>

      <div style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
        <h3 style={{ color: "#1e293b", marginTop: 0, marginBottom: "12px" }}>🚀 Recent Activities</h3>
        <p style={{ color: "#64748b", fontSize: "14px", margin: "0" }}>No recent activities yet. Start exploring your grade lessons or chat with Tutor Rocco!</p>
      </div>
    </main>
  );
            }

