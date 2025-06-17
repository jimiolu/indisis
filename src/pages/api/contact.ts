import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const { firstName, lastName, email, brandName, companySize, howCanWeHelp } =
    req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !brandName ||
    !companySize ||
    !howCanWeHelp
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Internal notification
    await resend.emails.send({
      from: "Indisis <no-reply@indisis.co>",
      to: "indisisnow@gmail.com",
      subject: `New Contact Form Submission`,
      html: `
        <h2>Contact Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Brand Name:</strong> ${brandName}</p>
        <p><strong>Company Size:</strong> ${companySize}</p>
        <p><strong>How Can We Help:</strong> ${howCanWeHelp}</p>
      `,
    });

    // Auto-reply
    await resend.emails.send({
      from: "Indisis <no-reply@indisis.co>",
      to: email,
      subject: `Thanks for contacting Indisis`,
      html: `
        <p>Hi ${firstName},</p>
        <p>Thank you for reaching out to Indisis. We’ve received your message and will respond shortly.</p>
        <p><em>– The Indisis Team</em></p>
      `,
    });

    return res.status(200).json({ message: "Success" });
  } catch (error: any) {
    console.error("Resend error:", error);
    return res.status(500).json({ message: "Email failed to send" });
  }
}

// import { NextApiRequest, NextApiResponse } from "next";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method !== "POST")
//     return res.status(405).json({ message: "Method Not Allowed" });

//   const { firstName, lastName, email, brandName, companySize, helpType } =
//     req.body;

//   if (
//     !firstName ||
//     !lastName ||
//     !email ||
//     !brandName ||
//     !companySize ||
//     !helpType
//   ) {
//     return res.status(400).json({ message: "Missing fields" });
//   }

//   try {
//     // Admin Notification
//     await resend.emails.send({
//       from: "Indisis <noreply@indisis.co>",
//       to: "indisisnow@gmail.com",
//       subject: "New Contact Submission",
//       replyTo: email,
//       html: `
//         <h2>New Contact Message</h2>
//         <p><strong>Name:</strong> ${firstName} ${lastName}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Brand:</strong> ${brandName}</p>
//         <p><strong>Company Size:</strong> ${companySize}</p>
//         <p><strong>Inquiry Type:</strong> ${helpType}</p>
//       `,
//     });

//     // Auto-reply to sender
//     await resend.emails.send({
//       from: "Indisis <noreply@indisis.co>",
//       to: email,
//       subject: "Thanks for contacting Indisis!",
//       html: `
//         <p>Hi ${firstName},</p>
//         <p>Thank you for reaching out to Indisis. We've received your message and will get back to you shortly.</p>
//         <p>— The Indisis Team</p>
//       `,
//     });

//     return res.status(200).json({ message: "Sent successfully" });
//   } catch (error) {
//     return res.status(500).json({ message: "Email failed", error });
//   }
// };

// export default handler;
