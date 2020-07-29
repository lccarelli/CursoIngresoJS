/*
  <h2>Enunciado:</h2>
  1.	Adivina el número (v 1.0):
    Al comenzar el juego generamos un número secreto del 1 al 100, 
    en la pantalla del juego dispondremos de un cuadro de texto para ingresar un número y un botón “Verificar”, 
    si el número ingresado es el mismo que el número secreto se dará por terminado el juego con un mensaje similar a este: 
		“Usted es un ganador!!! y en solo X intentos”.
		de no ser igual se debe informar si 
		“falta…”  para llegar al número secreto  o si 
    “se pasó…”  del número secreto.
*/


function comenzar() {

  let secreto;
  if (typeof secreto === "undefined") {
    secreto = generarNumeroRandom();
    console.log("numero secreto -> ", secreto);
    document.getElementById("txtIdSecreto").value = secreto;
  }

}

function verificar() {

  let secreto = parseInt(document.getElementById('txtIdSecreto').value);
  let ingresado = parseInt(document.getElementById("txtIdNumero").value);
  let intentos = parseInt(document.getElementById("txtIdIntentos").value || "0") + 1;
  console.log("secreto->", secreto, "ingresado->", ingresado, "intentos->", intentos);

  if (intentos <= 3) {


    if (secreto === ingresado) {

      console.log("entrando por el if ==>", "secreto->", secreto, "ingresado->", ingresado, "intentos->", intentos);
      alert("Usted es un ganador!!! y en solo " + intentos + " intentos");
    }
    else if (secreto > ingresado) {

      console.log("entrando por el else if ==>", "secreto->", secreto, "ingresado->", ingresado, "intentos->", intentos);
      alert("falta... ");
    }
    else {

      console.log("entrando por el else ==>", "secreto->", secreto, "ingresado->", ingresado, "intentos->", intentos);
      alert("Se pasó... ");
    }

    document.getElementById("txtIdIntentos").value = intentos;

  }
}

function generarNumeroRandom() {

  const MINIMO = 1;
  const MAXIMO = 100;

  return Math.round(Math.random() * (MAXIMO - MINIMO) + MINIMO);
}