var mysql = require ('mysql');

var mysqlConnection = mysql.createConnection({
    host: 'mgs0iaapcj3p9srz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'jgy4kfpqhzeplmwl',
    password: 'nal168vbk5cgeq50',
    database: 'b0j93g47mct78nva'
    });

    mysqlConnection.connect((err)=> {
        if(!err) 
          console.log('DB connected'); 
         else 
          console.log('DB connection failed \n Error : '+ JSON.stringify(err, undefined, 2));
      });