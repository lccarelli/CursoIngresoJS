// al seleccionar un mes  informar.
// si es Febrero: " Este mes no tiene m&aacute;s de 29 d&iacute;as."
// si NO es Febrero: "Este mes tiene 30 o m&aacute;s d&iacute;as"

function mostrar() {
	let vMes;
	vMes = document.getElementById("txtIdMes").value;


	switch (vMes) {
		case "Febrero":
			alert("Este mes no tiene mas de 29 dias.")
			break;

		default:
			alert("Este mes tiene 30 o mas dias");
			break;
	}

}//FIN DE LA FUNCIÓN