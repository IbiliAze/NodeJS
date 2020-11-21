const sgMail = require('@sendgrid/mail');


const sendgridAPIKey = process.env.SENDGRID_API_KEY;


sgMail.setApiKey(sendgridAPIKey);


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.LOCAL_EMAIL,
        subject: `Welcome to Afenia, ${name}`,
        text: `Welcome, ${name}!` 
    });
};


const sendGoodbyeEmail = async (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.LOCAL_EMAIL,
        subject: `Goodbye, ${name}`,
        text: `Sad to see you go, ${name}!` 
    });
};


module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
};