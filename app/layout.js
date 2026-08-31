export const metadata = {
  title: "PRIME MATHS KIDS — ROCCO Learning Hub",
  description: "A modern learning platform for G6–G12 students.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: "sans-serif", backgroundColor: "#f8f9fa", color: "#333" }}>
        <header style={{ background: "#1e293b", color: "#fff", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ margin: 0, fontSize: "18px" }}>PRIME MATHS KIDS — ROCCO</h2>
          <span style={{ fontSize: "14px", color: "#94a3b8" }}>G6–G12 Learning Hub</span>
        </header>

        <div style={{ minHeight: "80vh" }}>
          {children}
        </div>

        <footer style={{ background: "#1e293b", color: "#fff", textAlign: "center", padding: "20px", fontSize: "14px" }}>
          <p style={{ margin: 0 }}>© 2026 PRIME MATHS KIDS — ROCCO Learning Hub. Created by Bhone Myint Thu (Rocco).</p>
        </footer>
      </body>
    </html>
  );
}
