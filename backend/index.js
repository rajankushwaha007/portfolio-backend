require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://rajan-portfolio-vma4.vercel.app"
        ],
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"]
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ContactRouter = require("./routes/contact.route");

app.use("/api/contact", ContactRouter);

app.get("/", (req, res) => {
    res.send("Portfolio Backend is Running");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is Running on port ${PORT}`);
});