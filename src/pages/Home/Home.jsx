import Header from "../../components/Header";
import "./styles.css";
import Hoje from "../Hoje";
import { Route, Routes } from "react-router-dom";
import Tarefas from "../Tarefas";
import Notas from "../Notas/Notas";
import Calendario from "../Calendario";
import Greeting from "../../components/Greeting";

function Home() {
	return (
		<div className="appDivision">
			<Header />
			<Routes>
				<Route path="/" element={<Greeting />} />
				<Route path="/tarefas" element={<Tarefas />} />
				<Route path="/Notas" element={<Notas />} />
				<Route path="/Calendario" element={<Calendario />} />
				<Route path="/hoje" element={<Hoje />} />
			</Routes>
		</div>
	);
}

export default Home;
