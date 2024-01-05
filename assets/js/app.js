const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Require cors package

const app = express();

app.use(cors()); // Use cors as middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { fullname, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'devyatharth4@gmail.com',
            pass: 'udno rwoq wflx hmgu'
        }
    });

    const mailOptions = {
        from: email,    
        to: 'devyatharth4@gmail.com',
        subject: `Message from ${fullname}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));