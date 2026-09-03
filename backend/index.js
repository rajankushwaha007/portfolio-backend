require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ContactRouter = require("./routes/contact.route");

app.use("/api/contact", ContactRouter);

app.get("/", (req, res) => {
  res.send("Portfolio Backend is Running");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});

module.exports = app;