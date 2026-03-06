const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ayesharauf.189@gmail.com',
        pass: 'zuwudkqzsisxdqxt'        // no spaces
    }
});

app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: 'ayesharauf.189@gmail.com',   // fixed
        to: 'ayesharauf.189@gmail.com',
        subject: `Portfolio Contact: ${name}`,
        text: `Message: ${message}\n\nSender Name: ${name}\nSender Email: ${email}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.log(error);               // add this to see exact error
        res.status(500).json({ success: false, message: 'Failed to send email.', error });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});