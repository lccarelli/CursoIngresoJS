// al seleccionar un mes  informar.
// si es Enero: "que comiences bien el año!!!."
// si es Marzo: "a clases!!!."
// si es Julio: "se vienen las vacaciones!!!."
// si es Diciembre: "Felices fiesta!!!."

function mostrar() {
	const ENERO = "Enero";
	const MARZO = "Marzo";
	const JULIO = "Julio";
	const DICIEMBRE = "Diciembre";
	let vMes;
	vMes = document.getElementById("txtIdMes").value;

	switch (vMes) {
		case ENERO:
			alert("que comiences bien el año!!!.");
			break;

		case MARZO:
			alert("a clases!!!.");
			break;

		case JULIO:
			alert("se vienen las vacaciones!!!.");
			break;

		case DICIEMBRE:
			alert("Felices fiesta!!!.");
			break;
	}

}//FIN DE LA FUNCIÓN