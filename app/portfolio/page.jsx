"use client";


import { useState, useEffect } from "react";

export default function Portfolio() {
  const [isMobile, setIsMobile] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [form, setForm] = useState({ first: "", last: "", company: "", phone: "", email: "", subject: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(function() {
    function checkMobile() { setIsMobile(window.innerWidth <= 768); }
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return function() { window.removeEventListener("resize", checkMobile); };
  }, []);

  const slides = [
    { n: "01", title: "Cover & Company Overview",     desc: "Bold brand introduction with tagline and core positioning" },
    { n: "02", title: "Who We Are",                   desc: "Company overview, key stats, and trusted carrier clients" },
    { n: "03", title: "Services Overview",            desc: "All 9 core service lines in a clean visual grid" },
    { n: "04", title: "OSP Fiber Engineering",        desc: "Detailed OSP capabilities, deliverables, and standards" },
    { n: "05", title: "GIS Network Planning",         desc: "Geospatial tools, methodologies, and AT&T Waldo proficiency" },
    { n: "06", title: "Make Ready + Pole Engineering",desc: "MRE workflow, NESC compliance, and O-Calc/SPIDAcalc expertise" },
    { n: "07", title: "FTTx Network Design",          desc: "FTTH, FTTB, FTTC, FTTN — four-column architecture breakdown" },
    { n: "08", title: "Permitting & ISP Design",      desc: "Regulatory coordination and full ISP network architecture" },
    { n: "09", title: "Technology Expertise",         desc: "Complete tool stack — ArcGIS, AutoCAD, Katapult, Aramis, Waldo" },
    { n: "10", title: "Engineering Lifecycle",        desc: "6-step process from feasibility through as-built documentation" },
    { n: "11", title: "Why Choose Serviquent",        desc: "6 key differentiators and competitive advantages" },
    { n: "12", title: "Contact & Get in Touch",       desc: "All contact details, social links, and services summary" },
  ];

  async function submit() {
    if (!form.first || !form.email || !form.company || !form.message) {
      setError("Please fill in your name, company, email and message.");
      return;
    }
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        setForm({ first: "", last: "", company: "", phone: "", email: "", subject: "", service: "", message: "" });
      } else {
        setError("Something went wrong. Please email us at info@serviquent.com");
      }
    } catch(e) {
      setError("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: "#f4f8ff", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #e4ecf8", padding: isMobile ? "0 20px" : "0 48px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100 }}>
        <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/favicon.ico" alt="Serviquent" style={{ height: 40, width: 40, borderRadius: 8 }} />
          {!isMobile && <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 16, color: "#0c1e4a", lineHeight: 1 }}>SERVIQUENT</div>
            <div style={{ fontSize: 10, color: "#60748b", letterSpacing: 1 }}>PRIME SOLUTIONS</div>
          </div>}
        </a>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a href="/" style={{ color: "#60748b", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>← Back to Website</a>
          <a href="/Serviquent Breif Company prfoile.pdf" download="Serviquent_Prime_Solutions_Company_Profile.pdf"
            style={{ background: "#0055e9", color: "#fff", padding: "10px 22px", borderRadius: 9, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
            ⬇️ Download PDF
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #010c22 0%, #0a2266 100%)", padding: isMobile ? "60px 20px" : "80px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "rgba(0,85,233,0.1)" }} />
        <div style={{ position: "absolute", bottom: -60, left: -40, width: 250, height: 250, borderRadius: "50%", background: "rgba(56,217,255,0.06)" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: 32 }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(56,217,255,0.1)", border: "1px solid rgba(56,217,255,0.25)", borderRadius: 100, padding: "6px 18px", marginBottom: 20 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#38d9ff", display: "inline-block" }} />
                <span style={{ fontSize: 11, color: "#38d9ff", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>Company Portfolio</span>
              </div>
              <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: isMobile ? 42 : 62, fontWeight: 800, color: "#fff", margin: "0 0 16px", letterSpacing: -1, lineHeight: 1.05 }}>
                Serviquent Prime<br />
                <span style={{ color: "#38d9ff" }}>Solutions Profile</span>
              </h1>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, lineHeight: 1.8, maxWidth: 520, margin: "0 0 32px" }}>
                A comprehensive company profile covering our full range of telecom infrastructure engineering services, technology expertise, and engineering capabilities — available as a free PDF download.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <a href="/Serviquent Breif Company prfoile.pdf" download="Serviquent_Prime_Solutions_Company_Profile.pdf"
                  style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#0055e9", color: "#fff", padding: "15px 32px", borderRadius: 12, fontSize: 16, fontWeight: 700, textDecoration: "none", boxShadow: "0 8px 32px rgba(0,85,233,0.4)" }}>
                  ⬇️ Download PDF Company Profile
                </a>
                <a href="#slides" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "15px 28px", borderRadius: 12, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>
                  Preview Slides ↓
                </a>
              </div>
            </div>
            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, flexShrink: 0 }}>
              {[
                { n: "12", l: "Slides" },
                { n: "9+", l: "Services" },
                { n: "10+", l: "Technologies" },
                { n: "PDF", l: "Format" },
              ].map(function(st) {
                return (
                  <div key={st.l} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "20px 24px", textAlign: "center" }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 32, fontWeight: 800, color: "#38d9ff" }}>{st.n}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 4 }}>{st.l}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* PDF Preview */}
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: isMobile ? "32px 20px 0" : "48px 40px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 11, color: "#0055e9", letterSpacing: 3, textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>Preview</div>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: isMobile ? 28 : 38, fontWeight: 800, color: "#0c1e4a" }}>Company Profile Preview</h2>
        </div>
        <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,85,233,0.12)", border: "1.5px solid #e4ecf8" }}>
          <iframe
            src="https://drive.google.com/file/d/1RV22sejFaVNoBuT3UCYSozuHVfl_VP_R/preview"
            width="100%"
            height={isMobile ? "400px" : "600px"}
            allow="autoplay"
            style={{ display: "block", border: "none" }}
          />
        </div>
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <a href="/Serviquent Breif Company prfoile.pdf" download="Serviquent_Prime_Solutions_Company_Profile.pdf"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#0055e9", color: "#fff", padding: "14px 32px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
            ⬇️ Download Full PDF
          </a>
        </div>
      </div>

      {/* Slides Preview */}
      <div id="slides" style={{ maxWidth: 1000, margin: "0 auto", padding: isMobile ? "48px 20px" : "64px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ fontSize: 11, color: "#0055e9", letterSpacing: 3, textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>What&apos;s Inside</div>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: isMobile ? 32 : 46, fontWeight: 800, color: "#0c1e4a", letterSpacing: -0.5 }}>Portfolio Slide Breakdown</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16 }}>
          {slides.map(function(sl) {
            return (
              <div key={sl.n} style={{ background: "#fff", borderRadius: 14, padding: "20px 24px", border: "1.5px solid #e4ecf8", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg, #010c22, #0055e9)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 800, color: "#38d9ff" }}>{sl.n}</span>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#0c1e4a", marginBottom: 4 }}>{sl.title}</div>
                  <div style={{ fontSize: 12, color: "#60748b", lineHeight: 1.6 }}>{sl.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: "linear-gradient(135deg, #010c22 0%, #0a2266 100%)", padding: isMobile ? "48px 20px" : "64px 80px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: isMobile ? 32 : 48, fontWeight: 800, color: "#fff", marginBottom: 16 }}>Ready to Work Together?</h2>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, marginBottom: 36, maxWidth: 500, margin: "0 auto 36px" }}>Download our portfolio and reach out to discuss your next telecom engineering project.</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/Serviquent Breif Company prfoile.pdf" download="Serviquent_Prime_Solutions_Company_Profile.pdf"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#0055e9", color: "#fff", padding: "15px 36px", borderRadius: 12, fontSize: 16, fontWeight: 700, textDecoration: "none", boxShadow: "0 8px 32px rgba(0,85,233,0.4)" }}>
            ⬇️ Download PDF Company Profile
          </a>
          <button onClick={function() { setQuoteOpen(true); }} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#38d9ff", color: "#010c22", padding: "15px 36px", borderRadius: 12, fontSize: 16, fontWeight: 700, textDecoration: "none", border: "none", cursor: "pointer", fontFamily: "'Outfit', sans-serif" }}>
            Get a Quote →
          </button>
        </div>
      </div>

      {/* Quote Modal */}
      {quoteOpen && (
        <div onClick={function() { setQuoteOpen(false); }} style={{ position: "fixed", inset: 0, background: "rgba(5,15,42,0.85)", backdropFilter: "blur(8px)", zIndex: 99999, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
          <div onClick={function(e) { e.stopPropagation(); }} style={{ background: "#fff", borderRadius: 20, width: "100%", maxWidth: 560, maxHeight: "90vh", overflowY: "auto", boxShadow: "0 40px 100px rgba(0,0,0,0.4)" }}>
            <div style={{ background: "linear-gradient(135deg, #010c22, #0055e9)", padding: "22px 28px", borderRadius: "20px 20px 0 0", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0 }}>
              <div>
                <div style={{ fontSize: 10, color: "#38d9ff", letterSpacing: 2, fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Serviquent Prime Solutions</div>
                <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 24, fontWeight: 800, color: "#fff", margin: 0 }}>Request a Quote</h2>
              </div>
              <button onClick={function() { setQuoteOpen(false); }} style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff", fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>×</button>
            </div>
            <div style={{ padding: "24px 28px" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 28, fontWeight: 800, color: "#0c1e4a", marginBottom: 12 }}>Message Sent!</h3>
                  <p style={{ color: "#60748b", fontSize: 15, marginBottom: 24 }}>Our engineering team will respond within one business day.</p>
                  <button onClick={function() { setQuoteOpen(false); }} style={{ background: "#0055e9", color: "#fff", border: "none", padding: "12px 32px", borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Close</button>
                </div>
              ) : (
                <div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                    <div>
                      <label style={{ fontSize: 11, color: "#94a3b8", letterSpacing: 1, textTransform: "uppercase", fontWeight: 600, display: "block", marginBottom: 6 }}>First Name *</label>
                      <input autoFocus value={form.first} onChange={function(e) { setForm(Object.assign({}, form, { first: e.target.value })); }} placeholder="John" style={{ width: "100%", padding: "11px 14px", borderRadius: 9, border: "1.5px solid #e4ecf8", fontSize: 14, outline: "none", fontFamily: "'Outfit', sans-serif", boxSizing: "border-box" }} />
                    </div>
                    <div>
                      <label style={{ fontSize: 11, color: "#94a3b8", letterSpacing: 1, textTransform: "uppercase", fontWeight: 600, display: "block", marginBottom: 6 }}>Last Name</label>
                      <input value={form.last} onChange={function(e) { setForm(Object.assign({}, form, { last: e.target.value })); }} placeholder="Smith" style={{ width: "100%", padding: "11px 14px", borderRadius: 9, border: "1.5px solid #e4ecf8", fontSize: 14, outline: "none", fontFamily: "'Outfit', sans-serif", boxSizing: "border-box" }} />
                    </div>
                  </div>
                  <div style={{ marginBottom: 12 }}>
                    <label style={{ fontSize: 11, color: "#94a3b8", letterSpacing: 1, textTransform: "uppercase", fontWeight: 600, display: "block", marginBottom: 6 }}>Company Name *</label>
                    <input value={form.company} onChange={function(e) { setForm(Object.assign({}, form, { company: e.target.value })); }} placeholder="Your Company" style={{ width: "100%", padding: "11px 14px", borderRadius: 9, border: "1.5px solid #e4ecf8", fontSize: 14, outline: "none", fontFamily: "'Outfit', sans-serif", boxSizing: "border-box" }} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                    <div>
                      <label style={{ fontSize: 11, color: "#94a3b8", letterSpacing: 1, textTransform: "uppercase", fontWeight: 600, display: "block", marginBottom: 6 }}>Phone</label>
                      <input value={form.phone} onChange={function(e) { setForm(Object.assign({}, form, { phone: e.target.value })); }} placeholder="+1 (000) 000-0000" style={{ width: "100%", padding: "11px 14px", borderRadius: 9, border: "1.5px solid #e4ecf8", fontSize: 14, outline: "none", fontFamily: "'Outfit', sans-serif", boxSizing: "border-box" }} />
                    </div>
                    <div>
                      <label style={{ fontSize: 11, color: "#94a3b8", letterSpacing: 1, textTransform: "uppercase", fontWeight: 600, display: "block", marginBottom: 6 }}>Email *</label>
                      <input value={form.email} onChange={function(e) { setForm(Object.assign({}, form, { email: e.target.value })); }} placeholder="your@email.com" type="email" style={{ width: "100%", padding: "11px 14px", borderRadius: 9, border: "1.5px solid #e4ecf8", fontSize: 14, outline: "none", fontFamily: "'Outfit', sans-serif", boxSizing: "border-box" }} />
                    </div>
                  </div>
                  <div style={{ marginBottom: 12 }}>
                    <label style={{ fontSize: 11, color: "#94a3b8", letterSpacing: 1, textTransform: "uppercase", fontWeight: 600, display: "block", marginBottom: 6 }}>Message *</label>
                    <textarea value={form.message} onChange={function(e) { setForm(Object.assign({}, form, { message: e.target.value })); }} placeholder="Tell us about your project..." rows={4} style={{ width: "100%", padding: "11px 14px", borderRadius: 9, border: "1.5px solid #e4ecf8", fontSize: 14, outline: "none", fontFamily: "'Outfit', sans-serif", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                  {error && <div style={{ marginBottom: 12, padding: "10px 14px", background: "#fff0f0", border: "1.5px solid #ffcdd2", borderRadius: 9, color: "#c62828", fontSize: 13 }}>{error}</div>}
                  <button onClick={submit} disabled={sending} style={{ width: "100%", background: sending ? "#6b9eff" : "#0055e9", color: "#fff", border: "none", padding: 14, borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: sending ? "not-allowed" : "pointer", fontFamily: "'Outfit', sans-serif" }}>
                    {sending ? "Sending..." : "Submit Request →"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div style={{ background: "#060e1f", padding: "24px 48px", textAlign: "center" }}>
        <p style={{ color: "#4a6080", fontSize: 13, margin: 0 }}>
          © 2026 <a href="/" style={{ color: "#38d9ff", textDecoration: "none", fontWeight: 600 }}>Serviquent Prime Solutions</a> · All Rights Reserved
        </p>
      </div>
    </div>
  );
}