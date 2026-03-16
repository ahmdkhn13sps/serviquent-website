import "./globals.css";

export const metadata = {
  title: "Telecom Infrastructure Engineering | Serviquent Prime Solutions",
  description: "Specialized telecom infrastructure engineering firm delivering end-to-end solutions across fiber network design, GIS-based planning, make-ready engineering, pole loading analysis, permitting coordination, and broadband infrastructure development.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=3" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?v=3" />
        <link rel="apple-touch-icon" href="/favicon.ico?v=3" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}