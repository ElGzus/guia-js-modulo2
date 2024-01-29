/*
Se cuenta con la siguiente información:
• Las edades de 5 estudiantes del turno mañana.
• Las edades de 6 estudiantes del turno tarde.
• Las edades de 11 estudiantes del turno noche.
Nota: Las edades de cada estudiante se deberán ingresar por la web.
Lo que queremos devolver:
• Obtener el promedio de las edades de cada turno (tres promedios).
• Imprimir dichos promedios (promedio de cada turno).
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un
promedio de edades mayor.
*/


function promedioEdad(edad) {
    let sumaEdad = 0; 
    for (let i = 0; i < edad.length; i++) {
        sumaEdad += edad[i];
    }  
    return sumaEdad / edad.length;
}
const edadMatutino = [17,16,15,17,15];
const edadVespertino = [17,19,16,15,17,18];
const edadNocturno = [19,17,15,15,15,15,18,19,15,20,16];

const promMatu = promedioEdad(edadMatutino);
const promVesp = promedioEdad(edadVespertino);
const promNoct = promedioEdad(edadNocturno);
  
console.log("El promedio general del turno matutino es", promMatu);
console.log("El promedio general del turno vespertino es", promVesp);
console.log("El promedio general del turno nocturno es", promNoct);
  
let promedioMayor;
  
if (promMatu > promVesp && promMatu > promNoct) {
    promedioMayor = "matutino";
} else if (promVesp > promMatu && promVesp > promNoct) {
    promedioMayor = "vespertino";
} else {
    promedioMayor = "nocturno";
}

let numMay = 0;

if (promMatu > promVesp && promNoct) {
    numMay = promMatu;
} else if (promVesp > promMatu && promVesp > promNoct) {
    numMay = promVesp;
} else {
    numMay = promNoct;
}
  
console.log("El promedio mayor lo obtuvo el turno", promedioMayor, "con", numMay, "de promedio");
  

