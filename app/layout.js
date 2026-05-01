import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Serviquent Prime Solutions | Telecom Infrastructure Engineering",
  description: "Serviquent Prime Solutions delivers FTTx network design, OSP fiber engineering, GIS network planning, pole loading analysis, make-ready engineering, and telecom permitting across the United States. Trusted by Tier 1 carriers and ISPs.",
  keywords: "telecom engineering, FTTx engineering, OSP fiber design, GIS network planning, pole loading analysis, make ready engineering, fiber network design, FTTH engineering, broadband infrastructure, AT&T contractor, Verizon contractor",
  authors: [{ name: "Serviquent Prime Solutions" }],
  creator: "Serviquent Prime Solutions",
  publisher: "Serviquent Prime Solutions",
  metadataBase: new URL("https://www.serviquent.com"),
  alternates: { canonical: "/" },
  verification: { google: "IYNcAqxWKTCV4ZLQVscqQLPrroGE-u2eiB0nIgJACOk" },
  openGraph: {
    title: "Serviquent Prime Solutions | Telecom Infrastructure Engineering",
    description: "Specialized telecom infrastructure engineering firm delivering FTTx, OSP fiber engineering, GIS planning, pole loading analysis, and broadband infrastructure across the USA.",
    url: "https://www.serviquent.com",
    siteName: "Serviquent Prime Solutions",
    images: [{ url: "https://i.ibb.co/RT8wXLXt/serviquent-logo.png", width: 1200, height: 630, alt: "Serviquent Prime Solutions" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serviquent Prime Solutions | Telecom Infrastructure Engineering",
    description: "FTTx network design, OSP fiber engineering, GIS planning, and broadband infrastructure across the USA.",
    images: ["https://i.ibb.co/RT8wXLXt/serviquent-logo.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.serviquent.com/#organization",
        "name": "Serviquent Prime Solutions",
        "url": "https://www.serviquent.com",
        "logo": { "@type": "ImageObject", "url": "https://i.ibb.co/RT8wXLXt/serviquent-logo.png" },
        "description": "Specialized telecom infrastructure engineering firm delivering FTTx network design, OSP fiber engineering, GIS network planning, pole loading analysis, make-ready engineering, and permitting across the United States.",
        "telephone": "+13073173044",
        "email": "info@serviquent.com",
        "foundingDate": "2024",
        "address": { "@type": "PostalAddress", "addressLocality": "Cheyenne", "addressRegion": "WY", "addressCountry": "US" },
        "sameAs": ["https://www.serviquent.com", "https://www.linkedin.com/company/serviquent/", "https://www.instagram.com/serviquent/"],
        "contactPoint": { "@type": "ContactPoint", "telephone": "+13073173044", "contactType": "customer service", "email": "info@serviquent.com" }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.serviquent.com/#website",
        "url": "https://www.serviquent.com",
        "name": "Serviquent Prime Solutions",
        "publisher": { "@id": "https://www.serviquent.com/#organization" },
        "potentialAction": { "@type": "SearchAction", "target": { "@type": "EntryPoint", "urlTemplate": "https://www.serviquent.com/#contact?q={search_term_string}" }, "query-input": "required name=search_term_string" }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.serviquent.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.serviquent.com/#services" },
          { "@type": "ListItem", "position": 3, "name": "FTTx Engineering", "item": "https://www.serviquent.com/#fttx" },
          { "@type": "ListItem", "position": 4, "name": "About Us", "item": "https://www.serviquent.com/#about" },
          { "@type": "ListItem", "position": 5, "name": "Careers", "item": "https://www.serviquent.com/careers" },
          { "@type": "ListItem", "position": 6, "name": "Portfolio", "item": "https://www.serviquent.com/portfolio" },
          { "@type": "ListItem", "position": 7, "name": "Vendor Partnerships", "item": "https://www.serviquent.com/vendors" },
          { "@type": "ListItem", "position": 8, "name": "Contact", "item": "https://www.serviquent.com/#contact" }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=3" />
        <link rel="shortcut icon" href="/favicon.ico?v=3" />
        <link rel="apple-touch-icon" href="/favicon.ico?v=3" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="US-WY" />
        <meta name="geo.placename" content="Cheyenne, Wyoming" />
        <meta name="language" content="English" />
        <meta name="theme-color" content="#0055e9" />
        <meta name="category" content="Telecom Engineering" />
        <meta name="google-site-verification" content="IYNcAqxWKTCV4ZLQVscqQLPrroGE-u2eiB0nIgJACOk" />
        <link rel="canonical" href="https://www.serviquent.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-2H6TM2DHGT" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2H6TM2DHGT');
        `}</Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
