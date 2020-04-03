
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
  console.log('DB connection succeded. Please wait...');
  else
  console.log ('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});


app.get('/', (req, res) => {
  let sql = 'DELETE FROM user WHERE Id_user = 8';
  let query = dBase.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('User Removed');
  });
});


// Show in CLI:
// 2. Run node removeUser.js in terminal.
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

