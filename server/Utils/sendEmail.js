import nodemailer from "nodemailer";

// Endpoint for sending OTP
export const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMPT_EMAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.SMPT_EMAIL,
    to: options.email,
    subject: options.subject,
    text: options.text,
  };

  await transporter.sendMail(mailOptions);
};

export const sendHtmlEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMPT_EMAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.SMPT_EMAIL,
    to: options.email,
    subject: options.subject,
    html: options.message,
    attachments: options.attachments || null,
  };

  await transporter.sendMail(mailOptions);
};
