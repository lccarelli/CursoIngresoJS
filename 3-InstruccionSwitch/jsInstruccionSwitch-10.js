// una agencia de viajes nos piden informar si hacemos viajes a lugares según 
// la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

// en Invierno:
//  Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
// en Verano:
//  Se viaja a Mar del plata y Cataratas solamente
// en Otoño:
//  Se viaja a todos los destinos.
// primavera:
//  solo no se viaja a Bariloche

function mostrar() {

	const BARILOCHE = "Bariloche";
	const CATARATAS = "Cataratas";
	const MAR_DEL_PLATA = "Mar del plata";
	const INVIERNO = "Invierno";
	const VERANO = "Verano";
	const PRIMAVERA = "Primavera";
	const SE_VIAJA = "Se viaja";
	const NO_SE_VIAJA = "No se viaja";

	let vEstacion;
	let vDestino;

	vEstacion = document.getElementById("txtIdEstacion").value;
	vDestino = document.getElementById("txtIdDestino").value;

	switch (vEstacion) {

		case INVIERNO:

			switch (vDestino) {

				case BARILOCHE:
					alert(SE_VIAJA);
					break;

				default:
					alert(NO_SE_VIAJA);
					break;
			}

			break;

		case VERANO:

			switch (vDestino) {

				case CATARATAS:
				case MAR_DEL_PLATA:
					alert(SE_VIAJA);
					break;

				default:
					alert(NO_SE_VIAJA)
					break;
			}

			break;

		case PRIMAVERA:

			switch (vDestino) {

				case BARILOCHE:
					alert(NO_SE_VIAJA);
					break;

				default:
					alert(SE_VIAJA)
					break;
			}

			break;

		default:
			alert(SE_VIAJA)
			break;
	}

}//FIN DE LA FUNCIÓN