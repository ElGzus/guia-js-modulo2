/*
EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.
*/

function mayorDeEdad(edad) {
    if (edad >= 18) {
        return "Eres mayor de edad";
    } else {
        return "Eres menor de edad";
    }
}

console.log(mayorDeEdad(21));
console.log(mayorDeEdad(16));



