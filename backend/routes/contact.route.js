const ContactRouter = require("express").Router();

const {
  sendContactMail,
} = require("../controllers/contact.controller");

ContactRouter.post("/send", sendContactMail);

module.exports = ContactRouter;