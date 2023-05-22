import express from "express";

const app = new express();

app.listen(3006, () => console.log("Servidor iniciado na porta 3006"));

import mysql from "mysql";
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "projeto_pw",
});

connection.connect();

connection.query("SELECT * FROM CONTA", (err, rows, fields) => {
	if (err) throw err;

	console.log("The soluction is: ", rows[0]);
});

connection.end();
