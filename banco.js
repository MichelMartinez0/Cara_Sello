/*Declaracion de variables*/
let respuesta = true; /*respuesta del banco*/
let dinero;
let banco = 0;
let contador = 0;

while (respuesta == true) {
  dinero = window.prompt("Ingresa la cantidad que desea apostar");
  banco = banco + parseInt(dinero);
  contador = contador + 1;
  respuesta = window.confirm(
    "Esta seguro que desea apostar:" + contador + "pesos"
  );
  console.log(
    "El valor del banco es" + banco + "e ingresó" + contador + "veces dinero"
  );
}

console.log("El valor del banco es" + banco);
