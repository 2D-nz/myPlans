import "./styles.css";
import Tarefas from "./pages/Tarefas";
import Home from "./pages/Home/Home";

function App() {
	fetch("http://localhost:4002/testeoi")
		.then((resp) => resp.json())
		.then((resp) => console.log(resp.message));

	return (
		<div className="app">
			<Home />
		</div>
	);
}

export default App;
