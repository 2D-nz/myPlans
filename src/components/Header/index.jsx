import { Link } from "react-router-dom";
import "./style.css";
import Logo from "./Logo";

const Header = () => {
	return (
		<header>
			<Logo />
			<nav>
				<Link to="">Home</Link>
				<Link to="tarefas">Tarefas</Link>
				<Link to="hoje">Hoje</Link>
				<Link to="notas">Notas</Link>
				<Link to="calendario">Calendário</Link>
			</nav>
		</header>
	);
};

export default Header;
