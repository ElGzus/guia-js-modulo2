/*
EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.
*/

function notaFinal (nombre, carnet, dato1, dato2, dato3, dato4) {
    const examen = (dato1 * 0.2);
    const tareas = (dato2 * 0.4);
    const asistencia = (dato3 * 0.1);
    const investigacion = (dato4 * 0.3);
    const calificacion = (examen + tareas + asistencia + investigacion);

    console.log("nombre:", nombre);
    console.log("carnet:", carnet);
    console.log("su calificacion final del curso es:", calificacion)
}

notaFinal("jesus lopez", "09878790", 10,10,9.5,8.9);
  


