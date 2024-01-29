/*
EJERCICIO 8:
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario.
*/

function tablaMultiplicar(numeroUsar) {
    console.log("la tabla de multiplicar elegida es la del:", numeroUsar);
    for (let i = 1; i <= 10; i++) {    
        console.log(numeroUsar, "x", i, "=", (numeroUsar * i));
    }
}

const usarNumero = 11;
tablaMultiplicar(usarNumero);

  
  