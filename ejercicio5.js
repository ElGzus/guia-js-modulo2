/*
EJERCICIO 5: Realizar una función para una tienda de coches en donde se deberá calcular:
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se
aplicara en base a lo que selecciono el usuario.
*/

function compraCarro (tipoCarro) {
    let descuentoCarro = 0;
    tipoCarro = tipoCarro.toLowerCase();
    if ( tipoCarro === "fordfiesta") {
        descuentoCarro = 5;
    } else if ( tipoCarro === "fordfocus") {
        descuentoCarro = 10;
    } else if ( tipoCarro === "fordescape") {
        descuentoCarro = 20;
    } else {
        console.log("ingrese un modelo de vehiculo valido (fordfiesta, fordfocus, fordescape)");
    return;
    }

    console.log("el modelo del vehiculo es", tipoCarro, "se aplicara un descuento de:", descuentoCarro, "%");
}

compraCarro ("fOrdEsCape");



