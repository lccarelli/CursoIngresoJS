/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
	let sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
	let operacion = (sueldo * 10 / 100) + sueldo;
	document.getElementById("txtIdResultado").value = operacion

	alert("ok");
}
