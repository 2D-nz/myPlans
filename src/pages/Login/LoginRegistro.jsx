import { useState } from "react";
import "./styles.css";
import Login from "./Login";
import Registro from "./Registro";
function LoginRegistro() {
	const [mode, setMode] = useState("Login");

	const handleToggle = (modo) => {
		setMode(modo);
	};

	return (
		<div className="div_container_login-registro">
			<span>
				{" "}
				<p onClick={() => handleToggle("Login")}> Entrar </p>
				<p onClick={() => handleToggle("Registro")}>Criar uma conta</p>
			</span>
			<div>{mode == "Login" ? <Login /> : <Registro />}</div>
		</div>
	);
}

export default LoginRegistro;
