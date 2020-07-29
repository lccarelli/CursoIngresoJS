// Al ingresar una hora, informar:
// si est&aacute; entre las 7 y las 11 : "Es de mañana.".

function mostrar() {
	let vHora;
	vHora = parseInt(document.getElementById("txtIdHora").value);

	switch (vHora) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana")
			break;
	}





}//FIN DE LA FUNCIÓN