//Al seleccionar un destino informar si hace FRIO o CALOR en ese destino

function mostrar() {
	let vDestino;
	vDestino = document.getElementById("txtIdDestino").value;

	switch (vDestino) {
		case "Bariloche":
		case "Cordoba":
			alert("Frio");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Calor");
			break;

	}

}//FIN DE LA FUNCIÓN