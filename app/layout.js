import Navbar from "./Navbar";

export const metadata = {
  title: "PRIME MATHS KIDS — ROCCO Learning Hub",
  description: "Empowering students from G6 to G12 with interactive lessons and AI tutoring.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif", backgroundColor: "#f8fafc" }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

