const mysql = require('mysql');
var mysqlConnection = mysql.createConnection({
  host: 'localhost', //localhost
  user: 'sai', //root
  port: 3306,
  password : '2935',
  database: 'testdashboard',
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log('Connected');
  } else {
    console.log('Connection Failed');
  }
});

module.exports = mysqlConnection;