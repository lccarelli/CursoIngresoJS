//Al presionar el Boton, mostrar un numero Random del 1 al 10 inclusive 

function mostrar() {
	//Genero el número RANDOM entre 1 y 10 
	const MINIMO = 1;
	const MAXIMO = 10;
	let vNum;

	vNum = Math.round(Math.random() * (MAXIMO - MINIMO) + MINIMO);

	alert(vNum);


}//FIN DE LA FUNCIÓN