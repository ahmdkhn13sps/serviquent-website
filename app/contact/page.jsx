"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ first: "", last: "", company: "", phone: "", email: "", subject: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function submit() {
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { setSent(true); }
      else { setError("Something went wrong. Please try again or email us directly."); }
    } catch (e) {
      setError("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": "https://www.serviquent.com/contact#webpage",
            "url": "https://www.serviquent.com/contact",
            "name": "Contact Serviquent Prime Solutions",
            "description": "Get in touch with Serviquent Prime Solutions for FTTx network design, OSP fiber engineering, GIS planning, pole loading analysis, permitting, and broadband infrastructure development across the USA.",
            "isPartOf": { "@id": "https://www.serviquent.com/#website" },
            "about": { "@id": "https://www.serviquent.com/#organization" },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.serviquent.com" },
                { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.serviquent.com/contact" }
              ]
            }
          })
        }}
      />
      <div style={{ fontFamily: "'Outfit', sans-serif", background: "#fff", minHeight: "100vh" }}>
        <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Outfit:wght@300;400;500;600;700&display=swap'); * { box-sizing: border-box; margin: 0; padding: 0; }` }} />
        {/* NAV */}
        <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(255,255,255,0.97)", backdropFilter: "blur(16px)", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 56px", boxShadow: "0 1px 28px rgba(12,30,74,0.09)" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <img src="/favicon.ico" alt="Serviquent Logo" style={{ height: 42, width: 42, borderRadius: 8 }} />
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 20, letterSpacing: 0.5, color: "#0c1e4a", lineHeight: 1 }}>SERVIQUENT</div>
              <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#0055e9", fontWeight: 600 }}>Prime Solutions</div>
            </div>
          </a>
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            <a href="/" style={{ color: "#60748b", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>← Back to Home</a>
            <a href="/about" style={{ color: "#60748b", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>About</a>
            <a href="/portfolio" style={{ color: "#60748b", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>Portfolio</a>
            <a href="/careers" style={{ color: "#60748b", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>Careers</a>
          </div>
        </nav>
        {/* HERO */}
        <section style={{ background: "linear-gradient(135deg, #010c22 0%, #031848 60%, #0055e9 100%)", padding: "100px 72px 80px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(56,217,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56,217,255,0.03) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
          <div style={{ position: "relative", maxWidth: 900 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, border: "1px solid rgba(56,217,255,0.35)", borderRadius: 100, padding: "7px 16px", fontSize: 11, color: "#38d9ff", letterSpacing: 3, textTransform: "uppercase", fontWeight: 700, marginBottom: 28, background: "rgba(56,217,255,0.06)" }}>Get In Touch</div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 800, color: "#fff", lineHeight: 1.05, letterSpacing: -1, marginBottom: 24 }}>
              Contact Serviquent<br /><span style={{ color: "#38d9ff" }}>Prime Solutions</span>
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.8, maxWidth: 720 }}>
              Tell us about your project and our engineering team will respond within one business day. Whether you need a preliminary route design, a full FTTx engineering package, pole loading analysis, or permitting support — we are ready.
            </p>
          </div>
        </section>
        {/* MAIN CONTENT */}
        <section style={{ padding: "80px 72px", maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
            {/* LEFT */}
            <div>
              <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontWeight: 700, color: "#0055e9", marginBottom: 14 }}>Contact Information</div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 800, color: "#0c1e4a", marginBottom: 24, letterSpacing: -0.5 }}>Let&apos;s Start a Conversation</h2>
              <p style={{ color: "#60748b", fontSize: 15, lineHeight: 1.9, marginBottom: 36 }}>Our engineering team is ready to assist with your telecom infrastructure project. We respond to all inquiries as quickly as possible.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
                {[
                  { icon: "📧", label: "General Inquiries", val: "info@serviquent.com", href: "mailto:info@serviquent.com" },
                  { icon: "💼", label: "Careers", val: "career@serviquent.com", href: "mailto:career@serviquent.com" },
                  { icon: "📞", label: "Phone (USA)", val: "(307) 317-3044", href: "tel:+13073173044" },
                  { icon: "LI", label: "LinkedIn", val: "Serviquent Prime Solutions", href: "https://www.linkedin.com/company/serviquent/" },
                  { icon: "IG", label: "Instagram", val: "@serviquent", href: "https://www.instagram.com/serviquent/" },
                ].map(function(c) {
                  return (
                    <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : "_self"} rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 16, background: "#f4f8ff", borderRadius: 14, padding: "16px 20px", textDecoration: "none", border: "1px solid #e4ecf8" }}>
                      <div style={{ width: 44, height: 44, borderRadius: 12, background: c.icon === "LI" ? "#0A66C2" : c.icon === "IG" ? "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" : "#eef3ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: c.icon === "LI" || c.icon === "IG" ? 14 : 20, flexShrink: 0 }}>
                      {c.icon === "LI" ? <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> : c.icon === "IG" ? <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> : c.icon}
                    </div>
                      <div>
                        <div style={{ fontSize: 11, color: "#60748b", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>{c.label}</div>
                        <div style={{ fontSize: 14, color: "#0055e9", fontWeight: 600 }}>{c.val}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ background: "#f4f8ff", borderRadius: 14, padding: "20px", border: "1px solid #e4ecf8" }}>
                  <img src="https://flagcdn.com/w80/us.png" alt="USA Flag" style={{ width: 56, height: 36, objectFit: "cover", borderRadius: 4, marginBottom: 10, display: "block", border: "1px solid #e4ecf8" }} />
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 18, fontWeight: 700, color: "#0c1e4a", marginBottom: 4 }}>USA Office</div>
                  <div style={{ fontSize: 14, color: "#60748b", lineHeight: 1.7 }}>Cheyenne, Wyoming<br />United States</div>
                </div>
                <div style={{ background: "#f4f8ff", borderRadius: 14, padding: "20px", border: "1px solid #e4ecf8" }}>
                  <img src="https://flagcdn.com/w80/in.png" alt="India Flag" style={{ width: 56, height: 36, objectFit: "cover", borderRadius: 4, marginBottom: 10, display: "block", border: "1px solid #e4ecf8" }} />
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 18, fontWeight: 700, color: "#0c1e4a", marginBottom: 4 }}>India Office</div>
                  <div style={{ fontSize: 14, color: "#60748b", lineHeight: 1.7 }}>Gurugram, Haryana<br />India</div>
                </div>
              </div>
            </div>
            {/* RIGHT - Form */}
            <div style={{ background: "#f4f8ff", borderRadius: 20, padding: 40, border: "1px solid #e4ecf8" }}>
              <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontWeight: 700, color: "#0055e9", marginBottom: 14 }}>Request a Quote</div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 28, fontWeight: 800, color: "#0c1e4a", marginBottom: 24 }}>Tell Us About Your Project</h2>
              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 26, color: "#0c1e4a", marginBottom: 8 }}>Message Sent!</h3>
                  <p style={{ color: "#60748b", fontSize: 15, lineHeight: 1.8 }}>Our engineering team will respond within one business day.</p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    <input placeholder="First Name" value={form.first} onChange={function(e) { setForm(Object.assign({}, form, { first: e.target.value })); }} style={{ padding: "12px 16px", borderRadius: 9, border: "1.5px solid #e4ecf8", fontSize: 14, fontFamily: "'Outfit', sans-serif", outline: "none", background: "#fff" }} />
                    <input placeholder="Last Name" value={form.last} onChange={function(e) { setForm(Object.assign({}, form, { last: e.target.value })); }} style={{ padding: "12px 16px", borderRadius: 9, border: "1.5px solid #e4ecf8", fontSize: 14, fontFamily: "'Outfit', sans-serif", outline: "none", background: "#fff" }} />
                  </div>
                  <input placeholder="Company Name" value={form.company} onChange={function(e) { setForm(Object.assign({}, form, { company: e.target.value })); }} style={{ padding: "12px 16px", borderRadius: 9, border: "1.5px solid #e4ecf8", fontSize: 14, fontFamily: "'Outfit', sans-serif", outline: "none", background: "#fff" }} />
                  <input placeholder="Phone Number" value={form.phone} onChange={function(e) { setForm(Object.assign({}, form, { phone: e.target.value })); }} style={{ padding: "12px 16px", borderRadius: 9, border: "1.5px solid #e4ecf8", fontSize: 14, fontFamily: "'Outfit', sans-serif", outline: "none", background: "#fff" }} />
                  <input placeholder="Email Address" value={form.email} onChange={function(e) { setForm(Object.assign({}, form, { email: e.target.value })); }} style={{ padding: "12px 16px", borderRadius: 9, border: "1.5px solid #e4ecf8", fontSize: 14, fontFamily: "'Outfit', sans-serif", outline: "none", background: "#fff" }} />
                  <select value={form.service} onChange={function(e) { setForm(Object.assign({}, form, { service: e.target.value })); }} style={{ padding: "12px 16px", borderRadius: 9, border: "1.5px solid #e4ecf8", fontSize: 14, fontFamily: "'Outfit', sans-serif", outline: "none", background: "#fff", color: form.service ? "#0c1e4a" : "#60748b" }}>
                    <option value="">Select Service</option>
                    <option>OSP Fiber Engineering</option>
                    <option>GIS Network Planning</option>
                    <option>Make-Ready Engineering</option>
                    <option>Pole Engineering & Inspection</option>
                    <option>Permitting & Regulatory Coordination</option>
                    <option>ISP Network Design</option>
                    <option>HFC Network Design</option>
                    <option>Bill of Materials (BOM)</option>
                    <option>Traffic Control Plan (TCP)</option>
                    <option>FTTx Network Design</option>
                    <option>Other</option>
                  </select>
                  <input placeholder="Subject" value={form.subject} onChange={function(e) { setForm(Object.assign({}, form, { subject: e.target.value })); }} style={{ padding: "12px 16px", borderRadius: 9, border: "1.5px solid #e4ecf8", fontSize: 14, fontFamily: "'Outfit', sans-serif", outline: "none", background: "#fff" }} />
                  <textarea placeholder="Tell us about your project — scope, location, timeline, and any specific requirements..." value={form.message} onChange={function(e) { setForm(Object.assign({}, form, { message: e.target.value })); }} rows={5} style={{ padding: "12px 16px", borderRadius: 9, border: "1.5px solid #e4ecf8", fontSize: 14, fontFamily: "'Outfit', sans-serif", outline: "none", resize: "vertical", background: "#fff" }} />
                  {error && <p style={{ color: "red", fontSize: 13 }}>{error}</p>}
                  <button onClick={submit} disabled={sending} style={{ background: "#0055e9", color: "#fff", border: "none", padding: "15px", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "'Outfit', sans-serif", marginTop: 4 }}>
                    {sending ? "Sending..." : "Submit Request →"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
        {/* FOOTER */}
        <footer style={{ background: "#010c22", padding: "32px 72px", textAlign: "center", marginTop: 80 }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>© 2026 <a href="/" style={{ color: "#38d9ff", textDecoration: "none", fontWeight: 600 }}>Serviquent Prime Solutions</a> · All Rights Reserved · Cheyenne, Wyoming USA</p>
        </footer>
      </div>
    </>
  );
}