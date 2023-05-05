import "../../styles.css";

function Home(nome) {
	return (
		<div>
			<h1 className="greeting">Olá, {nome.nome}</h1>
		</div>
	);
}

export default Home;
