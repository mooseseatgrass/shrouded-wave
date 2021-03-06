const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
app.listen(port, () => console.log(`Express server is running on port ${port}`));

app.use(bodyParser.json());

var dBase = mysql.createConnection({
    host : 'mgs0iaapcj3p9srz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user : 'jgy4kfpqhzeplmwl',
password : 'nal168vbk5cgeq50',
database : 'b0j93g47mct78nva'
})

dBase.connect((err) => {
  if (!err)
  console.log('DB connection succeded');
  else
  console.log ('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});

// -------------------------------------------------------------------
// *CAN ONLY SHOW IN EITHER THE CLI OR BROWSER AT ONE TIME.*
// Am working on getting it to do both at same time. I've seen it done
// and actually have the code but will require a small re-write.
// I first will add code for other CRUD commands.
// -------------------------------------------------------------------

// Add row to table:
app.get('/', (req, res) => {
  let post = {First_Name:'Lil', Last_Name:'Wayne', Phone_Number:'706-555-3086'}; // Id_user set to Auto_Increment
  let sql = 'INSERT INTO user SET ?';
  let query = dBase.query(sql, post, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Post 1 added...');
  });
});


// Show in CLI:
// 1. Must first comment out "Show in browser" code below.
// 2. Run node admin.js in terminal.
// 3. In browser enter  localhost:8080  and hit enter.
// 4. Return to terminal to see output in CLI.
// 5. Will have to press Ctrl+C to end (for now).
// Show in CLI:

// app.get('/',(res,req) => {
//   dBase.query('SELECT * FROM user',(err, rows, fields) => {
//     if(!err)
//     // Show entire table:
//     console.log(rows);
//     else
//     console.log(err);
//   })
// });


// Show in browser:
// 1. Must first comment out "show in CLI" code above.
// 2. Run node admin.js in terminal.
// 3. In browser enter  localhost:8080  and hit enter.
// Show in browser:

// app.get('/',(req,res) => {
//   dBase.query('SELECT * FROM user',(err, rows, fields) => {
//     if(!err)
//     res.send(rows);
//     else
//     console.log(err);
//   })
// });


// DO NOT ENABLE THIS OR WILL NOT WORK
// dBase.end();