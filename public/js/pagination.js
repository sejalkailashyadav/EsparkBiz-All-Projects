var port = 4000;
var express = require('express');
var app = express()
var body = require('body-parser')
app.use(body.urlencoded({ extended: false }));
app.use(body.json())
var mysql = require('mysql2');
//import bodyParser from "body-parser";
//var jsonParser = bodyParser.json();
app.set('view engine', 'ejs')



var con = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'Student'
});

con.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Database Connected");
    }
});
//select 

app.get('/page1', (req, res) => {

    const limit = 100;
    let page = req.query.page || 1;
    const offset = (page - 1) * limit;
    //const current_page=
    //const target_page=
    //const colum_name=


    con.query(`SELECT * FROM Student.student_express  LIMIT ${offset},${limit};`, (err, ans) => {
        if (err) {
            console.log(err.message);
               
        }
        else {
            console.log(ans,page);
           res.render("pagination", { data: ans, datapage: page},)

        }
    })


})


app.get('/sort', (req, res) => {

    const limit = 100;
    const page = req.query.page;
    const offset = (page - 1) * limit;
   //const colum=req.query.colum ;
    //const orderby=req.query.orderby ;
  
   
    
    con.query(`SELECT * FROM Student.student_express   LIMIT ${offset} ,${limit};`, (err, order) => {
        //SELECT * FROM Student.student_express order by firstname desc LIMIT 0, 10;
    //SELECT  * FROM Student.student_express ${orderby} LIMIT ${offset},${limit}
    //SELECT * FROM Student.student_express order by ${colum} ${orderby}  LIMIT ${offset},${limit}
    //http://localhost:4000/sort/?page=1&orderby=firstname&colum=asc
     
        
         if (err) {             
            console.log(err.message)
    
        }
       else {
            console.log(order);
           res.render("pagination", { order :order,page: page},)         
               console.log(order);
    
        }
     })


   


})


app.listen(4000, function (err, ans) {
    console.log("server is listening!!!");
})