import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const position = formData.get("position");
    const experience = formData.get("experience");
    const message = formData.get("message");
    const resume = formData.get("resume");

    if (!name || !email) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Convert resume to base64
    let resumeAttachment = null;
    if (resume && resume.size > 0) {
      const buffer = await resume.arrayBuffer();
      const base64 = Buffer.from(buffer).toString("base64");
      resumeAttachment = {
        filename: resume.name,
        content: base64,
      };
    }

    const { data, error } = await resend.emails.send({
      from: "Serviquent Careers <noreply@serviquent.com>",
      to: ["career@serviquent.com"],
      replyTo: email,
      subject: `New Job Application: ${position || "General Application"} — ${name}`,
      attachments: resumeAttachment ? [resumeAttachment] : [],
      html: `
        <!DOCTYPE html>
        <html>
          <body style="margin:0; padding:0; background:#f4f8ff; font-family: 'Segoe UI', Arial, sans-serif;">
            
            <div style="background: linear-gradient(135deg, #010c22 0%, #0055e9 100%); padding: 40px 48px 32px;">
              <div style="font-size: 11px; color: #38d9ff; letter-spacing: 3px; text-transform: uppercase; font-weight: 700; margin-bottom: 8px;">New Job Application</div>
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 800;">Career Application</h1>
              <p style="margin: 8px 0 0; color: rgba(255,255,255,0.55); font-size: 13px;">Submitted via serviquent.com/careers</p>
            </div>

            <div style="padding: 40px 48px; background: #ffffff;">
              <div style="margin-bottom: 32px;">
                <div style="font-size: 11px; color: #0055e9; letter-spacing: 2px; text-transform: uppercase; font-weight: 700; margin-bottom: 16px; border-bottom: 2px solid #e4ecf8; padding-bottom: 8px;">Applicant Information</div>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f5ff; width: 160px;"><span style="font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Full Name</span></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f5ff;"><span style="font-size: 15px; color: #0c1e4a; font-weight: 600;">${name}</span></td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f5ff;"><span style="font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Email</span></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f5ff;"><a href="mailto:${email}" style="font-size: 15px; color: #0055e9; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f5ff;"><span style="font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Phone</span></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f5ff;"><span style="font-size: 15px; color: #0c1e4a;">${phone || "—"}</span></td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f5ff;"><span style="font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Position</span></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f5ff;"><span style="display: inline-block; background: #eef3ff; color: #0055e9; font-size: 13px; font-weight: 700; padding: 5px 14px; border-radius: 100px;">${position || "Not specified"}</span></td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0;"><span style="font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Experience</span></td>
                    <td style="padding: 10px 0;"><span style="font-size: 15px; color: #0c1e4a;">${experience || "—"}</span></td>
                  </tr>
                </table>
              </div>

              ${message ? `
              <div style="margin-bottom: 32px;">
                <div style="font-size: 11px; color: #0055e9; letter-spacing: 2px; text-transform: uppercase; font-weight: 700; margin-bottom: 16px; border-bottom: 2px solid #e4ecf8; padding-bottom: 8px;">Cover Letter</div>
                <div style="background: #f4f8ff; border-left: 4px solid #0055e9; border-radius: 0 12px 12px 0; padding: 20px 24px;">
                  <p style="margin: 0; font-size: 15px; color: #374569; line-height: 1.8;">${message.replace(/\n/g, "<br/>")}</p>
                </div>
              </div>
              ` : ""}

              <div style="background: linear-gradient(135deg, #010c22, #0a2266); border-radius: 14px; padding: 28px 32px; text-align: center;">
                <p style="margin: 0 0 16px; color: rgba(255,255,255,0.65); font-size: 13px;">${resumeAttachment ? "Resume attached to this email ✅" : "No resume attached"}</p>
                <a href="mailto:${email}?subject=Re: Your Application at Serviquent Prime Solutions"
                  style="display: inline-block; background: #0055e9; color: #ffffff; text-decoration: none; padding: 13px 32px; border-radius: 9px; font-size: 14px; font-weight: 600;">
                  Reply to ${name} →
                </a>
              </div>
            </div>

            <div style="padding: 24px 48px; background: #f4f8ff; border-top: 1px solid #e4ecf8; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8;">Submitted via <strong>serviquent.com/careers</strong></p>
            </div>

          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }

    return Response.json({ success: true, id: data.id });

  } catch (err) {
    console.error("Server error:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
