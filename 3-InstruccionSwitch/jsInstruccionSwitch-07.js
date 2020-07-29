// Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra
// Norte, Sur, Este u Oeste

function mostrar() {
	let vDestino;
	vDestino = document.getElementById("txtIdDestino").value;

	switch (vDestino) {
		case "Bariloche":
			alert("SUR")
			break;
		case "Cataratas":
			alert("NORTE")
			break;
		case "Mar del plata":
			alert("OESTE")
			break;
		case "Cordoba":
			alert("ESTE")
			break;
	}

}//FIN DE LA FUNCIÓN