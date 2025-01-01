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
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
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
            <img
              src="https://storage.googleapis.com/msgsndr/4OhLjdxKCuBxvgs4TpUU/media/6630c406f4d5b72faba066f0.jpeg"
              alt="Decorative"
              style={{ width: "100%", marginBottom: "1rem" }}
            />
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