export default function DashboardPage() {
  return (
    <main style={{ padding: "40px 20px", fontFamily: "sans-serif", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ background: "#ffffff", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", marginBottom: "30px" }}>
        <h1 style={{ color: "#2563eb", marginTop: 0, marginBottom: "8px" }}>📊 Student Dashboard</h1>
        <p style={{ color: "#64748b", fontSize: "16px", margin: 0 }}>
          Welcome back! Track your learning progress, courses, and recent academic activities.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "30px" }}>
        <div style={{ background: "#ffffff", padding: "24px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
          <h3 style={{ color: "#1e293b", marginTop: 0 }}>🎯 Current Grade</h3>
          <p style={{ color: "#2563eb", fontSize: "20px", fontWeight: "bold", margin: 0 }}>Grade 8 Mathematics</p>
        </div>

        <div style={{ background: "#ffffff", padding: "24px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
          <h3 style={{ color: "#1e293b", marginTop: 0 }}>📈 Overall Progress</h3>
          <p style={{ color: "#16a34a", fontSize: "20px", fontWeight: "bold", margin: 0 }}>75% Completed</p>
        </div>
      </div>

      <div style={{ background: "#ffffff", padding: "24px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
        <h3 style={{ color: "#1e293b", marginTop: 0 }}>📚 Enrolled Courses & Lessons</h3>
        <p style={{ color: "#64748b", fontSize: "14px" }}>You have active access to G6–G12 mathematics learning resources, notes, and weekly training materials.</p>
      </div>
    </main>
  );
            }
            
