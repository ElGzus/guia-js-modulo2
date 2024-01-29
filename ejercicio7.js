/*
EJERCICIO 7:
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares
*/

function analisisDedatos (datos) {
    let negativos = 0;
    let positivos = 0;
    let multiplos15 = 0;
    let sumaPares = 0;
  
    for (let i = 0; i < datos.length; i++) {
        let valor = datos[i]; 
        if (valor < 0) {
            negativos++;
        } else if (valor > 0) {
            positivos++;
        }  
        if (valor % 15 === 0) {
            multiplos15++;
        }
        if (valor % 2 === 0) {
            sumaPares += valor;
        }
    }
    console.log("La cantidad de datos introducidos negativos es de:", negativos);
    console.log("La cantidad de datos introducidos positivos es de:", positivos);
    console.log("La cantidad de datos introducidos múltiplos de 15 es de:", multiplos15);
    console.log("La suma total de los numeros pares introducidos es de:", sumaPares);
}
const datosUsados = [15,-60,60,25,30,40,2,8,-15,-7];
analisisDedatos(datosUsados);
  
  
