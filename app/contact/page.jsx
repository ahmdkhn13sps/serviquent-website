"use client";
import { useState } from "react";

export default function AboutPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
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
      else { setError("Something went wrong. Please try again."); }
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
            "@type": "AboutPage",
            "@id": "https://www.serviquent.com/about#webpage",
            "url": "https://www.serviquent.com/about",
            "name": "About Serviquent Prime Solutions",
            "description": "Serviquent Prime Solutions is a telecom infrastructure engineering firm founded by engineers with decades of North American telecom experience.",
            "isPartOf": { "@id": "https://www.serviquent.com/#website" },
            "about": { "@id": "https://www.serviquent.com/#organization" },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.serviquent.com" },
                { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.serviquent.com/about" }
              ]
            }
          })
        }}
      />

      {/* Quote Modal */}
      {quoteOpen && (
        <div onClick={function(e) { if (e.target === e.currentTarget) setQuoteOpen(false); }} style={{ position: "fixed", inset: 0, background: "rgba(1,12,34,0.7)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
          <div style={{ background: "#fff", borderRadius: 20, padding: 40, maxWidth: 540, width: "100%", maxHeight: "90vh", overflowY: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 28, fontWeight: 800, color: "#0c1e4a" }}>Get a Quote</h2>
              <button onClick={function() { setQuoteOpen(false); }} style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer", color: "#60748b" }}>✕</button>
            </div>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 24, color: "#0c1e4a", marginBottom: 8 }}>Message Sent!</h3>
                <p style={{ color: "#60748b" }}>Our engineering team will respond within one business day.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <input placeholder="First Name" value={form.first} onChange={function(e) { setForm(Object.assign({}, form, { first: e.target.value })); }} style={{ padding: "12px 16px", borderRadius: 9, border: "1.5px solid #e4ecf8", fontSize: 14, fontFamily: "'Outfit', sans-serif", outline: "none" }} />
                  <input placeholder="Last Name" value={form.last} onChange={function(e) { setForm(Object.assign({}, form, { last: e.target.value })); }} style={{ padding: "12px 16px", borderRadius: 9, border: "1.5px solid #e4ecf8", fontSize: 14, fontFamily: "'Outfit', sans-serif", outline: "none" }} />
                </div>
                <input placeholder="Company" value={form.company} onChange={function(e) { setForm(Object.assign({}, form, { company: e.target.value })); }} style={{ padding: "12px 16px", borderRadius: 9, border: "1.5px solid #e4ecf8", fontSize: 14, fontFamily: "'Outfit', sans-serif", outline: "none" }} />
                <input placeholder="Phone Number" value={form.phone} onChange={function(e) { setForm(Object.assign({}, form, { phone: e.target.value })); }} style={{ padding: "12px 16px", borderRadius: 9, border: "1.5px solid #e4ecf8", fontSize: 14, fontFamily: "'Outfit', sans-serif", outline: "none" }} />
                <input placeholder="Email Address" value={form.email} onChange={function(e) { setForm(Object.assign({}, form, { email: e.target.value })); }} style={{ padding: "12px 16px", borderRadius: 9, border: "1.5px solid #e4ecf8", fontSize: 14, fontFamily: "'Outfit', sans-serif", outline: "none" }} />
                <select value={form.service} onChange={function(e) { setForm(Object.assign({}, form, { service: e.target.value })); }} style={{ padding: "12px 16px", borderRadius: 9, border: "1.5px solid #e4ecf8", fontSize: 14, fontFamily: "'Outfit', sans-serif", outline: "none", color: form.service ? "#0c1e4a" : "#60748b" }}>
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
                  <option>Other</option>
                </select>
                <textarea placeholder="Tell us about your project..." value={form.message} onChange={function(e) { setForm(Object.assign({}, form, { message: e.target.value })); }} rows={4} style={{ padding: "12px 16px", borderRadius: 9, border: "1.5px solid #e4ecf8", fontSize: 14, fontFamily: "'Outfit', sans-serif", outline: "none", resize: "vertical" }} />
                {error && <p style={{ color: "red", fontSize: 13 }}>{error}</p>}
                <button onClick={submit} disabled={sending} style={{ background: "#0055e9", color: "#fff", border: "none", padding: "14px", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "'Outfit', sans-serif" }}>
                  {sending ? "Sending..." : "Submit Request →"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

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
            <a href="/portfolio" style={{ color: "#60748b", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>Portfolio</a>
            <a href="/careers" style={{ color: "#60748b", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>Careers</a>
            <a href="/contact" style={{ color: "#60748b", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>Contact</a>
            <button onClick={function() { setQuoteOpen(true); }} style={{ background: "#0055e9", color: "#fff", padding: "10px 22px", borderRadius: 9, fontSize: 14, fontWeight: 600, textDecoration: "none", border: "none", cursor: "pointer", fontFamily: "'Outfit', sans-serif" }}>Get a Quote</button>
          </div>
        </nav>

        {/* HERO */}
        <section style={{ background: "linear-gradient(135deg, #010c22 0%, #031848 60%, #0055e9 100%)", padding: "100px 72px 80px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(56,217,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56,217,255,0.03) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
          <div style={{ position: "relative", maxWidth: 900 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, border: "1px solid rgba(56,217,255,0.35)", borderRadius: 100, padding: "7px 16px", fontSize: 11, color: "#38d9ff", letterSpacing: 3, textTransform: "uppercase", fontWeight: 700, marginBottom: 28, background: "rgba(56,217,255,0.06)" }}>Who We Are</div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 800, color: "#fff", lineHeight: 1.05, letterSpacing: -1, marginBottom: 24 }}>
              About Serviquent<br /><span style={{ color: "#38d9ff" }}>Prime Solutions</span>
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.8, maxWidth: 720 }}>
              Some engineering firms design networks. Serviquent engineers the infrastructure that powers entire regions — and we do it with the precision, speed, and carrier-grade standards that the industry&apos;s most demanding clients expect.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section style={{ padding: "80px 72px", maxWidth: 1100, margin: "0 auto" }}>

          {/* Our Story */}
          <div style={{ marginBottom: 64 }}>
            <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontWeight: 700, color: "#0055e9", marginBottom: 14 }}>Our Story</div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 800, color: "#0c1e4a", marginBottom: 24, letterSpacing: -0.5 }}>Founded by Engineers. Run by Engineers.</h2>
            <p style={{ color: "#60748b", fontSize: 16, lineHeight: 1.9, marginBottom: 20 }}>Serviquent Prime Solutions was founded by engineers who built their careers inside the most complex telecom programs in North America. Decades of combined experience designing multi-state fiber deployments, executing Tier 1 carrier engineering programs, and delivering construction-ready packages that go directly to build crews — that is the foundation this company was built on.</p>
            <p style={{ color: "#60748b", fontSize: 16, lineHeight: 1.9, marginBottom: 20 }}>We established Serviquent because we knew that carrier-grade engineering excellence should not be a privilege reserved for the largest firms. Every regional ISP, every electric cooperative, every municipal broadband authority, and every infrastructure investor deserves deliverables that meet the same exacting standard — precise, compliant, and ready to build from day one, without revision, rework, or delay.</p>
            <p style={{ color: "#0055e9", fontSize: 16, lineHeight: 1.9, fontWeight: 600, fontStyle: "italic" }}>We don&apos;t just design networks. We engineer the infrastructure backbone of modern America.</p>
          </div>

          {/* What We Do */}
          <div style={{ marginBottom: 64 }}>
            <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontWeight: 700, color: "#0055e9", marginBottom: 14 }}>What We Do</div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 800, color: "#0c1e4a", marginBottom: 24, letterSpacing: -0.5 }}>Full OSP Engineering Lifecycle</h2>
            <p style={{ color: "#60748b", fontSize: 16, lineHeight: 1.9, marginBottom: 20 }}>We operate across the full OSP engineering lifecycle. We design aerial, underground, and hybrid fiber routes using verified GIS data. We engineer complete FTTx passive optical networks for FTTH, FTTB, FTTC, and FTTN deployments. We perform structural pole loading analysis and make-ready engineering to NESC and California GO 95 standards.</p>
            <p style={{ color: "#60748b", fontSize: 16, lineHeight: 1.9, marginBottom: 32 }}>We prepare Traffic Control Plans (TCP), manage ROW and multi-jurisdictional permitting, produce detailed Bills of Materials (BOM), and deliver final as-built documentation packages that close projects cleanly. For HFC (Hybrid Fiber-Coaxial) networks, we design the full plant from headend through fiber node to subscriber tap.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {[
                { icon: "🔧", title: "OSP Fiber Engineering", desc: "Aerial, underground, and hybrid fiber route design with GIS-integrated deliverables and full BOM." },
                { icon: "🗺️", title: "GIS Network Planning", desc: "Geospatial mapping, route optimization, and permit-ready asset inventories using ArcGIS and QGIS." },
                { icon: "📐", title: "Pole Loading & Make-Ready", desc: "Structural analysis to NESC and GO 95 standards using O-Calc Pro and SPIDAcalc." },
                { icon: "📋", title: "Permitting & TCP", desc: "End-to-end permitting, ROW coordination, and Traffic Control Plans to MUTCD standards." },
                { icon: "📦", title: "Bill of Materials (BOM)", desc: "Complete itemized material lists for accurate procurement and field crew readiness." },
                { icon: "📡", title: "HFC Network Design", desc: "Full Hybrid Fiber-Coaxial plant design from headend through fiber node to subscriber tap." },
                { icon: "🌐", title: "FTTx Network Design", desc: "Complete FTTH, FTTB, FTTC, and FTTN passive optical network engineering." },
                { icon: "🏗️", title: "ISP Network Architecture", desc: "End-to-end ISP network design for fiber, HFC, and fixed wireless platforms." },
                { icon: "📡", title: "RF Network Engineering", desc: "End-to-end RF network design including frequency planning, coverage analysis, and propagation modeling for cellular and broadband wireless networks." },
                { icon: "🗼", title: "Wireless Site Design", desc: "Complete wireless site design including antenna placement, equipment layout, grounding systems, and tower mount configurations." },
                { icon: "🔬", title: "Tower Structural Analysis", desc: "Structural analysis for wireless towers, monopoles, and rooftops to TIA-222 and ANSI standards." },
                { icon: "📶", title: "5G & CBRS Network Planning", desc: "5G NR and CBRS network planning including spectrum coordination, coverage design, and deployment strategy for private and public wireless networks." },
              ].map(function(s) {
                return (
                  <div key={s.title} style={{ background: "#f4f8ff", borderRadius: 14, padding: "24px", border: "1px solid #e4ecf8" }}>
                    <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 18, fontWeight: 700, color: "#0c1e4a", marginBottom: 8 }}>{s.title}</div>
                    <div style={{ fontSize: 14, color: "#60748b", lineHeight: 1.7 }}>{s.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Serviquent */}
          <div style={{ marginBottom: 64 }}>
            <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontWeight: 700, color: "#0055e9", marginBottom: 14 }}>Why Serviquent</div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 800, color: "#0c1e4a", marginBottom: 24, letterSpacing: -0.5 }}>The Serviquent Standard</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
              {[
                { icon: "🛰️", t: "GIS-First Approach", d: "Every network design is grounded in verified geospatial data — integrating parcel records, utility easements, terrain models, and address-level demand analysis." },
                { icon: "📐", t: "NESC & GO 95 Compliant", d: "All engineering work is produced in strict conformance with NESC, GO 95, NEC, FCC Part 1, and utility-specific attachment standards." },
                { icon: "⚡", t: "Rapid Scaling", d: "Whether a 50-pole make-ready or a 500-mile statewide fiber build, Serviquent scales engineering resources without compromising quality." },
                { icon: "🤝", t: "Full Lifecycle Partner", d: "From initial feasibility through construction drawings, permitting, field support, and final as-built record packages — one partner, full lifecycle." },
              ].map(function(f) {
                return (
                  <div key={f.t} style={{ background: "#f4f8ff", borderRadius: 14, padding: "24px", border: "1px solid #e4ecf8" }}>
                    <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 18, fontWeight: 700, color: "#0c1e4a", marginBottom: 8 }}>{f.t}</div>
                    <div style={{ fontSize: 14, color: "#60748b", lineHeight: 1.7 }}>{f.d}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div style={{ background: "linear-gradient(135deg, #010c22 0%, #0055e9 100%)", borderRadius: 20, padding: "56px 48px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 800, color: "#fff", marginBottom: 16 }}>Ready to Work With Us?</h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, lineHeight: 1.8, maxWidth: 600, margin: "0 auto 32px" }}>Tell us about your project and our engineering team will respond within one business day.</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="mailto:info@serviquent.com" style={{ background: "#fff", color: "#0055e9", padding: "14px 32px", borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>📧 info@serviquent.com</a>
              <button onClick={function() { setQuoteOpen(true); }} style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)", padding: "14px 32px", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "'Outfit', sans-serif" }}>Get a Quote →</button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: "#010c22", padding: "32px 72px", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>© 2026 <a href="/" style={{ color: "#38d9ff", textDecoration: "none", fontWeight: 600 }}>Serviquent Prime Solutions</a> · All Rights Reserved · Cheyenne, Wyoming USA</p>
        </footer>
      </div>
    </>
  );
}