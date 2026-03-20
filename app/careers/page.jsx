"use client";

import { useState, useEffect } from "react";

export default function Careers() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", position: "", experience: "", message: "", resume: null });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(function() {
    function checkMobile() { setIsMobile(window.innerWidth <= 768); }
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return function() { window.removeEventListener("resize", checkMobile); };
  }, []);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  function handleFile(e) {
    setForm(function(f) { return Object.assign({}, f, { resume: e.target.files[0] }); });
  }

  async function submit() {
    if (!form.name || !form.email || !form.resume) {
      setError("Please fill in your name, email and attach your resume.");
      return;
    }
    setSending(true);
    setError("");
    try {
      const formData = new FormData();
      Object.keys(form).forEach(function(k) {
        if (form[k]) formData.append(k, form[k]);
      });
      const res = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        setForm({ name: "", email: "", phone: "", position: "", experience: "", message: "", resume: null });
      } else {
        setError("Something went wrong. Please email us directly at career@serviquent.com");
      }
    } catch (e) {
      setError("Network error. Please try again or email career@serviquent.com");
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
          <img src="https://i.ibb.co/RT8wXLXt/serviquent-logo.png" alt="Serviquent" style={{ height: 40 }} />
        </a>
        <a href="/" style={{ background: "#0055e9", color: "#fff", padding: "10px 22px", borderRadius: 9, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Back to Website</a>
      </nav>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #010c22 0%, #0a2266 100%)", padding: isMobile ? "60px 20px" : "80px 48px", textAlign: "center" }}>
        <div style={{ fontSize: 11, color: "#38d9ff", letterSpacing: 3, textTransform: "uppercase", fontWeight: 700, marginBottom: 16 }}>Join Our Team</div>
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, color: "#fff", margin: "0 0 20px", letterSpacing: -1 }}>
          Careers at Serviquent
        </h1>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, lineHeight: 1.8, maxWidth: 600, margin: "0 auto 32px" }}>
          Join a team of passionate telecom engineers building the infrastructure that powers modern fiber networks across the United States.
        </p>
        <a href="mailto:career@serviquent.com" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(56,217,255,0.1)", border: "1px solid rgba(56,217,255,0.3)", borderRadius: 100, padding: "10px 24px", color: "#38d9ff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
          📧 career@serviquent.com
        </a>
      </div>

      {/* Open Positions */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: isMobile ? "40px 16px 0" : "60px 24px 0" }}>
        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 36, fontWeight: 800, color: "#0c1e4a", marginBottom: 8 }}>Open Positions</h2>
        <p style={{ color: "#60748b", fontSize: 15, marginBottom: 32 }}>We&apos;re always looking for talented engineers to join our growing team.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16, marginBottom: 60 }}>
          {[
            { title: "OSP Fiber Engineer", type: "Full Time", location: "Remote / USA" },
            { title: "GIS Network Analyst", type: "Full Time", location: "Remote / USA" },
            { title: "Pole Loading Engineer", type: "Full Time", location: "Remote / USA" },
            { title: "FTTx Design Engineer", type: "Full Time", location: "Remote / USA" },
            { title: "Permitting Coordinator", type: "Full Time", location: "Remote / USA" },
            { title: "Project Manager", type: "Full Time", location: "Remote / USA" },
          ].map(function(job) {
            return (
              <div key={job.title} style={{ background: "#fff", borderRadius: 14, padding: "24px", border: "1.5px solid #e4ecf8", transition: "all 0.2s" }}>
                <div style={{ fontSize: 11, color: "#0055e9", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>{job.type}</div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 700, color: "#0c1e4a", margin: "0 0 8px" }}>{job.title}</h3>
                <div style={{ fontSize: 13, color: "#60748b" }}>📍 {job.location}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Application Form */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: isMobile ? "0 16px 60px" : "0 24px 80px" }}>
        <div style={{ background: "#fff", borderRadius: 20, padding: isMobile ? "24px 20px" : "48px", border: "1.5px solid #e4ecf8", boxShadow: "0 8px 40px rgba(0,85,233,0.08)" }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 36, fontWeight: 800, color: "#0c1e4a", marginBottom: 8 }}>Apply Now</h2>
          <p style={{ color: "#60748b", fontSize: 15, marginBottom: 36 }}>Fill in the form below and attach your resume. We&apos;ll get back to you within 2-3 business days.</p>

          {sent ? (
            <div style={{ textAlign: "center", padding: "48px 0" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 28, fontWeight: 800, color: "#0c1e4a", marginBottom: 12 }}>Application Submitted!</h3>
              <p style={{ color: "#60748b", fontSize: 15 }}>Thank you for applying! We&apos;ll review your application and get back to you within 2-3 business days.</p>
            </div>
          ) : (
            <div>
              {/* Row 1 */}
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 700, color: "#60748b", letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 8 }}>Full Name *</label>
                  <input value={form.name} onChange={function(e) { setForm(function(f) { return Object.assign({}, f, { name: e.target.value }); }); }} placeholder="John Smith" style={{ width: "100%", padding: "13px 16px", borderRadius: 10, border: "1.5px solid #e4ecf8", fontSize: 14, outline: "none", fontFamily: "'Outfit', sans-serif", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 700, color: "#60748b", letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 8 }}>Email Address *</label>
                  <input value={form.email} onChange={function(e) { setForm(function(f) { return Object.assign({}, f, { email: e.target.value }); }); }} placeholder="john@example.com" style={{ width: "100%", padding: "13px 16px", borderRadius: 10, border: "1.5px solid #e4ecf8", fontSize: 14, outline: "none", fontFamily: "'Outfit', sans-serif", boxSizing: "border-box" }} />
                </div>
              </div>

              {/* Row 2 */}
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 700, color: "#60748b", letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 8 }}>Phone Number</label>
                  <input value={form.phone} onChange={function(e) { setForm(function(f) { return Object.assign({}, f, { phone: e.target.value }); }); }} placeholder="+1 (000) 000-0000" style={{ width: "100%", padding: "13px 16px", borderRadius: 10, border: "1.5px solid #e4ecf8", fontSize: 14, outline: "none", fontFamily: "'Outfit', sans-serif", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 700, color: "#60748b", letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 8 }}>Position Applying For</label>
                  <select value={form.position} onChange={function(e) { setForm(function(f) { return Object.assign({}, f, { position: e.target.value }); }); }} style={{ width: "100%", padding: "13px 16px", borderRadius: 10, border: "1.5px solid #e4ecf8", fontSize: 14, outline: "none", fontFamily: "'Outfit', sans-serif", background: "#fff", boxSizing: "border-box" }}>
                    <option value="">Select a position</option>
                    <option>OSP Fiber Engineer</option>
                    <option>GIS Network Analyst</option>
                    <option>Pole Loading Engineer</option>
                    <option>FTTx Design Engineer</option>
                    <option>Permitting Coordinator</option>
                    <option>Project Manager</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Row 3 */}
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#60748b", letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 8 }}>Years of Experience</label>
                <select value={form.experience} onChange={function(e) { setForm(function(f) { return Object.assign({}, f, { experience: e.target.value }); }); }} style={{ width: "100%", padding: "13px 16px", borderRadius: 10, border: "1.5px solid #e4ecf8", fontSize: 14, outline: "none", fontFamily: "'Outfit', sans-serif", background: "#fff", boxSizing: "border-box" }}>
                  <option value="">Select experience</option>
                  <option>0-1 years (Entry Level)</option>
                  <option>1-3 years</option>
                  <option>3-5 years</option>
                  <option>5-10 years</option>
                  <option>10+ years</option>
                </select>
              </div>

              {/* Message */}
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#60748b", letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 8 }}>Cover Letter / Message</label>
                <textarea value={form.message} onChange={function(e) { setForm(function(f) { return Object.assign({}, f, { message: e.target.value }); }); }} placeholder="Tell us about yourself and why you want to join Serviquent..." rows={5} style={{ width: "100%", padding: "13px 16px", borderRadius: 10, border: "1.5px solid #e4ecf8", fontSize: 14, outline: "none", fontFamily: "'Outfit', sans-serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>

              {/* Resume Upload */}
              <div style={{ marginBottom: 24 }}>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#60748b", letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 8 }}>Attach Resume * (PDF, DOC, DOCX)</label>
                <div style={{ border: "2px dashed #ccd9f8", borderRadius: 10, padding: "24px", textAlign: "center", background: "#f4f8ff" }}>
                  <input type="file" accept=".pdf,.doc,.docx" onChange={handleFile} style={{ display: "none" }} id="resume-upload" />
                  <label htmlFor="resume-upload" style={{ cursor: "pointer" }}>
                    <div style={{ fontSize: 32, marginBottom: 8 }}>📎</div>
                    <div style={{ fontSize: 14, color: "#0055e9", fontWeight: 600 }}>
                      {form.resume ? form.resume.name : "Click to upload your resume"}
                    </div>
                    <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>PDF, DOC or DOCX up to 10MB</div>
                  </label>
                </div>
              </div>

              {error && (
                <div style={{ marginBottom: 16, padding: "11px 16px", background: "#fff0f0", border: "1.5px solid #ffcdd2", borderRadius: 9, color: "#c62828", fontSize: 13 }}>
                  {error}
                </div>
              )}

              <button onClick={submit} disabled={sending} style={{ width: "100%", background: sending ? "#6b9eff" : "#0055e9", color: "#fff", border: "none", padding: 15, borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: sending ? "not-allowed" : "pointer", fontFamily: "'Outfit', sans-serif", boxShadow: "0 6px 24px rgba(0,85,233,0.28)" }}>
                {sending ? "Submitting..." : "Submit Application →"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}