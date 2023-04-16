const express = require('express');
const mysql = require("mysql2");
const bodyParser = require('body-parser')
const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.set("view engine", "ejs")
//create connection
const con = mysql.createConnection({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "root",
    database: "candidate",
  });
  con.connect((err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Database Connected");
    }
  });

app.get('/', (req, res) => {

    let get_users = `SELECT candidate_id,candidate_firstname,candidate_lastname,candidate_phone FROM candidate.candidate_master limit 0,5;`
    con.query(get_users, (err, ans) => {
        if (err) console.log(err.message);
        else {

            // console.log(ans);
        }
        res.render('datatable', { ans })
    })
})

app.post('/save', (req, res) => {
    // console.log(req.params.id);
     console.log(req.body);
    const { data } = req.body
    console.log('save endpoint');
    console.log(data);
    // let id = data[0];
    let fname = data[1];
    let lname = data[2];
    let phone = data[3]
   

    let inser_que = `Insert INTO candidate.candidate_master (candidate_firstname,candidate_lastname,candidate_phone) values ('${fname}','${lname}','${phone}');`
     console.log(inser_que);
    con.query(inser_que, (err, ans) => {
        if (err) return console.log(err.message);
        res.json({ ans })
    })
})


app.get('/getId', (req, res) => {
    let que = `Select * from candidate.candidate_master  order by candidate_id DESC limit 1;`
    con.query(que, (err, ans) => {
        if (err) console.log(err.message);
        else {
            //console.log(ans);
            res.json({ ans })
        }
    })
})
app.post('/update/:id', (req, res) => {
    const { data } = req.body;
    let id = data[0];
    let fname = data[1];
    let lname = data[2];
    let phone = data[3]
    
    let up_que = `Update candidate.candidate_master set 
                            candidate_firstname = '${fname}',
                            candidate_lastname ='${lname}',
                             candidate_phone='${phone}'  where candidate_id=${id}`
    console.log(up_que);
    con.query(up_que, (err, ans) => {
        if (err) return console.log(err.message);
        res.json({ ans })
    })
})



app.post('/saveall', (req, res) => {
    const { data } = req.body
    console.log(data);

    for (let i = 0; i < data.length; i++) {

        var id = data[i][0];
 
        var fname = data[i][1];
       
        var lname = data[i][2];
  
        var phone = data[i][3];
   
       
       //console.log(id,fname,lname,city ,acc_no,addr);

       let inser_que = `Insert INTO candidate.candidate_master(candidate_firstname,candidate_lastname,candidate_phone) values ('${fname}','${lname}','${phone}');`
       con.query(inser_que, (err, ans1) => {
        if (err) return console.log(err.message);
    })
    res.json({ ans1 })
    }

})

app.listen(port, () => { console.log('Service  start '); })