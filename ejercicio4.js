/*
EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario,
calcular cual número es el mayor y devolverlo.
*/

function numeros (primero, segundo) {
    if (primero > segundo) {
        console.log("primero es mayor");
    } else if (segundo > primero) { 
        console.log("segundo es mayor");
    } else {
        console.log("primero y segundo son iguales");
    }
}

let primero = 100;
let segundo = 20;

numeros(primero,segundo);


