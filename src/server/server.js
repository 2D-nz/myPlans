import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";
import cors from "cors";
import bcrypt from "bcrypt";
const saltRounds = 10;

// creating instances of the imports
const app = new express();
const port = 4002;
var jsonParser = bodyParser.json();

const formatData = (data) => {
	let dia = data.substring(0, 2);
	let mes = data.substring(3, 5);
	let ano = data.substring(6, 10);

	return ano.concat("-", mes, "-", dia);
};

// setting up express

app.use(jsonParser);
app.use(
	cors({
		origin: "http://localhost:5173",
	})
);

// setting up mysql connection with express
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "projeto_pw",
});

// test script
app.listen(port, () => console.log(`Servidor iniciado na porta ${port}`));

// test route to test the connection between FRONT and BACK ends
app.get("/testeoi", (req, res) => {
	res.json({ message: "oi" });
});

// routes to retrieve data from the database
app.get("/conta", (req, res) => {
	console.log(req.body);
	const conta = {
		email: req.body.email,
	};

	connection.query(
		`SELECT * FROM CONTA where email = "${conta.email}"`,
		(err, rows) => {
			if (err) throw err;

			res.send(rows);
		}
	);
});

app.get("/categoria", (req, res) => {
	const categoria = {
		id_conta: req.body.id_conta,
		nome_categoria: req.body.nome_categoria,
	};
	connection.query(
		`SELECT * FROM CATEGORIA WHERE id_conta = ${categoria.id_conta}`
	),
		(err, rows) => {
			if (err) throw err;

			res.send(rows);
		};
});

app.get("/login", (req, res) => {
	const user = req.body.email;
	const senha = req.body.senha;

	connection.query(
		"SELECT * FROM conta WHERE email = ?;",
		user,
		(err, result) => {
			if (err) {
				res.send({ err: err });
			}

			if (result.length > 0) {
				bcrypt.compare(senha, result[0].senha, (err, response) => {
					if (response) {
						res.send({
							response,
						});
					} else {
						res.send({
							message: "Usuário ou senha errados",
						});
					}
				});
			} else {
				res.send({
					message: "Usuário inexistente, cadastre-se!",
				});
			}
		}
	);
});

// Routes to send data and register in the database
app.post("/cadastrar/conta", (req, res) => {
	const conta = {
		nome: req.body.nome,
		email: req.body.email,
		data_nasc: req.body.data_nasc,
		senha: req.body.senha,
	};
	bcrypt.hash(conta.senha, saltRounds, (err, hash) => {
		if (err) {
			res.send({ err: err });
		}
		connection.query(
			`INSERT INTO CONTA (nome, data_nasc, email, senha) VALUES ("${conta.nome}", '${conta.data_nasc}', "${conta.email}", "${hash}")`,
			(err) => {
				if (err) res.send(err);
				else {
					res.send("Conta adicionada");
				}
			}
		);
	});
});

app.post("/cadastrar/categoria", (req, res) => {
	const categoria = {
		id_conta: req.body.id_conta,
		nome_categoria: req.body.nome_categoria,
	};
	connection.query(
		`INSERT INTO CAREGORIA (nome_categoria, id_conta) VALUES (${categoria.nome_categoria}, ${categoria.id_conta})`
	),
		(err) => {
			if (err) res.send(err);
			else {
				res.send("Categoria adicionada");
			}
		};
});

app.post("/cadastrar/tarefa", (req, res) => {
	const tarefa = {
		id_conta: req.body.id_conta,
		id_categoria: req.body.id_categoria,
		nome_tarefa: req.body.nome_tarefa,
		data: req.body.data,
	};

	// INSERT INTO tarefa (Faculdade, data_tarefa, id_conta, id_categoria, completo) VALUES (${tarefa.nome_tarefa}, ${dataFormatada}, ${tarefa.id_conta}, ${tarefa.id_categoria}, false)

	const dataFormatada = formatData(tarefa.data);
	connection.query(
		`INSERT INTO tarefa (tarefa_nome, data_tarefa, id_conta, id_categoria, completo) VALUES ("${tarefa.nome_tarefa}", '${dataFormatada}', ${tarefa.id_conta}, ${tarefa.id_categoria}, false)`
	),
		(err) => {
			if (err) res.send(err);
			else {
				console.log("Categoria Adicionada");
				res.send("Categoria adicionada");
			}
		};
});
