// const nodemailer = require("nodemailer");

// const sendContactMail = async (req, res) => {
//     try {
//         const { name, email, phone, subject, message } = req.body;

//         if (!name || !email || !message) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Name, email and message are required.",
//             });
//         }

//         console.log("EMAIL_USER:", process.env.EMAIL_USER);
//         console.log(
//             "EMAIL_PASS length:",
//             process.env.EMAIL_PASS
//                 ? process.env.EMAIL_PASS.length
//                 : 0
//         );

//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: process.env.EMAIL_USER,
//                 pass: process.env.EMAIL_PASS,
//             },
//         });

//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: process.env.EMAIL_USER,
//             replyTo: email,

//             subject: `New Portfolio Query - ${subject || "Contact Form"}`,

//             html: `
//         <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">

//           <div style="background: #111827; color: white; padding: 25px;">
//             <h2 style="margin: 0;">New Portfolio Query</h2>
//             <p style="margin: 8px 0 0;">Someone contacted you through your portfolio.</p>
//           </div>

//           <div style="padding: 25px;">

//             <p><strong>Name:</strong> ${name}</p>

//             <p><strong>Email:</strong> ${email}</p>

//             <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

//             <p><strong>Subject:</strong> ${subject || "Not provided"}</p>

//             <div style="margin-top: 20px;">
//               <strong>Message:</strong>

//               <div style="background: #f3f4f6; padding: 15px; margin-top: 8px; border-radius: 6px;">
//                 ${message}
//               </div>
//             </div>

//             <p style="margin-top: 25px; color: #666;">
//               This message was submitted through your portfolio contact form.
//             </p>

//           </div>
//         </div>
//       `,
//         };

//         await transporter.sendMail(mailOptions);

//         return res.status(200).json({
//             success: true,
//             message: "Your message has been sent successfully!",
//         });

//     } catch (error) {
//         console.log("Contact Mail Error:", error);

//         return res.status(500).json({
//             success: false,
//             message: "Failed to send message. Please try again.",
//         });
//     }
// };

// module.exports = {
//     sendContactMail,
// };


const ContactRouter = require("express").Router();

const { sendContactMail } = require("../controllers/contact.controller");

ContactRouter.post("/send", sendContactMail);

module.exports = ContactRouter;