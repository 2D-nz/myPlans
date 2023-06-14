import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const [conta, setConta] = useState({
		email: "",
		senha: "",
	});

	const handleConta = (input) => {
		if (input.target.name == "email") {
			setConta((prevState) => {
				return { ...prevState, email: input.target.value };
			});
		} else {
			setConta((prevState) => {
				return { ...prevState, senha: input.target.value };
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(conta);
		axios
			.post("http://localhost:4002/login", {
				email: conta.email,
				senha: conta.senha,
			})
			.then((res) => {
				console.log(res);
				if (res.data == true) {
					navigate("/home");
				} else {
					setError(res.data.message);
				}
			});
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className="div_form_login">
				<p>Email ou Telefone</p>
				<input type="text" name="email" onChange={handleConta} />
				<p>Senha</p>
				<input type="password" name="senha" onChange={handleConta} />
				<span id="span_esqueceu-senha">
					<p>{error}</p>
				</span>
				<button onClick={handleSubmit}> Entrar </button>
			</div>
		</form>
	);
}

export default Login;
