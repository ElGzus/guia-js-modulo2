/*
EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15%.
*/

function descuentoViaje (ciudad) {
    let descuentoCiudad = 0;
    ciudad = ciudad.toLowerCase();
    if ( ciudad === "palma") {
        descuentoCiudad = 5;
    } else if ( ciudad === "costaDelSol") {
        descuentoCiudad = 10;
    }else if ( ciudad === "panchimalco") {
        descuentoCiudad = 15;
    }else {
        console.log("ingrese un destino de viaje valido como (palma, costaDelSol, panchimalco)");
    return;
    }

    console.log("el descuento para la ciudad", ciudad, "es de:", descuentoCiudad, "%");
}

descuentoViaje ("panCHimAlco");



