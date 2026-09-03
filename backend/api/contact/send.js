const { sendContactMail } = require("../../controllers/contact.controller");

module.exports = async (req, res) => {
    const allowedOrigin = "https://rajan-portfolio-vma4.vercel.app";

    res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Vary", "Origin");

    if (req.method === "OPTIONS") {
        return res.status(204).end();
    }

    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Method not allowed"
        });
    }

    return sendContactMail(req, res);
};