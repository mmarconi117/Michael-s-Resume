const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bcrypt = require('bcrypt');
require('dotenv').config();


const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());

require('dotenv').config();





const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL;



// Endpoint to handle form submissions
app.post("/api/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: GMAIL_USER,
            pass: GMAIL_PASS
        }
    });

    const mailOptions = {
        from: GMAIL_USER,
        to: RECIPIENT_EMAIL,
        subject: "New Message from Your Website",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.send("Email sent successfully. You may go back");
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
    }
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
