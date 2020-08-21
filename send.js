var path = require('path')
var bodyParser = require('body-parser')// importing body parser middleware to parse form content from HTML
var nodemailer = require('nodemailer');//importing node mailer
const axios = require('axios');
var nodeoutlook = require('nodejs-nodemailer-outlook');
var auth = require('./config/account.json')
var email = require('./config/email.json')

const sendMail = async (body) => {

    // body.author is for backward compatibility
    var to = (body.author && body.author.email) || body.to;
    var subject = body.subject || email.subject || "Sample Subject";
    var message = body.message;

    nodeoutlook.sendEmail(
        {   
            ...email,
            auth: auth,
            from: 'sampleuser@outlook.com',
            to: `${to}`,
            subject: `${subject}`,
            html: `${message}`,
            onError: (e) => console.log(e),
            onSuccess: (i) => console.log(i)
        }
    )
}

module.exports = sendMail