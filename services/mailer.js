const nodemailer = require('nodemailer');
const userAuth = require('./auth');

const {email,password} = userAuth;

const mailService = async(guestName,guestEmail,subject,description) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: email,
          pass: password,
        },
      });
    
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
      });
      var message = {
        from: guestEmail,
        to: email,
        subject: subject,
        text: description,
      };
      await transporter.sendMail(message)
}
module.exports = mailService;



 
  
