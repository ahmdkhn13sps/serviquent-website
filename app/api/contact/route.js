import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { first, last, email, subject, service, message } = body;

    // Validate required fields
    if (!first || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Serviquent Website <noreply@serviquent.com>",
      to: ["info@serviquent.com"],
      replyTo: email,
      subject: `New Quote Request: ${subject || service || "General Inquiry"}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>
          <body style="margin:0; padding:0; background:#f4f8ff; font-family: 'Segoe UI', Arial, sans-serif;">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #010c22 0%, #0055e9 100%); padding: 40px 48px 32px;">
              <div style="font-size: 11px; color: #38d9ff; letter-spacing: 3px; text-transform: uppercase; font-weight: 700; margin-bottom: 8px;">New Inquiry Received</div>
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">Quote Request</h1>
              <p style="margin: 8px 0 0; color: rgba(255,255,255,0.55); font-size: 13px;">Submitted via serviquent.com contact form</p>
            </div>

            <!-- Body -->
            <div style="padding: 40px 48px; background: #ffffff;">

              <!-- Client Info -->
              <div style="margin-bottom: 32px;">
                <div style="font-size: 11px; color: #0055e9; letter-spacing: 2px; text-transform: uppercase; font-weight: 700; margin-bottom: 16px; border-bottom: 2px solid #e4ecf8; padding-bottom: 8px;">Client Information</div>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f5ff; width: 160px;">
                      <span style="font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Full Name</span>
                    </td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f5ff;">
                      <span style="font-size: 15px; color: #0c1e4a; font-weight: 600;">${first} ${last || ""}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f5ff;">
                      <span style="font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Email</span>
                    </td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f5ff;">
                      <a href="mailto:${email}" style="font-size: 15px; color: #0055e9; text-decoration: none; font-weight: 500;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f5ff;">
                      <span style="font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Subject</span>
                    </td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f5ff;">
                      <span style="font-size: 15px; color: #0c1e4a;">${subject || "—"}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0;">
                      <span style="font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Service Required</span>
                    </td>
                    <td style="padding: 10px 0;">
                      <span style="display: inline-block; background: #eef3ff; color: #0055e9; font-size: 13px; font-weight: 700; padding: 5px 14px; border-radius: 100px; border: 1px solid #ccd9f8;">${service || "Not specified"}</span>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Message -->
              <div style="margin-bottom: 32px;">
                <div style="font-size: 11px; color: #0055e9; letter-spacing: 2px; text-transform: uppercase; font-weight: 700; margin-bottom: 16px; border-bottom: 2px solid #e4ecf8; padding-bottom: 8px;">Project Message</div>
                <div style="background: #f4f8ff; border-left: 4px solid #0055e9; border-radius: 0 12px 12px 0; padding: 20px 24px;">
                  <p style="margin: 0; font-size: 15px; color: #374569; line-height: 1.8;">${message.replace(/\n/g, "<br/>")}</p>
                </div>
              </div>

              <!-- Reply CTA -->
              <div style="background: linear-gradient(135deg, #010c22, #0a2266); border-radius: 14px; padding: 28px 32px; text-align: center;">
                <p style="margin: 0 0 16px; color: rgba(255,255,255,0.65); font-size: 13px;">Reply directly to this client</p>
                <a href="mailto:${email}?subject=Re: ${subject || "Your Quote Request — Serviquent Prime Solutions"}"
                  style="display: inline-block; background: #0055e9; color: #ffffff; text-decoration: none; padding: 13px 32px; border-radius: 9px; font-size: 14px; font-weight: 600; letter-spacing: 0.3px;">
                  Reply to ${first} →
                </a>
              </div>

            </div>

            <!-- Footer -->
            <div style="padding: 24px 48px; background: #f4f8ff; border-top: 1px solid #e4ecf8; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8;">This email was sent automatically from the contact form at <strong>serviquent.com</strong></p>
              <p style="margin: 6px 0 0; font-size: 12px; color: #94a3b8;">© 2025 Serviquent Prime Solutions · Dallas, TX · United States</p>
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
