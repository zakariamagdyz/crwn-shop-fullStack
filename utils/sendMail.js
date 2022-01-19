const nodemailer = require("nodemailer");

module.exports = async ({ email, subject, message }) => {
  let transporter;

  if (process.env.NODE_ENV === "production") {
    transporter = nodemailer.createTransport({
      service: "Gmil",
      auth: {
        email: "zakariaamagdy@gmail.com",
        password: "pass",
      },

      tls: { rejectUnauthorized: false },
    });
  } else {
    transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "clifford.oconnell60@ethereal.email",
        pass: "KjQvfacCCddptzBYQA",
      },
      tls: { rejectUnauthorized: false },
    });
  }

  // you must emplement email in < email >
  const mailOptions = {
    from: "<crwn-shop@ymail.com <ZM>",
    to: email,
    subject,
    text: message,
  };

  await transporter.sendMail(mailOptions);
};
