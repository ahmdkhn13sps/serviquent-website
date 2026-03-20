import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Telecom Infrastructure Engineering | Serviquent Prime Solutions",
  description: "Serviquent Prime Solutions is a specialized telecom infrastructure engineering firm delivering FTTx network design, OSP fiber engineering, GIS network planning, pole loading analysis, permitting coordination, and broadband infrastructure development across the United States.",
  keywords: "telecom engineering, FTTx engineering, OSP fiber design, GIS network planning, pole loading analysis, make ready engineering, fiber network design, telecom permitting, broadband infrastructure, FTTH engineering, ISP network design",
  authors: [{ name: "Serviquent Prime Solutions" }],
  creator: "Serviquent Prime Solutions",
  publisher: "Serviquent Prime Solutions",
  metadataBase: new URL("https://www.serviquent.com"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "IYNcAqxWKTCV4ZLQVscqQLPrroGE-u2eiB0nIgJACOk",
  },
  openGraph: {
    title: "Telecom Infrastructure Engineering | Serviquent Prime Solutions",
    description: "Specialized telecom infrastructure engineering firm delivering FTTx, OSP fiber engineering, GIS planning, pole loading analysis, and broadband infrastructure development across the USA.",
    url: "https://www.serviquent.com",
    siteName: "Serviquent Prime Solutions",
    images: [
      {
        url: "https://i.ibb.co/RT8wXLXt/serviquent-logo.png",
        width: 1200,
        height: 630,
        alt: "Serviquent Prime Solutions - Telecom Infrastructure Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Telecom Infrastructure Engineering | Serviquent Prime Solutions",
    description: "Specialized telecom infrastructure engineering firm delivering FTTx, OSP fiber engineering, GIS planning, and broadband infrastructure development across the USA.",
    images: ["https://i.ibb.co/RT8wXLXt/serviquent-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="Cheyenne, Wyoming" />
        <meta name="language" content="English" />
        <meta name="google-site-verification" content="IYNcAqxWKTCV4ZLQVscqQLPrroGE-u2eiB0nIgJACOk" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2H6TM2DHGT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2H6TM2DHGT');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}