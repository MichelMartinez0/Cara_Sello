let moneda;
let respuesta;
let cuenta = 0;
let iteraciones = 0;
let apuesta;
let lanzamiento = true;

while (lanzamiento == true) {
  respuesta = Math.ceil(Math.random() * 2);
  console.log(respuesta);

  apuesta = window.prompt("¿Cuánto deseas apostar?");

  if (apuesta <= 1000000) {
  } else if (apuesta > 10000000) {
    window.prompt("Ingresa solo valores max de 7 cifras");
  }

  moneda = window.prompt("Inicia el juego. Digita 1 para cara 2 para sello");

  if (moneda == 1 && respuesta == 1) {
    
    cuenta = cuenta + parseInt(apuesta) * 2;
    window.alert("¡Felicitaciones! haz ganado, tu acumulado es " + cuenta + " pesos");
    iteraciones = iteraciones + 1;

  } else if (moneda == 2 && respuesta == 1) {
    cuenta = cuenta - parseInt(apuesta);
    window.alert("Lo siento, haz perdido :(, tu acumulado es " + cuenta + " pesos");
    iteraciones = iteraciones + 1;

  } else if (moneda >= 2 && respuesta == 2 ) {
    cuenta = cuenta + parseInt(apuesta) * 2;
    window.alert("¡Felicitaciones! haz ganado, tu acumulado es " + cuenta + " pesos");
    iteraciones = iteraciones + 1;

  } else if (moneda == 1 && respuesta == 2) {
    cuenta = cuenta-parseInt(cuenta) /2;
    window.alert("Lo siento, haz perdido :(, tu acumulado es " + cuenta + " pesos");
    iteraciones = iteraciones + 1;

  }

  window.alert("Haz jugado " +  iteraciones  + " veces ");

  cont = window.confirm("¿Desea seguir jugando?");
}
window.alert("Tu has jugado " + iteraciones + " vez(es)");
