export const metadata = {
  title: "About Us | Serviquent Prime Solutions",
  description: "Serviquent Prime Solutions was founded by engineers with decades of North American telecom experience. We deliver FTTx, OSP fiber engineering, GIS planning, pole loading, TCP, BOM, and HFC network design across the USA.",
  openGraph: {
    title: "About Serviquent Prime Solutions",
    description: "Carrier-grade telecom infrastructure engineering founded by industry veterans. Serving ISPs, electric cooperatives, municipalities, and Tier 1 carriers across the United States.",
    url: "https://www.serviquent.com/about",
    siteName: "Serviquent Prime Solutions",
    images: [{ url: "https://i.ibb.co/RT8wXLXt/serviquent-logo.png", width: 1200, height: 630 }],
    type: "website",
  },
  alternates: { canonical: "https://www.serviquent.com/about" },
  keywords: ["telecom engineering company", "OSP fiber engineering firm", "FTTx network design", "GIS network planning", "telecom infrastructure USA"],
};

export default function AboutLayout({ children }) {
  return children;
}
