import { useState, useEffect } from "react";
import { getMonth } from "date-fns";
const meses = [
	{ id: 1, nomeMes: "Janeiro", dias: 31 },
	{ id: 2, nomeMes: "Fevereiro", dias: 28 },
	{ id: 3, nomeMes: "Março", dias: 31 },
	{ id: 4, nomeMes: "Abril", dias: 30 },
	{ id: 5, nomeMes: "Maio", dias: 31 },
	{ id: 6, nomeMes: "Junho", dias: 30 },
	{ id: 7, nomeMes: "Julho", dias: 31 },
	{ id: 8, nomeMes: "Agosto", dias: 31 },
	{ id: 9, nomeMes: "Setembro", dias: 30 },
	{ id: 10, nomeMes: "Outubro", dias: 31 },
	{ id: 11, nomeMes: "Novembro", dias: 30 },
	{ id: 12, nomeMes: "Dezembro", dias: 31 },
];

function Calendario() {
	let [mes, setMes] = useState([{}]);
	let [dias, setDias] = useState([]);
	let cu = [];

	let handleMes = () => {
		setMes(meses[11]);
		handleDias();
	};

	let handleDias = () => {
		for (let i = 1; i <= mes.dias; i++) {
			cu.push(i);
			setDias(cu);
			console.log(cu);
		}
	};

	useEffect(() => {
		return () => {
			handleMes();
			handleDias();
		};
	}, []);

	return (
		<>
			<div>
				<div>{mes.nomeMes}</div>
				<div className="">
					<div className="weeks">
						<p>Seg</p>
						<p>Ter</p>
						<p>Qua</p>
						<p>Qui</p>
						<p>Sex</p>
						<p>Sab</p>
						<p>Dom</p>
					</div>
					<div className="days">
						{dias.map((dia) => (
							<div className="day">{dia}</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Calendario;
