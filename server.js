require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.SERVER_PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Gmail SMTP Transporter Configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // TLS/SSL
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASS
  }
});

// Verify SMTP connection configuration on server startup
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Gmail SMTP Verification Failed:', error.message);
  } else {
    console.log('✅ Gmail SMTP Server is ready to deliver messages!');
  }
});

// API Route for sending emails via Gmail SMTP
app.post('/api/send-email', async (req, res) => {
  const { from_name, email, phone, subject, message } = req.body;

  // Basic Validation
  if (!from_name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: from_name, email, subject, or message'
    });
  }

  const firstLetter = from_name.charAt(0).toUpperCase();

  const mailOptions = {
    from: `"${from_name}" <${process.env.GMAIL_USER}>`,
    replyTo: email,
    to: process.env.GMAIL_USER,
    subject: `💼 Portfolio: "${subject}" from ${from_name}`,
    text: `Name: ${from_name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nSubject: ${subject}\n\nMessage:\n${message}`,
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
                <span style="display: block; font-size: 20px; font-weight: 700; color: #f3f4f6; letter-spacing: -0.5px;">${from_name}</span>
              </div>
            </div>

            <!-- Details Card -->
            <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
              <h3 style="font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #9ca3af; margin-top: 0; margin-bottom: 20px; border-bottom: 1px solid #374151; padding-bottom: 10px;">Submission Details</h3>
              
              <div style="margin-bottom: 15px;">
                <span style="display: block; font-size: 11px; color: #9ca3af; text-transform: uppercase; margin-bottom: 4px;">Email Address</span>
                <a href="mailto:${email}" style="font-size: 15px; color: #818cf8; text-decoration: none; font-weight: 500;">${email}</a>
              </div>
              
              <div style="margin-bottom: 15px;">
                <span style="display: block; font-size: 11px; color: #9ca3af; text-transform: uppercase; margin-bottom: 4px;">Phone Number</span>
                <span style="font-size: 15px; color: #e5e7eb; font-weight: 500;">${phone || 'Not Provided'}</span>
              </div>
              
              <div>
                <span style="display: block; font-size: 11px; color: #9ca3af; text-transform: uppercase; margin-bottom: 4px;">Subject</span>
                <span style="font-size: 15px; color: #e5e7eb; font-weight: 600;">${subject}</span>
              </div>
            </div>

            <!-- Message Card -->
            <div style="margin-bottom: 35px;">
              <h3 style="font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #9ca3af; margin-top: 0; margin-bottom: 15px;">Message Content</h3>
              <div style="background-color: #1f2937; border-left: 4px solid #a855f7; border-radius: 4px 12px 12px 4px; padding: 25px; line-height: 1.7; color: #d1d5db; font-size: 15px; white-space: pre-wrap; font-style: italic;">"${message}"</div>
            </div>

            <!-- Reply Button -->
            <div style="text-align: center;">
              <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="background: linear-gradient(90deg, #6366f1 0%, #a855f7 100%); color: #ffffff; padding: 14px 35px; text-decoration: none; font-weight: 700; font-size: 14px; border-radius: 30px; display: inline-block; box-shadow: 0 4px 15px rgba(168, 85, 247, 0.4); text-transform: uppercase; letter-spacing: 1px;">
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
    console.log(`✉️ Email successfully delivered to ${process.env.GMAIL_USER}. MessageID: ${info.messageId}`);
    return res.status(200).json({
      success: true,
      message: 'Email delivered successfully via Gmail SMTP!',
      messageId: info.messageId
    });
  } catch (error) {
    console.error('❌ Gmail SMTP Delivery Error:', error.message);
    return res.status(500).json({
      success: false,
      error: `Gmail SMTP Delivery Error: ${error.message}`
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Gmail SMTP API Server running on http://localhost:${PORT}`);
});
