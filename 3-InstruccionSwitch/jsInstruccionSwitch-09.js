// una agencia de viajes debe sacar las tarifas de los viajes, se cobra $15.000 por cada estadia como base,
//  se pide el ingreso de una estacion del año y localidad para vacacionar para poder  calcular el precio final

// en Invierno:
// bariloche tiene un aumento del 20% 
// cataratas y Cordoba tiene un descuento del 10%
// Mar del plata  tiene un descuento del 20% 

// en Verano:
// bariloche tiene un descuento del 20% 
// cataratas y Cordoba tiene un aumento del 10%
// Mar del plata  tiene un aumento del 20%

// en Otoño y Primavera:
// bariloche tiene un aumento del 10% 
// cataratas tiene un aumento del 10%
// Mar del plata  tiene un aumento del 10%
// y Cordoba tiene el precio sin descuento

function mostrar() {

	const BARILOCHE = "Bariloche";
	const CORDOBA = "Cordoba";
	const MAR_DEL_PLATA = "Mar del plata";
	const INVIERNO = "Invierno";
	const VERANO = "Verano";

	let vEstacion;
	let vDestino;
	let vEstadia;
	let vPrecioFinal;

	vEstacion = document.getElementById("txtIdEstacion").value;
	vDestino = document.getElementById("txtIdDestino").value;
	vEstadia = 15000;

	switch (vEstacion) {

		case INVIERNO:

			switch (vDestino) {

				case BARILOCHE:
					vPrecioFinal = (vEstadia + (vEstadia * 0.2)).toFixed(2);
					alert(`Precio final -> ${vPrecioFinal}`);
					break;

				case MAR_DEL_PLATA:
					vPrecioFinal = (vEstadia - (vEstadia * 0.2)).toFixed(2);
					alert(`Precio final -> ${vPrecioFinal}`);
					break;

				default:
					vPrecioFinal = (vEstadia + (vEstadia * 0.1)).toFixed(2);
					alert(`Precio final -> ${vPrecioFinal}`);
					break;
			}

			break;

		case VERANO:

			switch (vDestino) {

				case BARILOCHE:
					vPrecioFinal = (vEstadia - (vEstadia * 0.2)).toFixed(2);
					alert(`Precio final -> ${vPrecioFinal}`);
					break;

				case MAR_DEL_PLATA:
					vPrecioFinal = (vEstadia + (vEstadia * 0.2)).toFixed(2);
					alert(`Precio final -> ${vPrecioFinal}`);
					break;

				default:
					vPrecioFinal = (vEstadia + (vEstadia * 0.1)).toFixed(2);
					alert(`Precio final -> ${vPrecioFinal}`);
					break;
			}

			break;

		default:

			switch (vDestino) {

				case CORDOBA:
					alert(`Precio final -> ${vPrecioFinal}`);
					break;

				default:
					vPrecioFinal = (vEstadia + (vEstadia * 0.1)).toFixed(2);
					alert(`Precio final -> ${vPrecioFinal}`);
					break;
			}

			break;
	}

}//FIN DE LA FUNCIÓN