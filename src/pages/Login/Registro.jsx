import React, { useState } from "react";
import axios from "axios";

function Registro() {
	const [conta, setConta] = useState({
		email: "",
		nome: "",
		senha: "",
		data_nasc: "",
		repet_senha: "",
	});

	const handleConta = (input) => {
		console.log(input.target.name);

		setConta((prevState) => {
			return { ...prevState };
		});
	};

	const handleSubmit = () => {
		console.log("oi");
		console.log(conta);
		// axios.post("http://localhost:4002/cadastrar/conta", {
		// 	email: conta.email,
		// 	senha: conta.senha,
		// 	data_nasc: conta.data_nasc,
		// 	nome: conta.nome,
		// });
	};

	return (
		<div className="div_form_registro">
			<div>
				<span>
					<p>Email</p>
					<input onChange={handleConta} type="text" name="email" />
				</span>{" "}
				<span>
					<p>Nome Completo</p>

					<input type="text" name="name" onChange={handleConta} />
				</span>
				<span>
					<p>Data de nascimento</p>
					<input
						type="number"
						name="day"
						id="small_input"
						onChange={handleConta}
					/>
					<input
						type="number"
						name="month"
						id="small_input"
						onChange={handleConta}
					/>
					<input
						type="number"
						name="year"
						id="small_input"
						onChange={handleConta}
					/>
				</span>
			</div>
			<div>
				<p> Senha</p>
				<input onChange={handleConta} type="password" name="password" />
				<p> Repita a senha</p>
				<input onChange={handleConta} type="password" name="passwordconfirm" />
				<button onClick={handleSubmit}> Confirmar </button>
			</div>
		</div>
	);
}

export default Registro;
