import "./globals.css";

export const metadata = {
  title: "Telecom Infrastructure Engineering | Serviquent Prime Solutions",
  description: "Specialized telecom infrastructure engineering firm delivering end-to-end solutions across fiber network design, GIS-based planning, make-ready engineering, pole loading analysis, permitting coordination, and broadband infrastructure development.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}