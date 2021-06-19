const express = require('express');
const app =express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
var mysql= require('mysql');
//Intento de chat
var app2 = require('express')();
var http = require('http').createServer(app2);
//
app2.get('/', (req, res) => res.send('hello!'));
  http.listen(3000, () => {
  console.log('listening on *:3000');
});
//
var io = require('socket.io')(http);
io.on('connection', (socket) =>{
  console.log('a user connected');
});







app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
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
      con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM Cliente", function (err, result, fields) {
          if (err) throw err;
          res.send(result);
          console.log(result);
        });
      });
});

app.post('/registro', (req, res) => {
  console.log(req.body);
  console.log(req.body.name);
  let sql = 'INSERT INTO Aspirante SET ?'
  let post = {
    name: req.body.name,
    correo : req.body.correo,
    contra: req.body.contra,
    fechadenac: req.body.fecha,
    activo: "false"
  }
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "proyecto"
    });
  con.connect(function(err) {
    if (err){
      console.log(err);
    };
    con.query(sql,post, function (err, result, fields) {
      if (err){
        console.log(err);
      }
      res.send(result);
      console.log(result.insertId);
    });
  });
});
app.listen(5000,(req,res)=>{
    console.log('Express API esta corriendo en el puerto 5000');
});

