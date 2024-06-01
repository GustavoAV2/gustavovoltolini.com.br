import { config } from 'dotenv';
import nodemailer from 'nodemailer';

config(); 

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.PASSWORD
  }
});

var mailOptions = {
  from: process.env.EMAIL_SENDER,
  to: process.env.RECEIVER,
  subject: '',
  text: ''
};


export function sendEmail(subject, text){
    mailOptions.subject = subject;
    mailOptions.text = text;
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        return false;
      } else {
        console.log('Email sent: ' + info.response);
        return true;
      }
    });
}