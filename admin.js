const mysql = require('mysql');
const express = require('express');
const app = express();
const port = 3306;
const bodyparser = require('body-parser');

app.use(bodyparser.json());

// Username:   jgy4kfpqhzeplmwl      Password:   nal168vbk5cgeq50
// Port:  3306     Database:   b0j93g47mct78nva
var mysqlConnection = mysql.createConnection({
  // host : 'localhost',
      host : 'mysql://jgy4kfpqhzeplmwl:nal168vbk5cgeq50@mgs0iaapcj3p9srz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/b0j93g47mct78nva',
      user : 'jgy4kfpqhzeplmwl',
  password : 'nal168vbk5cgeq50',
  database : 'b0j93g47mct78nva'
})

mysqlConnection.connect((err) => {
  if (!err)
  console.log('DB connection succeded');
  else
  console.log ('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
})

app.listen(port, () => console.log(`Express server is running on port ${port}`));

// Show in CLI:
app.get('/employees',(res,req) => {
  mysqlConnection.query('SELECT * FROM Employee',(err, rows, fields) => {
    if(!err)
    // Show entire table:
    console.log(rows);
    // OR show first employee ID:
    // console.log(rows[0].EmpID);
    else
    console.log(err);
  })
}) 

// // Show in browser:
// app.get('/employees',(req,res) => {
//   mysqlConnection.query('SELECT * FROM Employee',(err, rows, fields) => {
//     if(!err)
//     res.send(rows);
//     else
//     console.log(err);
//   })
// })
