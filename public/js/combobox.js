var express = require('express');
var app = express()
var body = require('body-parser')
app.use(body.urlencoded({ extended: false }));
app.use(body.json())
var mysql = require('mysql2');
app.set('view engine', 'ejs')


var con = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'combobox'
});

con.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Database Connected");
    }
});

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/sample', (req, res) => {

   console.log(req.query.id)
   //`SELECT * FROM combobox.option_master where s_id = '${id}';`
     con.query( `SELECT * FROM combobox.option_master where s_id=${req.query.id};`, (err, result) => {
         if (err) {
             console.log(err.message);
         }
              
         else {
             console.log(result);
            res.json({result:result})

         }
     })
 
 
 })


app.listen(9000, function (err, ans) {
    console.log("server is listening!!!");
})
