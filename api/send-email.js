const nodemailer = require('nodemailer');

// Simple in-memory rate limiting map for warm instances
const rateLimitMap = new Map();
const LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // Max 3 requests per minute per IP

function isRateLimited(ip) {
  const now = Date.now();
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, [now]);
    return false;
  }
  const timestamps = rateLimitMap.get(ip).filter(t => now - t < LIMIT_WINDOW);
  if (timestamps.length >= MAX_REQUESTS) {
    return true;
  }
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return false;
}

// HTML Escaping helper to prevent HTML injection in emails
function escapeHtml(unsafe) {
  if (typeof unsafe !== 'string') return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

module.exports = async (req, res) => {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // CORS Preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  // Basic Abuse Protection (Rate Limiting)
  const clientIp = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.socket.remoteAddress || 'unknown';
  if (isRateLimited(clientIp)) {
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please try again later.'
    });
  }

  const { from_name, email, phone, subject, message } = req.body;

  // Input Validation
  if (!from_name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: Name, Email, Subject, and Message are required.'
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid email address format.'
    });
  }

  // Length limits to prevent buffer overflow/abuse
  if (from_name.length > 100 || subject.length > 200 || message.length > 5000 || (phone && phone.length > 30)) {
    return res.status(400).json({
      success: false,
      error: 'Input fields exceed maximum length limits.'
    });
  }

  // Escape HTML inputs for safe injection in email template
  const safeName = escapeHtml(from_name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || '');
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message);

  const firstLetter = safeName.charAt(0).toUpperCase();

  // SMTP Transporter Configuration
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASS;

  if (!gmailUser || !gmailPass) {
    console.error('❌ GMAIL_USER or GMAIL_APP_PASS is missing in environment variables.');
    return res.status(500).json({
      success: false,
      error: 'Email service configuration error. Please try again later.'
    });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: gmailUser,
      pass: gmailPass
    }
  });

  const mailOptions = {
    from: `"${safeName}" <${gmailUser}>`,
    replyTo: safeEmail,
    to: gmailUser,
    subject: `💼 Portfolio: "${safeSubject}" from ${safeName}`,
    text: `Name: ${safeName}\nEmail: ${safeEmail}\nPhone: ${safePhone || 'N/A'}\nSubject: ${safeSubject}\n\nMessage:\n${message}`,
    html: `
      <div style="background-color: #0b0f19; padding: 50px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #111827; border: 1px solid #1f2937; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);">
          
          <!-- Top Accent Bar -->
          <div style="height: 6px; background: linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);"></div>
          
          <div style="padding: 40px 30px;">
            <!-- Header Section -->
            <div style="display: flex; align-items: center; margin-bottom: 30px;">
              <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%); border-radius: 50%; display: inline-block; text-align: center; line-height: 50px; color: #ffffff; font-size: 22px; font-weight: 700; margin-right: 15px; vertical-align: middle; box-shadow: 0 4px 10px rgba(99, 102, 241, 0.3);">
                ${firstLetter}
              </div>
              <div style="display: inline-block; vertical-align: middle;">
                <span style="display: block; font-size: 12px; font-weight: 600; color: #6366f1; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 2px;">New Message Received</span>
                <span style="display: block; font-size: 20px; font-weight: 700; color: #f3f4f6; letter-spacing: -0.5px;">${safeName}</span>
              </div>
            </div>

            <!-- Details Card -->
            <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
              <h3 style="font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #9ca3af; margin-top: 0; margin-bottom: 20px; border-bottom: 1px solid #374151; padding-bottom: 10px;">Submission Details</h3>
              
              <div style="margin-bottom: 15px;">
                <span style="display: block; font-size: 11px; color: #9ca3af; text-transform: uppercase; margin-bottom: 4px;">Email Address</span>
                <a href="mailto:${safeEmail}" style="font-size: 15px; color: #818cf8; text-decoration: none; font-weight: 500;">${safeEmail}</a>
              </div>
              
              <div style="margin-bottom: 15px;">
                <span style="display: block; font-size: 11px; color: #9ca3af; text-transform: uppercase; margin-bottom: 4px;">Phone Number</span>
                <span style="font-size: 15px; color: #e5e7eb; font-weight: 500;">${safePhone || 'Not Provided'}</span>
              </div>
              
              <div>
                <span style="display: block; font-size: 11px; color: #9ca3af; text-transform: uppercase; margin-bottom: 4px;">Subject</span>
                <span style="font-size: 15px; color: #e5e7eb; font-weight: 600;">${safeSubject}</span>
              </div>
            </div>

            <!-- Message Card -->
            <div style="margin-bottom: 35px;">
              <h3 style="font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #9ca3af; margin-top: 0; margin-bottom: 15px;">Message Content</h3>
              <div style="background-color: #1f2937; border-left: 4px solid #a855f7; border-radius: 4px 12px 12px 4px; padding: 25px; line-height: 1.7; color: #d1d5db; font-size: 15px; white-space: pre-wrap; font-style: italic;">"${safeMessage}"</div>
            </div>

            <!-- Reply Button -->
            <div style="text-align: center;">
              <a href="mailto:${safeEmail}?subject=Re: ${encodeURIComponent(safeSubject)}" style="background: linear-gradient(90deg, #6366f1 0%, #a855f7 100%); color: #ffffff; padding: 14px 35px; text-decoration: none; font-weight: 700; font-size: 14px; border-radius: 30px; display: inline-block; box-shadow: 0 4px 15px rgba(168, 85, 247, 0.4); text-transform: uppercase; letter-spacing: 1px;">
                Quick Reply
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #0b0f19; padding: 25px; text-align: center; border-top: 1px solid #1f2937; font-size: 11px; color: #6b7280; letter-spacing: 0.5px;">
            <p style="margin: 0 0 5px 0;">This email was sent securely via your portfolio SMTP server.</p>
            <p style="margin: 0;">&copy; 2026 Tanvir Shaharia. All rights reserved.</p>
          </div>
        </div>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`✉️ Email successfully delivered to GMAIL_USER. MessageID: ${info.messageId}`);
    return res.status(200).json({
      success: true,
      message: 'Email delivered successfully via Gmail SMTP!'
    });
  } catch (error) {
    console.error('❌ Gmail SMTP Delivery Error:', error);
    // Generic message to client to hide sensitive setup/auth errors
    return res.status(500).json({
      success: false,
      error: 'Message delivery failed. Please try again later.'
    });
  }
};
