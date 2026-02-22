const nodemailer = require('nodemailer');

// Create reusable transporter object using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'info@summitcorehomes.com',
    pass: process.env.EMAIL_PASS || 'ozglcfivsslygxzg',
  },
});

// Verify connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Email transporter error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Function to send email notification
const sendContactNotification = async (submission, imagePath = null) => {
  const { name, email, phone, streetAddress, city, state, zipCode, serviceType, message } = submission;

  // Format service type for display
  const serviceTypeMap = {
    kitchen: 'Kitchen Renovation',
    bathroom: 'Bathroom Remodeling',
    flooring: 'Flooring Installation',
    multiple: 'Multiple Services',
    other: 'Other',
  };

  const formattedServiceType = serviceTypeMap[serviceType] || serviceType;

  const mailOptions = {
    from: `"Summit Core Website" <${process.env.EMAIL_USER || 'info@summitcorehomes.com'}>`,
    to: process.env.EMAIL_USER || 'info@summitcorehomes.com',
    subject: `New Contact Form Submission - ${formattedServiceType}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1f2937; margin-bottom: 5px; display: block; }
            .value { color: #4b5563; padding: 10px; background: white; border-radius: 4px; border: 1px solid #e5e7eb; }
            .footer { background: #f3f4f6; padding: 15px; text-align: center; color: #6b7280; font-size: 12px; border-radius: 0 0 8px 8px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">New Contact Form Submission</h2>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">Summit Core Website</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <span class="label">Phone:</span>
                <div class="value">${phone}</div>
              </div>
              <div class="field">
                <span class="label">Address:</span>
                <div class="value">${streetAddress}<br>${city}, ${state} ${zipCode}</div>
              </div>
              <div class="field">
                <span class="label">Service Type:</span>
                <div class="value">${formattedServiceType}</div>
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
              <div class="field">
                <span class="label">Submitted At:</span>
                <div class="value">${new Date(submission.createdAt || Date.now()).toLocaleString()}</div>
              </div>
              ${imagePath ? `
              <div class="field">
                <span class="label">Image Attached:</span>
                <div class="value">Yes - See attachment</div>
              </div>
              ` : ''}
            </div>
            <div class="footer">
              <p>This email was sent from the Summit Core contact form.</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
New Contact Form Submission - Summit Core

Name: ${name}
Email: ${email}
Phone: ${phone}
Address: ${streetAddress}, ${city}, ${state} ${zipCode}
Service Type: ${formattedServiceType}
Message: ${message}
Submitted At: ${new Date(submission.createdAt || Date.now()).toLocaleString()}
${imagePath ? 'Image: Attached' : ''}
    `,
    attachments: imagePath ? [
      {
        filename: imagePath,
        path: require('path').join(__dirname, '../uploads', imagePath),
      },
    ] : [],
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
};

module.exports = {
  transporter,
  sendContactNotification,
};

