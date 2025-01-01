export const metadata = {
  title: "Cash Flow Tool",
  description: "Manage your cash flow effectively",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex", height: "100vh" }}>
          <aside
            style={{
              width: "200px",
              backgroundColor: "#FFEAD5",
              padding: "1rem",
              position: "fixed",
            }}
          >
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <a href="/" style={{ textDecoration: "none" }}>Home</a>
              </li>
              <li>
                <a href="/dashboard" style={{ textDecoration: "none" }}>Dashboard</a>
              </li>
              <li>
                <a href="/settings" style={{ textDecoration: "none" }}>Settings</a>
              </li>
            </ul>
          </aside>

          <main style={{ marginLeft: "200px", width: "calc(100% - 200px)", padding: "1rem" }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
