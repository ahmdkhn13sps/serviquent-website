export default function sitemap() {
  return [
    { url: "https://www.serviquent.com",           lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: "https://www.serviquent.com/about",     lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.serviquent.com/contact",   lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.serviquent.com/careers",   lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: "https://www.serviquent.com/portfolio", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.serviquent.com/vendors",   lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.serviquent.com/global-solutions", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
