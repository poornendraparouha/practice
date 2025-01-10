const nodemailer = require('nodemailer');

async function sendMail() {
    
        // Create a transporter object using SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'parouharaghav@gmail.com',
                pass: 'khvmijlndwuqwwgl'
            }
        });

        // Setup email data
        let mailOptions = {
            from: 'parouharaghav@gmail.com',
            to: 'trishala1998tikadiya@gmail.com',
            subject: 'An short digital love reminder to my love',
            text: 'Hello to myself!',
            html: '<b>Hello my darling i hope u are well, i just wanted to say that i miss you and i love you soo muchh!!!</b>'
        };

    try{
        // Send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        });

    }catch(err){
        console.log(err);
    }
}

sendMail();



