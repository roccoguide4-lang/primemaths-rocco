import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ background: "#1e293b", color: "#fff", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "15px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
      <div style={{ fontWeight: "bold", fontSize: "18px" }}>
        <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>
          PRIME MATHS KIDS — ROCCO
        </Link>
      </div>
      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", fontSize: "14px" }}>
        <Link href="/" style={{ color: "#cbd5e1", textDecoration: "none" }}>Home</Link>
        <Link href="/dashboard" style={{ color: "#cbd5e1", textDecoration: "none" }}>Dashboard</Link>
        <Link href="/tutor" style={{ color: "#cbd5e1", textDecoration: "none" }}>Tutor Rocco</Link>
        <Link href="/qa" style={{ color: "#cbd5e1", textDecoration: "none" }}>Q&A</Link>
        <Link href="/g7" style={{ color: "#cbd5e1", textDecoration: "none" }}>G7</Link>
      </div>
    </nav>
  );
            }
            
