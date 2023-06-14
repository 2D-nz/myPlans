export default function formatData(data) {
	let dia = data.substring(0, 2);
	let mes = data.substring(3, 5);
	let ano = data.substring(6, 10);

	return ano.concat("-", mes, "-", dia);
}
