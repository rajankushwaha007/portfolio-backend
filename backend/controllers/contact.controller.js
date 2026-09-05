const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactMail = async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Name, email and message are required.",
            });
        }

        console.log("Contact request received from:", email);

        const { data, error } = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: [process.env.EMAIL_USER],

            reply_to: email,

            subject: `New Portfolio Query - ${subject || "Contact Form"}`,

            html: `
                <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">

                    <div style="background: #111827; color: white; padding: 25px;">
                        <h2 style="margin: 0;">New Portfolio Query</h2>
                        <p style="margin: 8px 0 0;">
                            Someone contacted you through your portfolio.
                        </p>
                    </div>

                    <div style="padding: 25px;">

                        <p>
                            <strong>Name:</strong> ${name}
                        </p>

                        <p>
                            <strong>Email:</strong> ${email}
                        </p>

                        <p>
                            <strong>Phone:</strong> ${phone || "Not provided"}
                        </p>

                        <p>
                            <strong>Subject:</strong> ${subject || "Not provided"}
                        </p>

                        <div style="margin-top: 20px;">
                            <strong>Message:</strong>

                            <div style="background: #f3f4f6; padding: 15px; margin-top: 8px; border-radius: 6px;">
                                ${message}
                            </div>
                        </div>

                        <p style="margin-top: 25px; color: #666;">
                            This message was submitted through your portfolio contact form.
                        </p>

                    </div>
                </div>
            `,
        });

        if (error) {
            console.log("Resend Error:", error);

            return res.status(500).json({
                success: false,
                message: "Failed to send message. Please try again.",
            });
        }

        console.log("Email sent successfully:", data);

        return res.status(200).json({
            success: true,
            message: "Your message has been sent successfully!",
        });

    } catch (error) {
        console.log("Contact Mail Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to send message. Please try again.",
        });
    }
};

module.exports = {
    sendContactMail,
};