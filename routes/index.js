const {render} = require('ejs');
const express = require('express');
const routes = express.Router();
const mailService = require('../services/mailer');



routes.get("/",(req,res)=>{
    res.render("index");
});

routes.get("/contact",(req,res)=>{
    res.render("contact");
});

routes.get("/qr",(req,res)=>{
    res.render("qr");
});

routes.post("/",(req,res)=>{
    const name = req.body.Name;
    const email = req.body.Email;
    const subject = req.body.Subject;
    const description = req.body.Description;
    mailService(name,email,subject,description);
    res.send("OK"); 
})

module.exports = routes;