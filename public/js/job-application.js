var express = require("express");
var app = express();
var body = require("body-parser");
app.set("view engine", "ejs");
app.use(body.urlencoded({ extended: false }));
app.use(body.json());
var mysql = require("mysql2");
const { delimiter } = require("ejs");
//const moment = require("moment"); //for date

//create connection
var con = mysql.createConnection({
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

let state;
let rel;
let location;
let department;
let language;
let tech_ans;
let coursename;
let city;

//get form data
app.get("/form", (req, res) => {
  // for relaion
  query1 = ` SELECT * FROM candidate.state_master;`;
  con.query(query1, function (err, ans1) {
    if (err) {
      console.log(err.message);
    }
    state = ans1;
    //  console.log(state);
    //  res.render("formindex", { state: state})
  });

  
  //for relaion
  query2 = `SELECT * FROM candidate.selection_master where option_id=2 `;
  con.query(query2, function (err, ans2) {
    if (err) {
      console.log(err.message);
    }
    rel = ans2;
    // console.log(rel);
    //  res.render("formindex", { rel: rel})
  });

  //for location
  query3 = `SELECT * FROM candidate.selection_master where option_id=4 `;
  con.query(query3, function (err, ans3) {
    if (err) {
      console.log(err.message);
    }
    location = ans3;
    // console.log(location);
    // res.render("formindex", { location: location})
  });

  //for department
  query4 = `SELECT * FROM candidate.selection_master where option_id=3 `;
  con.query(query4, function (err, ans4) {
    if (err) {
      console.log(err.message);
    }
    department = ans4;
    //console.log(department);
    // res.render("formindex", { department: department})
  });

  //for language
  query5 = `SELECT * FROM candidate.selection_master where option_id=5 `;
  con.query(query5, function (err, ans5) {
    if (err) {
      console.log(err.message);
    }
    language = ans5;
    //console.log(language);
    // res.render("formindex", { department: department})
  });

  //for coursename
  querycourses = `SELECT * FROM candidate.selection_master where option_id=7 ;`;
  con.query(querycourses, function (err, select_courses) {
    if (err) {
      console.log(err.message);
    }
    coursename = select_courses;
   // console.log(coursename);
  });

  //for city
  querycity = `SELECT * FROM candidate.city_master; `;
  con.query(querycity, function (err, ans9) {
    if (err) {
      console.log(err.message);
    }
    city = ans9;
    // console.log(city);

    //res.render("formindex", { city:  city})
  });

  //for tecnology
  query6 = `SELECT * FROM candidate.selection_master where option_id=6 `;
  con.query(query6, function (err, ans6) {
    if (err) {
      console.log(err.message);
    }
    tech_ans = ans6;
    //console.log(department);
    // res.render("formindex", { department: department})

    res.render("formindex", {
      language: language,
      city: city,
      state: state,
      rel: rel,
      location: location,
      department: department,
      language: language,
      tech_ans: tech_ans,
      coursename: coursename,
    });
  });

});
//global variable for candidate_id
  var idglobal;

  //post form data
  app.post("/form", (req, res) => { 
                                        const {
                                          tech_ans,
                                          fname,
                                          department,
                                          city,
                                          state,
                                          location,
                                          ectc,
                                          cctc,
                                          np,
                                          lname,
                                          email,
                                          phone,
                                          gender,
                                          refname2,
                                          refname1,
                                          coursename,
                                          refcontact2,
                                          refcontact1,
                                          desi,
                                          dob,
                                          ad1,
                                          expctc,
                                          boardname,
                                          language,
                                          passingyear,
                                          percentage,
                                          cname,
                                          desio,
                                          csdate,
                                          cedate,zip,rel} = req.body;

//insert = ${editdata.fname},o candidate_master insert_query1
      let insert_query1 = `INSERT INTO candidate.candidate_master (candidate_firstname, candidate_lastname, candidate_phone, candidate_gender, candidate_dob, candidate_email, candidate_address, createdAt ,candidate_expactedctc,candidate_currentctc,candidate_notice_perio , candidate_city	,
                           candidate_state ,candidate_zipcode,candidate_relation	) VALUES ( '${fname}', '${lname}', '${phone}', '${gender}', '${dob}', '${email}', '${ad1}', CURRENT_TIMESTAMP , '${ectc}' ,'${cctc}','${np}' ,'${city}','${state}','${zip}','${rel}');`;
       con.query(insert_query1, (err, ans) => {
      if (err) return console.log(err.message);
          console.log("for candidate_master " + insert_query1 , ans );
                //assign value to global variable .for candidate id
                idglobal = ans.insertId;

      
//insert into candidate acdmic info
      if (typeof (boardname, coursename, passingyear, percentage) == "string")
      {
       let insert_query2 = `INSERT INTO candidate.candidate_academic_info ( candidate_board, candidate_coursename, candidate_passingyear, candidate_percentage, candidate_id)
                             VALUES ('${boardname}','${coursename}','${passingyear}', '${percentage}',${idglobal})`;

        con.query(insert_query2, (err, ans1) => {
          if (err) return console.log(err.message);
          console.log("for acdmic_info singal insert " + insert_query2, ans1);
        });

      } 
      else 
      {
        //insert into candidate_Acadmic_info insert_query2
        for (let i = 0; i < boardname.length; i++) 
        {
          //console.log(idglobal);
          let insert_query2 = `INSERT INTO candidate.candidate_academic_info ( candidate_board,candidate_coursename , candidate_passingyear, candidate_percentage, candidate_id)
                                                VALUES (  '${boardname[i]}','${coursename[i]}','${passingyear[i]}', '${percentage[i]}',${idglobal})`;
          console.log(insert_query2);
          con.query(insert_query2, (err, ans1) => {
            if (err) return console.log(err.message);
            console.log("for acdmic_info multiple insert " + insert_query2, ans1);
          });
        }
      }

//insert into candidate_job_exp
      if (typeof (cname, desio, csdate, cedate) == "string") 
      {
        let insert_query3 = `INSERT INTO candidate.candidate_job_exp( companyname, desig, joindate, enddate, candidate_id)
                             VALUES ( '${cname}','${desio}', '${csdate}', '${cedate}', ${idglobal});`;
            console.log(insert_query3);
            con.query(insert_query3, (err, ans2) => {
              if (err) return console.log(err.message);
              console.log("for job_exp singal insert " + insert_query3, ans2);
              
            });
      } 
      else 
      {
        for (let i = 0; i < cname.length; i++) 
        {
          let insert_query3 = `INSERT INTO candidate.candidate_job_exp( companyname, desig, joindate, enddate, candidate_id)
                                VALUES ( '${cname[i]}','${desio[i]}', '${csdate[i]}', '${cedate[i]}', ${idglobal});`;

              con.query(insert_query3, (err, ans2) => {
                if (err) return console.log(err.message);
                console.log("for job_exp multipul insert  " + insert_query3, ans2);
              });
        }
      }

//insert into candidate_reference1
      let insert_query4 = `INSERT INTO candidate.candidate_reference ( candidate_name, candidate_contact, candidate_id) VALUES 
                            ('${refname1}', '${refcontact1}', ${idglobal});`;
     
              con.query(insert_query4, (err, ans3) => {
                if (err) return console.log(err.message);
                console.log("for candidate_reference1  insert  " + insert_query4, ans3);
                
              });

//insert into candidate_reference2
      let insert_query5 = `INSERT INTO candidate.candidate_reference ( candidate_name, candidate_contact, candidate_id) VALUES 
                            ('${refname2}', '${refcontact2}', '${idglobal}');`;
      
            con.query(insert_query5, (err, ans4) => {
              if (err) return console.log(err.message);
              console.log("for candidate_reference2 insert  " + insert_query5, ans4);
            });
   


            //for techno select data 
                con.query(`SELECT * FROM candidate.selection_master where option_id= 6 `, (err,tech_ans) => {
                          
                  console.log(tech_ans);
                  for (let i = 0; i < tech_ans.length; i++) 
                  {
                        var tech = req.body[tech_ans[i].s_value];
                        var a = req.body[tech_ans[i].s_value + "a"];
                  
                   
                      var query_tech = `INSERT INTO  candidate.candidate_techno_info ( candidate_tech_name, candidate_efficiency ,candidate_id)
                                        Values ('${tech}','${a}',${idglobal})`;
                    
                                  con.query(query_tech, (err, ans6) => {
                                    if (err) console.log(err.message);
                                    console.log("for candidate tech  insert  " +   query_tech , ans6);                                
                                  });
                    
                  }

            });



                //for language [checkboxs]
                con.query(`SELECT * FROM candidate.selection_master where option_id=5 `, (err, lange) => {
                  for (let i = 0; i < lange.length; i++)
                   {
                                var vj = req.body[lange[i].s_value];
                                //console.log(vj);
                                var r = req.body[lange[i].s_value + "read"];
                                var w = req.body[lange[i].s_value + "write"];
                                var s = req.body[lange[i].s_value + "speak"];
                                // console.log(r,w,s);
                                if (typeof r == "undefined") r = "0";
                                if (typeof w == "undefined") w = "0";
                                if (typeof s == "undefined") s = "0";
                          if (typeof vj == "string") 
                          {
                                  let query_lan = `INSERT INTO candidate.candidate_language ( candidate_language, candidate_read, candidate_write, candidate_speak , candidate_id) 
                                              values('${vj}','${r}','${w}','${s}',${idglobal});`;
                                  con.query(query_lan, (err, ans6) => {
                                    if (err) console.log(err.message);
                                      console.log("for candidate language  insert  " +   query_lan , ans6);                                
                                  });     
                          }
                   }

                });


// //for prefred location 
//  querypreloc = `SELECT * FROM candidate.selection_master where option_id=4 `;
//  con.query(querypreloc, function (err, location) {
//        if (err) { console.log(err.message); }
//         console.log( querypreloc , location);
//                  for (let i = 0; i < location.length; i++) 
//                  {
//                    var loc = req.body[location[i].s_value];
//                    console.log(loc);
//                    var query_loca = `INSERT INTO candidate.pre_location ( pre_location, pre_depa , candidate_id)
//                              VALUES ('${loc}', '${department}',${idglobal});`;

//                                      con.query(query_loca, (err, result) => {
//                                        if (err) console.log(err.message)
//                                                console.log(query_loca ,result);
//                                       });
//                  }   
//      });



  }); //this is for first insert query bracket 
});// this is for post endpoints bracket  
     



  
//for search + showall data + + delete all data + delete singal data +  without pagenation
let cmg, caig, cjeg, crg, smg, clg, cplg, ctig;
app.get("/search", (req, res) => {
  const limit = 10;
  const page = req.query.page || 1;
  const offset = (page - 1) * limit;

  query7 = `SELECT * FROM candidate.candidate_master LIMIT ${offset},${limit};`;
  //`SELECT * FROM candidate.candidate_master LIMIT ${offset},${limit}  where isdisable=0;`

  con.query(query7, function (err, cm) {
    if (err) {
      console.log(err.message);
    }
    cmg = cm;
  });
  // query8 = `SELECT * FROM candidate.candidate_academic_info ;`;
  // con.query(query8, function (err, cai) {
  //   if (err) { console.log(err.message); }
  //   caig=cai
  // })
  console.log(page, cmg);
  res.render("search", { data: cmg, page: page });
});

//Post  data for Search API
app.post("/search", (req, res) => {
  let currStr = req.body.demo;
  //console.log(currStr);
  let name = "";
  let arr = ["^", "$", "_", "~", "&"];
  var count = 0;
  for (let i = 0; i < currStr.length; i++) {
    if (arr.includes(currStr[i])) {
      name += " " + currStr[i];
      count++;
    } else {
      name += currStr[i];
    }
  }
  let currname = name.split(" ");
  let queryStr = ``;
  currname.forEach((name) => {
    if (name[0] == "^") {
      count--;
      if (count) {
        queryStr += `candidate_master.candidate_firstname LIKE '${name.slice(
          1
        )}%' AND `;
      } else {
        queryStr += `candidate_master.candidate_firstname LIKE '${name.slice(
          1
        )}%'`;
      }
    }

    if (name[0] == "$") {
      count--;
      if (count) {
        queryStr += `candidate_master.candidate_lastname Like '${name.slice(
          1
        )}%' AND `;
      } else {
        queryStr += `candidate_master.candidate_lastname  Like '${name.slice(
          1
        )}%' `;
      }
    }

    if (name[0] == "_") {
      count--;
      if (count) {
        queryStr += `candidate_master.candidate_phone Like '${name.slice(
          1
        )}%' AND `;
      } else {
        queryStr += `candidate_master.candidate_phone Like '${name.slice(1)}%'`;
      }
    }

    if (name[0] == "~") {
      count--;
      if (count) {
        queryStr += `candidate_master.candidate_gender Like '${name.slice(
          1
        )}%' AND `;
      } else {
        queryStr += `candidate_master.candidate_gender Like '${name.slice(
          1
        )}%'`;
      }
    }

    if (name[0] == "&") {
      count--;
      if (count) {
        queryStr += `candidate_master.candidate_email Like '${name.slice(
          1
        )}%' AND `;
      } else {
        queryStr += `candidate_master.candidate_email Like '${name.slice(1)}%'`;
      }
    }
  });

  con.query(
    `select * from candidate.candidate_master where ${queryStr}`,
    (err, result) => {
      //console.log(result);

      if (err) return err.message;
      else {
        console.log(result);
       
      }

      res.render("search", { data: result });
    });
});

//get API for more info
app.get("/moredata", (req, res) => {
  edu = `SELECT * FROM candidate.candidate_job_exp where job_id=${req.query.id};`;
  con.query(edu, function (err, edu_ans) {
    if (err) {
      console.log(err.message);
    }
    edu_data = edu_ans;
    console.log(edu);
    console.log(edu_data);
    // res.render("moredata", { edu_data: edu_data });
  });

  acd = `SELECT * FROM candidate_academic_info where acd_id=${req.query.id};`;
  con.query(acd, function (err, acd_ans) {
    if (err) {
      console.log(err.message);
    }
    acd_data = acd_ans;
    console.log(acd_data);
  });

  cl = `SELECT * FROM candidate_language where lanid=${req.query.id};`;
  con.query(cl, function (err, cl_ans) {
    if (err) {
      console.log(err.message);
    }
    cl_data = cl_ans;
    //  console.log(cr);
  });

  cr = `SELECT * FROM  candidate_reference where referance_id=${req.query.id};`;
  con.query(cr, function (err, cr_ans) {
    if (err) {
      console.log(err.message);
    }
    cr_data = cr_ans;
    //   console.log(sm);
  });

  ti = `SELECT * FROM  candidate_techno_info where tech_id=${req.query.id};`;
  con.query(ti, function (err, ti_ans) {
    if (err) {
      console.log(err.message);
    }
    ti_data = ti_ans;
    //   console.log(cpl);
  });

  pl = `SELECT * FROM pre_location  where idlocation=${req.query.id};`;
  con.query(pl, function (err, pl_ans) {
    if (err) {
      console.log(err.message);
    }
    pl_data = pl_ans;
    //  console.log(edu_data ,acd_data  ,cl_data ,cr_data , ti_data ,pl_data);edu_data: edu_data
  });
  res.render("moredata", {
    edu_data: edu_data,
    acd_data: acd_data,
    cl_data: cl_data,
    cr_data: cr_data,
    ti_data: ti_data,
    pl_data: pl_data,
  });
});

// Get data for state-city  Drop-Down
app.get("/changecity", function (req, res) {
  var cityq = `select * from candidate.city_master city_name where sid = ${parseInt(
    req.query.sid
  )}`;
  con.query(cityq, function (err, city_ans) {
    if (err) return console.log(err.message);
    console.log("server sdata");
    console.log(city_ans);

    res.send(city_ans);
  });
});

//Get data for delete single row
app.get("/deletedata", function (req, res) {
  //var get_id = req.query.id;
  //console.log(get_id);
  delete_data = `update candidate.candidate_master set isdisable = 1 where candidate_id = ${parseInt(
    req.query.candidate_id)} `;
  con.query(delete_data, function (err, delete_ans) {
    if (err) return console.log(err.message);
    console.log(delete_ans);
    delete_data = delete_ans;
    res.send({ delete_data });
  });
});

//Get data for Delete Multiple Row
app.get("/deletealldata", function (req, res) {
  let id = req.query.candidate_id;
  var s_id = id.split(",");
  console.log(s_id);

  for (let i = 0; i < s_id.length; i++) {
    let query = `update candidate.candidate_master set isdisable  = 1 where candidate_id = 
    ${s_id[i]} `;
    con.query(query, function (err, result) {
      if (err) return console.log(err.message);

      //console.log(deleteall_ans)
    });
  }
});

//test-api   in AJX
app.get("/testapi/first", (req, res) => {
  query1 = ` SELECT * FROM candidate.candidate_master;`;
  con.query(query1, function (err, data) {
    if (err) {
      console.log(err.message);
    }

    res.render("search", { data: data });
    // console.log(data);
  });
});

//test-api   in AJX
app.get("/testapi/second", (req, res) => {
  query2 = ` SELECT * FROM candidate.candidate_master;`;
  con.query(query2, function (err, data_s) {
    if (err) {
      console.log(err.message);
    }

    res.json({ data_s: data_s });
    //console.log(data);
  });
});

let basic_info_result_g;
let acd_info_result_g;
let exp_info_result_g;
let lang_info_result_g;
let ref_info_result_g;
let tech_info_result_g;
let pfloc_info_result_g;
let city_info_result_g;
let state_info_result_g;
let relaation_info_result_g ;
let course_info_result_g ;
let preloc_info_result_g ;

// //get form data
app.get('/edit', (req, res) => {

         // console.log(req.body);
          let id=req.query.candidate_id;
          console.log(id);
          
          basic_info_query =`SELECT * FROM candidate.candidate_master where candidate_id = ${id};`;
          con.query(basic_info_query , function (err,basic_info_result) {
          if (err) { console.log(err.message); }
          basic_info_result_g = basic_info_result
          console.log("basic info "  ,basic_info_result_g);
          //candidate_date=moment((ansu1d[0].candidate_dob)).format("MM/DD/YYYY ");
                  //    console.log(typeof candidate_date);
                  // console.log(ansu1);
                  // console.log(ansu1d);
          
          })
         
          acd_info_query = `SELECT * FROM candidate.candidate_academic_info where  candidate_id = ${id};`;
          con.query( acd_info_query , function (err, acd_info_result) {
            if (err) { console.log(err.message); }
            //ansu2d=ansu2
            acd_info_result_g=acd_info_result
            //console.log( "acdmic" ,  acd_info_result_g);
            //console.log(ansu2);
          })

        
        exp_info_query = `SELECT * FROM candidate.candidate_job_exp where  candidate_id = ${id};`;
        con.query( exp_info_query  , function (err, exp_info_result) {
          if (err) { console.log(err.message); }
         // ansu3d=ansu3
         exp_info_result_g = exp_info_result
          //console.log("exp", exp_info_query , exp_info_result_g  );

        })

        
        ref_info_query= `SELECT * FROM candidate.candidate_reference where candidate_id = ${id};`;
          con.query( ref_info_query , function (err, ref_info_result) {
            if (err) { console.log(err.message); }
           // console.log(ansu4);
           //ansu4d=ansu4
          ref_info_result_g =ref_info_result
          // console.log("refrance " , ref_info_result_g );
          })

          
          pfloc_info_query = `SELECT * FROM candidate.pre_location where  candidate_id = ${id};`;
          con.query( pfloc_info_query, function (err, pfloc_info_result) {
            if (err) { console.log(err.message); }
           // ansud5=ansu5
           pfloc_info_result_g = pfloc_info_result;
            //console.log("pre location " ,pfloc_info_result_g);   
            //    console.log(ansu1d[0].candidate_dob);

          })

          
          tech_info_query  = `SELECT * FROM candidate.candidate_techno_info  where candidate_id = ${id};`;
          con.query( tech_info_query , function (err, tech_info_result) {
            if (err) { console.log(err.message); }
            //console.log(queryupdate6);
            //ansud6=ansu6
            tech_info_result_g=tech_info_result
             //console.log("technology ", tech_info_result_g );

          })

         
          state_info_query  = `select * from candidate.state_master;`
          queryupdate7 = `select * from candidate.city_master city_name where sid = ${parseInt(req.query.sid)}`;
          con.query( state_info_query, function (err, state_info_result) {
            if (err) { console.log(err.message); }
            //console.log(  stateselect);
            //ansud7=ansu7
            state_info_result_g = state_info_result
            //console.log("states" ,  state_info_result_g );

          })


          city_info_query  = `select * from candidate.city_master;`
          //queryupdate7 = `select * from candidate.state_master state_name where sid = ${parseInt(req.query.sid)}`;
          con.query( city_info_query, function (err, city_info_result) {
            if (err) { console.log(err.message); }
            //console.log(  stateselect);
            //ansud7=ansu7
            city_info_result_g = city_info_result
            //console.log("city" ,  city_info_result_g );

          })
          
            lang_info_query = `SELECT * FROM candidate.candidate_language  where candidate_id = ${id};`;
            con.query( lang_info_query, function (err,  lang_info_result) {
            if (err) { console.log(err.message); }
            lang_info_result_g = lang_info_result
            // ansud8=ansu8
            //console.log("languages" ,  lang_info_result_g );

             })



            relaation_info_query = ` SELECT * FROM candidate.selection_master where option_id = 2;`;
            con.query( relaation_info_query, function (err,  relaation_info_result) {
            if (err) { console.log(err.message); }
            relaation_info_result_g = relaation_info_result
            // ansud8=ansu8
           // console.log("relationship" ,  relaation_info_result_g );

             })

             course_info_query = ` SELECT * FROM candidate.selection_master where option_id = 7;`;
            con.query(course_info_query, function (err, course_info_result) {
            if (err) { console.log(err.message); }
           course_info_result_g =course_info_result
            // ansud8=ansu8
           // console.log("course names " , course_info_result_g );

             })

             preloc_info_query = `SELECT * FROM candidate.pre_location where  candidate_id = ${id};`;
             con.query( preloc_info_query , function (err, preloc_info_result) {
               if (err) { console.log(err.message); }
               preloc_info_result_g =  preloc_info_result
               //console.log(ansud5);
              // console.log("pref location  " ,  preloc_info_result_g );
              })
            
              
                 //for location
 query3 = `SELECT * FROM candidate.selection_master where option_id=4 `;
 con.query(query3, function (err, ans3) {
   if (err) {
     console.log(err.message);
   }
   location = ans3;
  
 });

 //for department
 query4 = `SELECT * FROM candidate.selection_master where option_id=3 `;
 con.query(query4, function (err, ans4) {
   if (err) {
     console.log(err.message);
   }
   department = ans4;
   res.render("update", {department ,location , preloc_info_result_g ,course_info_result_g  , relaation_info_result_g ,  exp_info_result_g ,basic_info_result_g ,acd_info_result_g , exp_info_query ,ref_info_result_g,pfloc_info_result_g , tech_info_result_g,   lang_info_result_g ,  city_info_result_g ,  state_info_result_g })
 });


    
     // res.render("update", {rel :rel ,state : state ,ansud8 : ansud8 ,ansu1d : ansu1d  ,ansu2d : ansu2d , ansu3d : ansu3d  ,ansu4d : ansu4d , ansud5 : ansud5, ansud6 : ansud6, ansud7 : ansud7 , ansud8 : ansud8})
  //  res.render("edit", {rel :rel ,state : state ,ansud8 : ansud8 ,ansu1d : ansu1d  ,ansu2d : ansu2d , ansu3d : ansu3d  ,ansu4d : ansu4d , ansud5 : ansud5, ansud6 : ansud6, ansud7 : ansud7})

 });


 let basicinfo_update_result_g;
 let acd_update_result_g;
 let  exp_update_result_g;
 let lan_update_result_g;
 let  tech_update_result_g;
let  ref_update_result_g1;
let  ref_update_result_g2;
  

//update data
 app.get('/update',function(req,res) {

  
 // console.log("body of edit data " );
   let editdata=req.query;
   console.log("req body");
   console.log(editdata);
   
   let cid = editdata.id;
    console.log(cid);
 //console.log(req.query.acd_id);
  //for basic info 
 basicinfo_update_query= `UPDATE candidate.candidate_master SET  
                          candidate_firstname	= '${editdata.fname}',
                          candidate_lastname	= ' ${editdata.lname}',
                          candidate_phone =  '${editdata.phone}',
                          candidate_gender =	'${editdata.gender}',
                          candidate_dob	 =  '${editdata.dob}',
                          candidate_email = 	'${editdata.email}',
                          candidate_address	=  '${editdata.ad2}',
                          candidate_expactedctc =	'${editdata.ectc}',
                          candidate_currentctc =	'${editdata.cctc}',
                          candidate_notice_perio =	'${editdata.np}',
                            isdisable= '${editdata.isdisable}' ,
                          candidate_zipcode =	'${editdata.zip}',
                          candidate_relation =	'${editdata.rel}' where candidate_id =${req.query.id};`;


              con.query( basicinfo_update_query, function (err,  basicinfo_update_result) {
                if (err) return console.log(err.message);
                basicinfo_update_result_g = basicinfo_update_result
                console.log(basicinfo_update_result_g, basicinfo_update_query)      
                })
  
 //update candidate acdmic info
 
console.log(typeof editdata.boardname, editdata.coursename,editdata.passingyear, editdata.percentage);
edu_id= req.query.acd_id;
console.log("edu id"  , req.query.acd_id);    


if (typeof (editdata.boardname, editdata.coursename,editdata.passingyear, editdata.percentage) == "object")
            {

                          for (let i = 0; i < editdata.boardname.length; i++) 
                          {
                            acd_update_query= `UPDATE candidate.candidate_academic_info SET  
                                              candidate_board	= '${editdata.boardname[i]}',
                                              candidate_coursename	= '${editdata.coursename[i]}',
                                              candidate_passingyear	= '${editdata.passingyear[i]}',
                                              candidate_percentage	= '${editdata.percentage[i]}'
                                              where acd_id =${req.query.acd_id} `;

                                              con.query( acd_update_query, function (err,   acd_update_result) {
                                              if (err) return console.log(err.message);
                                              acd_update_result_g = acd_update_result
                                              console.log(acd_update_result_g, acd_update_query)      
                                              })
                            }

                    } 
                  else 
                  {
                                  //update candidate_Acadmic_info insert_query
                                  acd_update_query= `UPDATE candidate.candidate_academic_info SET  
                                  candidate_board	= '${editdata.boardname}',
                                  candidate_coursename	= '${editdata.coursename}',
                                  candidate_passingyear	= '${editdata.passingyear}',
                                  candidate_percentage	= '${editdata.percentage}'
                                  where acd_id =${req.query.acd_id} `;


                                  con.query( acd_update_query, function (err,   acd_update_result) {
                                  if (err) return console.log(err.message);
                                  acd_update_result_g = acd_update_result
                                  console.log(acd_update_result_g, acd_update_query)      
                                    })
                    }

       
// //for work exp_

 console.log(typeof editdata.cname,editdata.desio,editdata.csdate,editdata.csdate);
           
 if (typeof (editdata.cname,editdata.desio , editdata.csdate, editdata.csdate) == "object")
             {
 
                           for (let i = 0; i < editdata.cname.length; i++) 
                           {
                                    exp_update_query= `UPDATE candidate.candidate_job_exp SET  
                                    companyname	= '${editdata.cname[i]}',
                                    desig	= '${editdata.desio[i]}',
                                    joindate	= '${editdata.csdate[i]}',
                                    enddate	= '${editdata.cedate[i]}'
                                    where job_id = ${req.query.exp_id} `;

                                      con.query( exp_update_query, function (err,   exp_update_result) {
                                      if (err) return console.log(err.message);
                                      exp_update_result_g = exp_update_result
                                      console.log(exp_update_result_g, exp_update_query)      
                                      })
                           }
 
                     } 
                   else 
                   {
                                   exp_update_query= `UPDATE candidate.candidate_job_exp SET  
                                  companyname	= '${editdata.cname}',
                                  desig	= '${editdata.desio}',
                                  joindate	= '${editdata.csdate}',
                                  enddate	= '${editdata.cedate}'
                                  where job_id =${req.query.exp_id} `;

                                          con.query( exp_update_query, function (err,   exp_update_result) {
                                          if (err) return console.log(err.message);
                                          exp_update_result_g = exp_update_result
                                          console.log(exp_update_result_g, exp_update_query)      
                                          })
                     }
 

// //for language exp_
                                                for (let i = 0; i < editdata.lang.length; i++) 
                                                {
                                                                              lan_update_query= `UPDATE candidate.candidate_language SET  

                                                                                candidate_language = 	'${editdata.lang[i]}',
                                                                                candidate_read	 = '${editdata.readr[i]}',
                                                                                candidate_write	= '${editdata.writew[i]}',
                                                                                candidate_speak = '${editdata.speaks[i]}'
                                                                                where lanid = ${req.query.lan_id} ;`

                                                                                      con.query( lan_update_query, function (err,   lan_update_result) {
                                                                                      if (err) return console.log(err.message);
                                                                                      lan_update_result_g = lan_update_result
                                                                                      console.log(lan_update_result_g, lan_update_query)      
                                                                                     })
                                             }

                                    // //for techno exp_



                                    // if (!Array.isArray(tech_info_result_g)) {
                                    //   tech_info_result_g = [tech_info_result_g];
                                    //   }
                                    // tech_update_query= `UPDATE candidate.candidate_techno_info SET  
                                    //                   candidate_tech_name	='${editdata.tech}',
                                    //                   candidate_efficiency ='${editdata.cname}',
                                    //                    where tech_id =${req.query.tech_id} `;

                                    //       con.query( tech_update_query, function (err,   tech_update_result) {
                                    //       if (err) return console.log(err.message);
                                    //       tech_update_result_g = tech_update_result
                                    //       console.log(tech_update_result_g, tech_update_query)      
                                    //       })



// //for  refrance  1
ref_update_query1= `UPDATE candidate.candidate_reference  SET 
                    candidate_name ='${editdata.refname1}',
                    candidate_contact ='${editdata.refcontact1}'
                    where referance_id =${req.query.ref_id} `;

                  con.query( ref_update_query1, function (err, ref_update_result1) {
                  if (err) return console.log(err.message);
                  ref_update_result_g1 = ref_update_result1
                  console.log(ref_update_result_g1, ref_update_query1)      
                  })

// //for  refrance  2
ref_update_query2 = `UPDATE candidate.candidate_reference  SET 
                    candidate_name ='${editdata.refname2}',
                    candidate_contact ='${editdata.refcontact2}'
                    where referance_id =${req.query.ref_id} `;

                    con.query( ref_update_query2, function (err, ref_update_result2) {
                    if (err) return console.log(err.message);
                    ref_update_result_g2 = ref_update_result2
                    console.log(ref_update_result_g2, ref_update_query2)      
                    })



    // res.render("update", { data: data });
})







//listen port code
app.listen(2000, function (err, ans) {
  console.log(ans, "server is listening!!!");
});

//finally done 