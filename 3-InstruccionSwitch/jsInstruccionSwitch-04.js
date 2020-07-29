// al seleccionar un mes  informar.
// si tiene 28 d&iacute;as.
// si tiene 30 d&iacute;as.
// si tiene 31 d&iacute;as.

function mostrar() {
	let vMes;
	vMes = document.getElementById("txtIdMes").value;

	switch (vMes) {
		case "Febrero":
			alert("si tiene 28 días");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("si tiene 30 días");
			break;
		default:
			alert("si tiene 31 días");
			break;
	}





}//FIN DE LA FUNCIÓN