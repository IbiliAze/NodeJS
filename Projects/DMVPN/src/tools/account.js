const sgMail = require('@sendgrid/mail');


const sendgridAPIKey = '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';


sgMail.setApiKey(sendgridAPIKey);


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ibili73@gmail.com',
        subject: `Welcome to Afenia, ${name}`,
        text: `Welcome, ${name}!` 
    });
};


const sendGoodbyeEmail = async (email, name) => {
    sgMail.send({
        to: email,
        from: 'ibili73@gmail.com',
        subject: `Goodbye, ${name}`,
        text: `Sad to see you go, ${name}!` 
    });
};


module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
};