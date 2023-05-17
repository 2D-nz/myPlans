import express from 'express';
import mysql from "my-sql"
const app = new express();
import nodemon from 'nodemon';
const con = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password:"",
    database: "pinto"
})

app.listen(3001, () => 
console.log('Servidor iniciado na porta 3000')
);

app.get('/',(req, res) => {
    con.query('Select * FROM clientes', (err, result) =>{
        res.send(result)
    })
})

