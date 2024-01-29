/*
EJERCICIO 3:
CATEGORIA AUMENTOs
A 15%
B 30%
C 10%
D 20%
Calcular el aumentos de trabajador tomando en cuenta la tabla de categorías de aumentos.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumentos. Deberá demostrar los datos del empleado y el aumentos salarial.
*/

function calculoAumentos(nombre, salario, categoria) {
    let aumentos;  
    switch (categoria) {
        case "A":
            aumentos = 0.15;
        break;
        case "B":
            aumentos = 0.30;
        break;
        case "C":
            aumentos = 0.10;
        break;
        case "D":
            aumentos = 0.20;
        break;
        default:
            console.log("Por favor ingresar una categoria entre (A, B, C o D)");
        return;
    }
  
    const cantidadAumentada = salario * aumentos;
    const salarioConAumentos = salario + cantidadAumentada;
  
    console.log("Nombre del empleado: ", nombre);
    console.log("Salario actual: $", salario);
    console.log("Categoría de aumento salarial: tipo", categoria);
    console.log("Salario con el aumento salarial incluido: $", salarioConAumentos);
}
  
calculoAumentos("Jesus Enmanuel Lopez Portan", 1500, "C");
  


