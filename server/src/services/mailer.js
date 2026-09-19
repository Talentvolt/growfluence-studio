import nodemailer from 'nodemailer'
import { config } from '../config.js'

let transporter = null

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: config.smtp.host,
      port: config.smtp.port,
      secure: config.smtp.secure,
      auth: {
        user: config.smtp.user,
        pass: config.smtp.pass,
      },
    })
  }
  return transporter
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const ROWS = [
  ['Full Name', 'fullName'],
  ['Restaurant / Business', 'businessName'],
  ['Email', 'email'],
  ['Phone / WhatsApp', 'phone'],
  ['City', 'city'],
  ['Service Needed', 'service'],
  ['Budget Range', 'budget'],
]

function buildText(data) {
  const lines = ROWS.map(([label, key]) => `${label}: ${data[key] || '—'}`)
  return [...lines, '', 'Message:', data.message].join('\n')
}

function buildHtml(data) {
  const rows = ROWS.map(
    ([label, key]) => `
                <tr>
                  <td style="padding:10px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;font-weight:600;color:#4b5563;white-space:nowrap;vertical-align:top;">${escapeHtml(
                    label,
                  )}</td>
                  <td style="padding:10px 16px;border-bottom:1px solid #e5e7eb;font-size:14px;color:#111827;">${escapeHtml(
                    data[key] || '—',
                  )}</td>
                </tr>`,
  ).join('')

  return `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:24px;background-color:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background-color:#ffffff;border-radius:12px;overflow:hidden;">
      <tr>
        <td style="padding:24px 28px;background-color:#052e16;color:#ffffff;">
          <p style="margin:0;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#86efac;">Growfluence Studio</p>
          <h1 style="margin:8px 0 0;font-size:20px;font-weight:700;">New enquiry from ${escapeHtml(
            data.businessName,
          )}</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 12px 0;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${rows}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:20px 28px 28px;">
          <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#4b5563;">Message</p>
          <div style="padding:14px 16px;background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;font-size:14px;line-height:1.6;color:#111827;white-space:pre-wrap;">${escapeHtml(
            data.message,
          )}</div>
        </td>
      </tr>
      <tr>
        <td style="padding:0 28px 28px;">
          <a href="mailto:${escapeHtml(
            data.email,
          )}" style="display:inline-block;padding:11px 20px;background-color:#16a34a;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;border-radius:9999px;">Reply to ${escapeHtml(
            data.fullName,
          )}</a>
        </td>
      </tr>
    </table>
  </body>
</html>`
}

/**
 * Sends the formatted enquiry email to the studio inbox.
 * Reply-To is set to the customer so the team can respond directly.
 */
export async function sendContactEmail(data) {
  await getTransporter().sendMail({
    from: config.mail.from,
    to: config.mail.to,
    replyTo: data.email,
    subject: `New enquiry from ${data.businessName} — ${data.fullName}`,
    text: buildText(data),
    html: buildHtml(data),
  })
}

/** Verifies SMTP credentials/connectivity. Resolves when the connection is usable. */
export async function verifyMailer() {
  await getTransporter().verify()
}
