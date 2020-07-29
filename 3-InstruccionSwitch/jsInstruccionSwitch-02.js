// al seleccionar un mes  informar.
// si estamos en Invierno: "Abrigate que hace frio."
// si a&uacute;n no llego el Invierno: "Falta para el invierno."
// si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
// ACLARAcI&Oacute;N: tomamos a Julio y Agosto como los meses de Invierno.

function mostrar() {


	let vMes;
	vMes = document.getElementById("txtIdMes").value;

	switch (vMes) {

		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
			break;

		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;

		default:
			alert("Falta para el invierno.");
			break;
	}




}//FIN DE LA FUNCIÓN