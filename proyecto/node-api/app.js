const express = require('express');
const app =express();
var mysql= require('mysql');
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get('/getData',(req,res)=>{
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "123456789",
        database: "proyecto"
      });
      res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, accept, content-type");
      con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM Cliente", function (err, result, fields) {
          if (err) throw err;
          res.send(result);
          console.log(result);
        });
      });
})

app.listen(5000,(req,res)=>{
    console.log('Express API esta corriendo en el puerto 3000');
})

