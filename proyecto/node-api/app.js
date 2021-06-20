const express = require('express');
const app =express();
var mysql= require('mysql');
var nodemailer=require("nodemailer");
var xoauth2 = require('xoauth2');

var smtpTrans=nodemailer.createTransport({
  service: 'smtp.gmail.com',
  port: 465,
  secure: true, 
  logger: true,
   debug: true,
                secureConnection: false,
  auth: {
    xoauth2: xoauth2.createXOAuth2Generator({
        user: 'internetcompany68@gmail.com',
        clientId: '965546171874-mrghrcln5r0dbvc076migku0bgab6enp.apps.googleusercontent.com',
        clientSecret: '4xXWCko7amPQnKMDiTf-RuEi',
        refreshToken: '1//041Q75fwxaC-uCgYIARAAGAQSNwF-L9IrQJceuez8wtJgphAUvBqGMaDTGHFnrAV4n3vU7tVi13r3KDGvkbxoTvefIlPVVjNWWcg',
        accessToken: 'ya29.a0AfH6SMCMufUFtjli50RZSny6xP7I2ObyXaT1s5v2X9xtmQrFciCHXvmLwsPupj6VIDkP71ic_2jByHoB8KTjZn0mwaIpgMnkHbwbzMOfc7to3BSH5e8ndjGaprxqsec-EHiRJkD77b38wGcG9hG7D1v3ipPL',
        pass: '/1234abc'
    }),
    tls:{
      rejectUnAuthorized:true
    }
}
});
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      type: 'OAuth2',
      user: 'internetcompany68@gmail.com',
      clientId: '965546171874-mrghrcln5r0dbvc076migku0bgab6enp.apps.googleusercontent.com',
      clientSecret: '4xXWCko7amPQnKMDiTf-RuEi',
      refreshToken: '1//04X14B6eccQ5OCgYIARAAGAQSNwF-L9IryGl0m0UZjmsbHFtR2unvEXqp8Ngdq4o9hSPD6_rxwW9Pwa1p_DmrMY9INK0TTEvOsFw',
      accessToken: 'ya29.a0AfH6SMBbUYjq2giVWd-0fPcrViqRIqdOi7R3wijzZVweobOmBS1ZLC0cPHgDs1dRgu6z-XG-f-3qlEHbhs97iXtDM6X9tWPiY3XIzrC_fPgrTVKp3Zm-qA0RnAd4z9W9bdDD91eRMOCCCKpEd1mjYzoRlLx1',
      expires: 1484314697598
  }
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Content-Security-Policy", "script-src 'self' https://apis.google.com");
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
  var id;
  console.log(req.body);
  console.log(req.body.name);
  var rand = Math.floor(Math.random() * 1000);
  let sql = 'INSERT INTO Aspirante SET ?'
  let post = {
    name: req.body.name,
    correo : req.body.correo,
    contra: req.body.contra,
    fechadenac: req.body.fecha,
    activo: "false",
    hash: rand.toString()
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
      
  
      link="http://localhost:5000/verify/"+rand;

      var rand = Math.floor(Math.random() * 1000);
      let sql2='INSERT INTO Verificacion SET?';
      console.log(id);
      let post2={
        id_cuenta: result.insertId,
        hash: rand.toString()
      }
      con.query(sql2,post2, function (err, result, fields) {
        if (err){
          console.log(err);
        } 
        console.log(result);
      });
      link="http://localhost:5000/verify?id="+rand;
      transporter.sendMail({
        from: 'internetcompany68@gmail.com',
        to: req.body.correo,
        subject: 'Please confirm your Email account',
        text: 'I hope this message gets through!',
        html: "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>", 
        auth: {
            user: 'internetcompany68@gmail.com',
            refreshToken: '1//04X14B6eccQ5OCgYIARAAGAQSNwF-L9IryGl0m0UZjmsbHFtR2unvEXqp8Ngdq4o9hSPD6_rxwW9Pwa1p_DmrMY9INK0TTEvOsFw',
            accessToken: 'ya29.a0AfH6SMBbUYjq2giVWd-0fPcrViqRIqdOi7R3wijzZVweobOmBS1ZLC0cPHgDs1dRgu6z-XG-f-3qlEHbhs97iXtDM6X9tWPiY3XIzrC_fPgrTVKp3Zm-qA0RnAd4z9W9bdDD91eRMOCCCKpEd1mjYzoRlLx1',
            expires: 1484314697598
        }
      });
      });
      
      });
  });

  app.get('/verify/:id',function(req,res){

    console.log("in");
    console.log(req.params.id);
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
          con.query('UPDATE Aspirante SET activo="true" WHERE hash=\"'+req.params.id+'\"',function(err,rows){
          if (err) {
            console.log(err);
          }else{
            console.log(rows);
          }    
          });
       });
       return res.redirect('http://localhost:4200/');
});


  
app.listen(5000,(req,res)=>{
    console.log('Express API esta corriendo en el puerto 5000');
});