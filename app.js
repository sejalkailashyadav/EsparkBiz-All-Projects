const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const app = express();
app.set("view engine", "ejs");
const body = require("body-parser");
app.use(body.urlencoded({ extended: false }));
app.use(body.json());
app.use(express.static(__dirname +"/public"));
console.log(__dirname +"/public");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const crypto=require('crypto');
const mysql = require("mysql2");
const { delimiter } = require("ejs");
const { query } = require("express");
const { loadavg } = require("os");
require("dotenv").config();
require('./public/js/pagination.js')
require('./public/js/datatable.js')
require('./public/js/job-application.js')
require('./public/js/combobox.js')


//console.log(process.env);
var nodemailer = require('nodemailer');

//create connection
const con = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "root",
  database: "jwt",
});
con.connect((err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Database Connected");
  }
});

//render register Api
app.get("/register", (req, res) => {
  res.render("register");
});
//render Login APi
app.get("/login", async (req, res) => {
  //res.render("login");
    const token = await req.cookies['token'];

    if (token) {
        res.redirect('/home')
    }
    else {
        let error = false;
        res.render('login', { error })
    }
});

//render home APi
app.get("/home", (req, res) => {
    const token = req.cookies['token'];
    if(!token){
        res.redirect('/login');
    }
    else{
        const isvalid= jwt.verify(token,process.env.JWT_SECRET);
        res.render('home',{user_data:isvalid.user_data});
    }
});

//res register Api
let userID;
app.post("/register", async  (req, res) => {
  const register_data = req.body;
  //console.log(register_data);
  const { name, email, password, cpassword } = req.body;
 // console.log( name, email, password, cpassword);
            //condition one 
            if (!(email && password && name && cpassword))
            {
                res.status(400).send("All input is required");
            }

            const hash = await bcrypt.hash(password, 10);
            const insertQuery = await queryExecurter(`insert into  jwt.user (name,email,password) 
                                values('${name}','${email}','${hash}')`);
          
          //for activation link
           const token = crypto.randomBytes(32).toString('hex');
           const activation_url = `https://activationurl/${token}`;
           
          res.render('activationPage', { activated:false, activation_url:activation_url,userID:insertQuery.insertId});
           
});
   
var user_data;
//res login Api
app.post('/login',async (req, res) => {

  const { name, email, password, cpassword } = req.body;
 // console.log( name, email, password, cpassword);
  const login_ans = await queryExecurter(`SELECT * FROM jwt.user where user.email= '${email}' 
                   and isActivated=1;`)
 // console.log(login_ans,id);
   user_data=login_ans[0];
   //console.log(user_data);
  // console.log(password,user_data.password);
  const passcheck = await bcrypt.compare(password,user_data.password);
 // console.log(passcheck);
  
          if(passcheck){
              const token= jwt.sign({user_data},process.env.JWT_SECRET);
              res.cookie('token',token);
             // console.log(token);
              res.redirect('/home')
            
          }
          else {
          
          res.render("login")
}

});

//for email valiadation
app.get('/checkemail', (req,res)=> {
  const  email = req.query.email;
 // console.log(email);
  const query = `SELECT * FROM jwt.user where email = '${email}';`;
 // console.log(query);
  con.query(query, function (err, result) {
    if (err) {
      console.log(err.message);
    }
    if(result.length >0)
    {
       res.json({status : true})
    }
    else
    {
      res.json({status : false})
    }
   //console.log(result);
  });

  
   });

//for activation link 
app.get('/activateuser',async(req,res)=>{
  
  const userID = req.query.id ;
  //console.log(userID);
  const result= await queryExecurter(`UPDATE jwt.user SET isActivated = '1' WHERE id=${parseInt(userID)};`);
  res.render('activationPage',{ activated:true });
})



//all code 


//for color-cube
app.get('/tic-tac-toe',async(req,res)=>{
  //res.render("login");
  const token = req.cookies['token'];
   if(!token){
       res.redirect('/login');
   }
   else{
       const isvalid= jwt.verify(token,process.env.JWT_SECRET);
       res.render('tic-tac-toe');
   }

})


//for color-cube
app.get('/ColorCube',async(req,res)=>{
   //res.render("login");
   const token = req.cookies['token'];
    if(!token){
        res.redirect('/login');
    }
    else{
        const isvalid= jwt.verify(token,process.env.JWT_SECRET);
        res.render('color-cube');
    }

})


//for figma--one
app.get('/figma-one',async(req,res)=>{
  //res.render("login");
  const token = req.cookies['token'];
   if(!token){
       res.redirect('/login');
   }
   else{
       const isvalid= jwt.verify(token,process.env.JWT_SECRET);
       res.render('figma-one');
   }

})

//for figma-two
app.get('/figma-two',async(req,res)=>{
  //res.render("login");
  const token = req.cookies['token'];
   if(!token){
       res.redirect('/login');
   }
   else{
       const isvalid= jwt.verify(token,process.env.JWT_SECRET);
       res.render('figma-two');
   }

})

//query executer 
const queryExecurter = (query) => {
  return new Promise((resolve, reject) => {
      con.query(query, (err, result) => {
          if (err) {
              reject(err);
          }
          resolve(result);
      })
  })
}

app.post('/logout',(req,res)=>{
    res.clearCookie('token');
    res.redirect('/login');
})
//listen port code
app.listen(7000, function (err, ans) {
  console.log(ans, "server is listening!!!");
});
//finally done

//insert query  INSERT INTO jwt.user( name, email, password, con_password ) VALUES ('sejal', 'sejalyadav122@gmail.com','Bul@123','Bul@123');
//select query  SELECT  name, email, password, con_password  FROM jwt.user;
//SELECT * FROM jwt.user where user.email='sejalyadav122@gmail.com';
