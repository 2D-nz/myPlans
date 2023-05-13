import express from 'express';

// const app = express();

// app.listen(3009, () => 
// console.log('Servidor iniciado na porta 3000')
// );


import mysql from "mysql"
var con = mysql.createConnection({
    host: "localhost",
    user: "god",
    password: ""
})

con.connect(function(err){
    if (err) throw err;
    console.log("Connected!")
})
