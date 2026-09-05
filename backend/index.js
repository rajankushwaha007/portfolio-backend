require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// CORS - allow Vercel deployments
app.use(cors({
    origin: /^https:\/\/rajan-portfolio.*\.vercel\.app$/,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
}));

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