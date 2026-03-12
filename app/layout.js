import "./globals.css";

export const metadata = {
  title: "Serviquent Prime Solutions | Telecom Infrastructure Engineering",
  description: "Specialized telecom infrastructure engineering firm delivering end-to-end solutions across fiber network design, GIS-based planning, make-ready engineering, pole loading analysis, permitting coordination, and broadband infrastructure development.",
  icons: {
    icon: [
      { url: "https://i.ibb.co/RT8wXLXt/serviquent-logo.png", sizes: "any" },
    ],
    apple: "https://i.ibb.co/RT8wXLXt/serviquent-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://i.ibb.co/RT8wXLXt/serviquent-logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="https://i.ibb.co/RT8wXLXt/serviquent-logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}