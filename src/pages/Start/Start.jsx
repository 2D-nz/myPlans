import "../../styles.css";
import "./styles.css";
import { Link } from "react-router-dom";
function Start() {
	return (
		<div className="div_home_container">
			<div>
				<h1>My Plans</h1>
				<p>Uma pessoa bem planejada vale por duas!</p>
				<p>
					Organiza suas tarefas, planos, anotações, e não passe mais por
					imprevistos!
				</p>

				<button className="home_button">
					<Link to="/login" style={{ textDecoration: "none" }}>
						Entrar
					</Link>
				</button>
			</div>
		</div>
	);
}

export default Start;
