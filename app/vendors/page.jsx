"use client";


import { useState, useEffect } from "react";

export default function Vendors() {
  const [isMobile, setIsMobile] = useState(false);
  const [form, setForm] = useState({ company: "", contact: "", email: "", phone: "", discipline: "", states: "", team: "", certs: "", experience: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(function() {
    function checkMobile() { setIsMobile(window.innerWidth <= 768); }
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return function() { window.removeEventListener("resize", checkMobile); };
  }, []);

  async function submit() {
    if (!form.company || !form.email || !form.discipline || !form.experience) {
      setError("Please fill in all required fields.");
      return;
    }
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first: form.contact,
          last: "",
          company: form.company,
          phone: form.phone,
          email: form.email,
          subject: "Vendor Partnership Application — " + form.discipline,
          service: form.discipline,
          message: `Vendor Application\n\nCompany: ${form.company}\nContact: ${form.contact}\nDiscipline: ${form.discipline}\nStates: ${form.states}\nTeam Size: ${form.team}\nCertifications: ${form.certs}\n\nExperience:\n${form.experience}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        setForm({ company: "", contact: "", email: "", phone: "", discipline: "", states: "", team: "", certs: "", experience: "" });
      } else {
        setError("Something went wrong. Please email us at info@serviquent.com");
      }
    } catch (e) {
      setError("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  }

  const inp = { width: "100%", padding: "12px 14px", borderRadius: 9, border: "1.5px solid #e4ecf8", fontSize: 14, outline: "none", fontFamily: "'Outfit', sans-serif", boxSizing: "border-box", background: "#fff" };

  const disciplines = [
    { icon: "📡", title: "OSP Fiber Engineering", tags: ["FTTH/FTTB Design", "HLD / LLD", "PON Architecture", "AutoCAD"], desc: "End-to-end outside plant fiber design including aerial, underground, and hybrid network configurations. We need engineers who can produce carrier-grade packages that go directly to build crews without rework." },
    { icon: "🏗️", title: "Pole Loading Analysis", tags: ["O-Calc Pro", "SPIDAcalc", "NESC", "Make-Ready"], desc: "NESC-compliant structural analysis, O-Calc Pro or SPIDAcalc output, make-ready engineering, and joint-use attachment applications. Volume ranges from 200 to 10,000+ poles per engagement." },
    { icon: "🗺️", title: "GIS & CAD Design", tags: ["ArcGIS", "QGIS", "AutoCAD", "MicroStation"], desc: "Route design, fiber network mapping, plan sheet production, splice diagrams, and GIS database management. Clients include Tier 1 carriers and rural BEAD ISPs — detailed templates provided." },
    { icon: "📍", title: "Field Survey & Strand Mapping", tags: ["Katapult", "GPS Survey", "Fulcrum", "Strand Mapping"], desc: "GPS pole surveys, aerial and underground plant assessment, strand mapping, and mobile GIS data collection. Multi-state crew coverage is a strong advantage." },
    { icon: "📋", title: "Permitting & ROW", tags: ["ROW Permitting", "Railroad Crossings", "BEAD", "Municipal"], desc: "Municipal, railroad, and utility right-of-way permitting. Permit application preparation, agency follow-up, and encroachment agreement support." },
    { icon: "📁", title: "As-Built Documentation", tags: ["As-Built GIS", "BEAD Closeout", "Deviation Logs", "Photo Docs"], desc: "Post-construction GIS updates, deviation log preparation, photo documentation sets, and BEAD closeout documentation packages." },
  ];

  const steps = [
    { n: "01", title: "Submit Application", desc: "Fill out the form below with your firm details, service area, disciplines, tool certifications, and recent telecom project experience. Takes under 5 minutes.", sub: "↓ 1–2 business day response" },
    { n: "02", title: "Technical Qualification", desc: "We review your credentials, request sample deliverables for your discipline, and verify software proficiency. We evaluate output quality against carrier-grade standards.", sub: "↓ 3–5 business days" },
    { n: "03", title: "Trial Engagement", desc: "Qualified vendors are assigned a contained scope on an active project — a paid engagement. We evaluate output quality, turnaround, and communication.", sub: "↓ Paid trial scope" },
    { n: "04", title: "Onboarding & Pipeline Access", desc: "Vendors who pass the trial receive full onboarding: MSA execution, client-specific standards documentation, QC checklists, and access to our active project pipeline.", sub: "✓ Active vendor status" },
  ];

  const faqs = [
    { q: "What types of vendors does Serviquent partner with?", a: "We partner with OSP engineering firms, CAD/GIS design teams, field survey crews, permitting specialists, pole loading analysis firms, and as-built documentation providers across the United States." },
    { q: "Does Serviquent work with small firms and independent operators?", a: "Yes. We work with firms of all sizes — from 2-person CAD shops to multi-state field crews. Scale matters less than QC consistency, tool compatibility, and the ability to follow Serviquent's delivery standards." },
    { q: "What tools and software do vendors need?", a: "Requirements vary by discipline. CAD/GIS vendors should be proficient in AutoCAD, ArcGIS, or QGIS. Pole loading vendors must be certified in O-Calc Pro or SPIDAcalc. Field survey vendors should work in Katapult or comparable mobile GIS platforms." },
    { q: "How long does vendor qualification take?", a: "Most qualified vendors complete onboarding within 2 weeks of initial contact. The process includes a credential review (1–2 days), sample deliverable evaluation (2–3 days), and a paid trial engagement on a contained scope." },
    { q: "Is there a cost to become a vendor?", a: "No. There is no cost to apply or become a vendor. The trial engagement is a paid scope — meaning you get paid for your work during the qualification process." },
    { q: "What projects will I work on?", a: "Primarily BEAD-funded state broadband programs, Tier 1 carrier engineering programs, and regional ISP deployments. Projects span FTTx design, OSP fiber engineering, pole loading, GIS, and permitting across the United States." },
  ];

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
          <a href="#apply" style={{ background: "#0055e9", color: "#fff", padding: "10px 22px", borderRadius: 9, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Apply to Partner</a>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #010c22 0%, #0a2266 100%)", padding: isMobile ? "60px 20px 48px" : "80px 80px 72px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -120, right: -120, width: 500, height: 500, borderRadius: "50%", background: "rgba(0,85,233,0.1)" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 300, height: 300, borderRadius: "50%", background: "rgba(56,217,255,0.06)" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(56,217,255,0.1)", border: "1px solid rgba(56,217,255,0.25)", borderRadius: 100, padding: "6px 18px", marginBottom: 24 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#38d9ff", display: "inline-block" }} />
            <span style={{ fontSize: 11, color: "#38d9ff", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>Vendor & Subcontractor Partnerships</span>
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: isMobile ? 44 : 68, fontWeight: 800, color: "#fff", margin: "0 0 20px", letterSpacing: -1, lineHeight: 1.05 }}>
            Build America&apos;s Fiber<br />
            <span style={{ color: "#38d9ff" }}>Network With Us</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: isMobile ? 14 : 17, lineHeight: 1.85, maxWidth: 620, marginBottom: 36 }}>
            Serviquent manages an active OSP engineering pipeline across the United States. We partner with qualified subcontractors who meet carrier-grade standards — and we treat them like partners, not line items.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#apply" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#0055e9", color: "#fff", padding: "14px 32px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none", boxShadow: "0 8px 32px rgba(0,85,233,0.4)" }}>Apply to Partner</a>
            <a href="#disciplines" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "14px 28px", borderRadius: 10, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>See What We Need →</a>
          </div>
          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)", gap: 16, marginTop: 52 }}>
            {[
              { n: "50", l: "Active States" },
              { n: "$42.5B", l: "BEAD Funding Active" },
              { n: "7+", l: "Engineering Disciplines" },
              { n: "24/7", l: "Vendor Support" },
            ].map(function(st) {
              return (
                <div key={st.l} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "20px 24px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 30, fontWeight: 800, color: "#38d9ff" }}>{st.n}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 4 }}>{st.l}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Partner */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: isMobile ? "56px 20px" : "80px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ fontSize: 11, color: "#0055e9", letterSpacing: 3, textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>Why Partner With Us</div>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: isMobile ? 32 : 46, fontWeight: 800, color: "#0c1e4a", letterSpacing: -0.5 }}>We Don&apos;t Treat Vendors Like Vendors</h2>
          <p style={{ color: "#60748b", fontSize: 15, lineHeight: 1.8, maxWidth: 580, margin: "12px auto 0" }}>Most firms hand you a SOW and disappear. We bring subcontractors into our workflow, our QC process, and our long-term project pipeline.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 20 }}>
          {[
            { icon: "📋", title: "Long-Term Program Work", desc: "We don't do one-off gigs. BEAD programs, carrier frameworks, and multi-state ISP rollouts run 18–36 months. Qualified vendors get consistent, repeating work.", tag: "Stable Pipeline" },
            { icon: "⚡", title: "Fast, Reliable Payment", desc: "We pay on agreed terms. No 90-day net games. If your work passes QC, payment follows. We've built relationships on that trust.", tag: "Net-30 Standard" },
            { icon: "🏆", title: "Tier 1 Carrier Access", desc: "Partnering with Serviquent opens access to AT&T, Verizon, Google Fiber, and Lumen engineering programs that require proven subcontractors.", tag: "Premium Projects" },
            { icon: "🛠️", title: "Clear SOWs, No Scope Creep", desc: "We define scope precisely before work starts — deliverable formats, coordinate systems, naming conventions, QC checklists. No ambiguity mid-project.", tag: "Defined Standards" },
            { icon: "📡", title: "Carrier-Grade Onboarding", desc: "We provide full onboarding documentation: client-specific standards, coordinate system requirements, deliverable templates, and QC checklists.", tag: "Full Support" },
            { icon: "🤝", title: "Real Relationships", desc: "Your point of contact is an engineer, not a procurement system. Vendors who perform get more volume, preferred scheduling, and direct referrals.", tag: "Performance Rewarded" },
          ].map(function(item) {
            return (
              <div key={item.title} style={{ background: "#fff", borderRadius: 16, padding: "28px 24px", border: "1.5px solid #e4ecf8", boxShadow: "0 4px 20px rgba(12,30,74,0.05)", transition: "all 0.3s" }}
                onMouseEnter={function(e) { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,85,233,0.1)"; e.currentTarget.style.borderColor = "#0055e9"; }}
                onMouseLeave={function(e) { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(12,30,74,0.05)"; e.currentTarget.style.borderColor = "#e4ecf8"; }}
              >
                <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 800, color: "#0c1e4a", marginBottom: 8 }}>{item.title}</h3>
                <p style={{ color: "#60748b", fontSize: 13, lineHeight: 1.7, marginBottom: 12 }}>{item.desc}</p>
                <span style={{ display: "inline-block", background: "#eef3ff", color: "#0055e9", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 100 }}>{item.tag}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Disciplines */}
      <div id="disciplines" style={{ background: "#fff", padding: isMobile ? "56px 20px" : "80px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ fontSize: 11, color: "#0055e9", letterSpacing: 3, textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>What We Source</div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: isMobile ? 32 : 46, fontWeight: 800, color: "#0c1e4a", letterSpacing: -0.5 }}>Disciplines We Partner In</h2>
            <p style={{ color: "#60748b", fontSize: 15, lineHeight: 1.8, maxWidth: 560, margin: "12px auto 0" }}>We work across the full OSP engineering lifecycle. Whether you specialize in one phase or cover the full stack, there&apos;s likely a fit in our pipeline.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 20 }}>
            {disciplines.map(function(d) {
              return (
                <div key={d.title} style={{ background: "#f4f8ff", borderRadius: 16, padding: "28px 28px", border: "1.5px solid #e4ecf8" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 14 }}>
                    <div style={{ fontSize: 32, flexShrink: 0 }}>{d.icon}</div>
                    <div>
                      <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 800, color: "#0c1e4a", margin: "0 0 8px" }}>{d.title}</h3>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {d.tags.map(function(t) {
                          return <span key={t} style={{ background: "#0055e9", color: "#fff", fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 100 }}>{t}</span>;
                        })}
                      </div>
                    </div>
                  </div>
                  <p style={{ color: "#60748b", fontSize: 13, lineHeight: 1.75, margin: 0 }}>{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div style={{ background: "#f4f8ff", padding: isMobile ? "56px 20px" : "80px 80px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ fontSize: 11, color: "#0055e9", letterSpacing: 3, textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>How It Works</div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: isMobile ? 32 : 46, fontWeight: 800, color: "#0c1e4a", letterSpacing: -0.5 }}>From Application to Active Work</h2>
            <p style={{ color: "#60748b", fontSize: 15, lineHeight: 1.8, maxWidth: 560, margin: "12px auto 0" }}>We move fast once we have what we need. Most qualified vendors are onboarded within two weeks of initial contact.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(4,1fr)", gap: 20 }}>
            {steps.map(function(st) {
              return (
                <div key={st.n} style={{ background: "#fff", borderRadius: 16, padding: "28px 22px", border: "1.5px solid #e4ecf8", position: "relative" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, #010c22, #0055e9)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, fontWeight: 800, color: "#38d9ff" }}>{st.n}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 18, fontWeight: 800, color: "#0c1e4a", marginBottom: 10 }}>{st.title}</h3>
                  <p style={{ color: "#60748b", fontSize: 12.5, lineHeight: 1.7, marginBottom: 14 }}>{st.desc}</p>
                  <div style={{ fontSize: 11, color: "#0055e9", fontWeight: 700 }}>{st.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Qualifications */}
      <div style={{ background: "#fff", padding: isMobile ? "56px 20px" : "80px 80px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, color: "#0055e9", letterSpacing: 3, textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>What We Look For</div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: isMobile ? 32 : 46, fontWeight: 800, color: "#0c1e4a", letterSpacing: -0.5 }}>Qualifications That Matter</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 24 }}>
            <div style={{ background: "#f4f8ff", borderRadius: 16, padding: "32px 28px", border: "1.5px solid #e4ecf8" }}>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 800, color: "#0c1e4a", marginBottom: 20 }}>Required for All Vendors</h3>
              {["Demonstrated experience on telecom or utility infrastructure projects", "Proficiency in the primary software tool for your discipline", "Documented QC process — not just &apos;we check our own work&apos;", "References from at least two prior telecom clients", "Ability to meet carrier-grade delivery timelines", "W-9 and standard subcontractor onboarding documentation"].map(function(item, i) {
                return (
                  <div key={i} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#0055e9", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <span style={{ fontSize: 10, color: "#fff", fontWeight: 700 }}>✓</span>
                    </div>
                    <span style={{ fontSize: 13, color: "#374569", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                );
              })}
            </div>
            <div style={{ background: "linear-gradient(135deg, #010c22, #0a2266)", borderRadius: 16, padding: "32px 28px" }}>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 20 }}>Advantages That Move You Up</h3>
              {["Prior experience on BEAD-funded or federal broadband programs", "Multi-state field coverage or design team capacity", "Existing familiarity with AT&T, Verizon, Lumen standards", "Proficiency in AT&T Aramis or Waldo platforms", "High volume capacity (100+ poles/day or 5+ miles/day)", "Staff PEs or licensed surveyors on team", "ISO or carrier-specific quality certification"].map(function(item, i) {
                return (
                  <div key={i} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(56,217,255,0.2)", border: "1px solid #38d9ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <span style={{ fontSize: 10, color: "#38d9ff", fontWeight: 700 }}>★</span>
                    </div>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div style={{ background: "#f4f8ff", padding: isMobile ? "56px 20px" : "80px 80px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, color: "#0055e9", letterSpacing: 3, textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>Common Questions</div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: isMobile ? 32 : 46, fontWeight: 800, color: "#0c1e4a", letterSpacing: -0.5 }}>Vendor FAQs</h2>
          </div>
          {faqs.map(function(faq, i) {
            return (
              <div key={i} style={{ background: "#fff", borderRadius: 14, marginBottom: 12, border: "1.5px solid " + (openFaq === i ? "#0055e9" : "#e4ecf8"), overflow: "hidden", transition: "border-color 0.2s" }}>
                <button onClick={function() { setOpenFaq(openFaq === i ? null : i); }} style={{ width: "100%", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, fontFamily: "'Outfit', sans-serif" }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: "#0c1e4a", textAlign: "left" }}>{faq.q}</span>
                  <span style={{ fontSize: 20, color: "#0055e9", flexShrink: 0, transform: openFaq === i ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.2s" }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px" }}>
                    <p style={{ color: "#60748b", fontSize: 14, lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Application Form */}
      <div id="apply" style={{ background: "#fff", padding: isMobile ? "56px 20px" : "80px 80px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, color: "#0055e9", letterSpacing: 3, textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>Get Started</div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: isMobile ? 32 : 46, fontWeight: 800, color: "#0c1e4a", letterSpacing: -0.5 }}>Apply to Partner With Serviquent</h2>
            <p style={{ color: "#60748b", fontSize: 15, lineHeight: 1.8, marginTop: 12 }}>Fill out the form below and our team will follow up within 1–2 business days.</p>
          </div>

          {sent ? (
            <div style={{ textAlign: "center", padding: "60px 0", background: "#f4f8ff", borderRadius: 20, border: "1.5px solid #e4ecf8" }}>
              <div style={{ fontSize: 64, marginBottom: 20 }}>🎉</div>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 32, fontWeight: 800, color: "#0c1e4a", marginBottom: 12 }}>Application Submitted!</h3>
              <p style={{ color: "#60748b", fontSize: 15 }}>Thank you for applying! Our vendor relations team will review your application and follow up within 1–2 business days.</p>
            </div>
          ) : (
            <div style={{ background: "#f4f8ff", borderRadius: 20, padding: isMobile ? "28px 20px" : "48px", border: "1.5px solid #e4ecf8" }}>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ fontSize: 11, color: "#60748b", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 7 }}>Company Name *</label>
                  <input value={form.company} onChange={function(e) { setForm(Object.assign({}, form, { company: e.target.value })); }} placeholder="Your Engineering Firm" style={inp} />
                </div>
                <div>
                  <label style={{ fontSize: 11, color: "#60748b", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 7 }}>Primary Contact Name *</label>
                  <input value={form.contact} onChange={function(e) { setForm(Object.assign({}, form, { contact: e.target.value })); }} placeholder="John Smith" style={inp} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ fontSize: 11, color: "#60748b", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 7 }}>Email Address *</label>
                  <input value={form.email} onChange={function(e) { setForm(Object.assign({}, form, { email: e.target.value })); }} placeholder="you@company.com" type="email" style={inp} />
                </div>
                <div>
                  <label style={{ fontSize: 11, color: "#60748b", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 7 }}>Phone Number</label>
                  <input value={form.phone} onChange={function(e) { setForm(Object.assign({}, form, { phone: e.target.value })); }} placeholder="+1 (000) 000-0000" style={inp} />
                </div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 11, color: "#60748b", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 7 }}>Primary Discipline *</label>
                <select value={form.discipline} onChange={function(e) { setForm(Object.assign({}, form, { discipline: e.target.value })); }} style={Object.assign({}, inp, { cursor: "pointer" })}>
                  <option value="">Select your specialty</option>
                  <option>OSP Engineering / FTTH Design</option>
                  <option>Pole Loading Analysis (O-Calc Pro / SPIDAcalc)</option>
                  <option>GIS / CAD Design</option>
                  <option>Field Survey & Strand Mapping</option>
                  <option>Permitting & ROW</option>
                  <option>As-Built Documentation</option>
                  <option>Multiple Disciplines</option>
                </select>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ fontSize: 11, color: "#60748b", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 7 }}>States You Cover *</label>
                  <input value={form.states} onChange={function(e) { setForm(Object.assign({}, form, { states: e.target.value })); }} placeholder="e.g. TX, CA, FL, NC" style={inp} />
                </div>
                <div>
                  <label style={{ fontSize: 11, color: "#60748b", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 7 }}>Team Size</label>
                  <select value={form.team} onChange={function(e) { setForm(Object.assign({}, form, { team: e.target.value })); }} style={Object.assign({}, inp, { cursor: "pointer" })}>
                    <option value="">Select range</option>
                    <option>1–5 people</option>
                    <option>6–20 people</option>
                    <option>21–50 people</option>
                    <option>51–100 people</option>
                    <option>100+ people</option>
                  </select>
                </div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 11, color: "#60748b", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 7 }}>Certifications (if any)</label>
                <input value={form.certs} onChange={function(e) { setForm(Object.assign({}, form, { certs: e.target.value })); }} placeholder="e.g. O-Calc Pro, ArcGIS, MBE, DBE" style={inp} />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontSize: 11, color: "#60748b", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 7 }}>Recent Telecom Project Experience *</label>
                <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 8 }}>This is the most important field. The more specific, the faster we can qualify you.</div>
                <textarea value={form.experience} onChange={function(e) { setForm(Object.assign({}, form, { experience: e.target.value })); }} placeholder="Describe your recent telecom engineering work — types of projects, clients, tools used, volumes handled, and any carrier-specific experience..." rows={5} style={Object.assign({}, inp, { resize: "vertical" })} />
              </div>
              {error && <div style={{ marginBottom: 16, padding: "12px 16px", background: "#fff0f0", border: "1.5px solid #ffcdd2", borderRadius: 9, color: "#c62828", fontSize: 13 }}>{error}</div>}
              <button onClick={submit} disabled={sending} style={{ width: "100%", background: sending ? "#6b9eff" : "#0055e9", color: "#fff", border: "none", padding: 16, borderRadius: 10, fontSize: 16, fontWeight: 700, cursor: sending ? "not-allowed" : "pointer", fontFamily: "'Outfit', sans-serif", boxShadow: "0 6px 24px rgba(0,85,233,0.28)" }}>
                {sending ? "Submitting..." : "Submit Vendor Application →"}
              </button>
              <p style={{ fontSize: 12, color: "#94a3b8", textAlign: "center", marginTop: 16 }}>Your information is used only for vendor qualification purposes. Questions? <a href="mailto:info@serviquent.com" style={{ color: "#0055e9" }}>info@serviquent.com</a></p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: "#060e1f", padding: "24px 48px", textAlign: "center" }}>
        <p style={{ color: "#4a6080", fontSize: 13, margin: 0 }}>
          © 2025 <a href="/" style={{ color: "#38d9ff", textDecoration: "none", fontWeight: 600 }}>Serviquent Prime Solutions</a> · All Rights Reserved · <a href="mailto:info@serviquent.com" style={{ color: "#38d9ff", textDecoration: "none" }}>info@serviquent.com</a>
        </p>
      </div>
    </div>
  );
}
