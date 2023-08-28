const express = require('express');
const indexRouter = require('./routes');
const bodyParser = require('body-parser');


const app = express();


//ejs setup
app.set("view engine","ejs");
app.set("views","./views");


//setting up static file
app.use(express.static('public'));

//to use json
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//router
app.use("/", indexRouter);







app.listen(8888,(err)=>{
    (err) ? console.log(err):console.log("[+] Listening to port 8888");
});
