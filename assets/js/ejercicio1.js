/**
 * Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
comenzando desde desde y terminando con hasta.
Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
• Usando setInterval.
• Usando setTimeout anidado.
 */

// DECLARACION DE LAS VARIABLES DE LA INICIAL Y LA FINAL
let desde = parseInt(prompt("Ingrese el numero desde que empieza"));
let hasta = parseInt(prompt("Ingrese el numero en el que termina"));

// DECLARACION DEL setInterval PARA QUE IMPRIMA CADA SEGUNDO EL NUMERO
let intervalo = setInterval(function imprimirNumeros(){
    if (desde === hasta) { // SI EL VALOR INICIAL ES IGUAL AL VALOR FINAL
        console.log(`VALOR FINAL ${desde++}`)
        setTimeout(() => {
            console.log("Se ha finalizado el temporizador");
        }, 2000)
        clearInterval(intervalo); // DETIENE EL TEMPORIZADOR
    }
    else{ // SI NO ES IGUAL
        console.log(desde) // IMPRIME
        desde++; // AUMENTA
    }
}, 1000) // MILISEGUNDOS


// DECLARACION DEL setTimeout PARA QUE IMPRIMA CADA SEGUNDO EL NUMERO
// let timeout = setTimeout(function imprimirNumeros(){
//     console.log(`TIMEOUT = ${desde++}`); // IMPRIME EL NUMERO
//     if (desde <= hasta) {
//         setTimeout(imprimirNumeros, 1000) // VUELVE A LLAMAR LA FUNCION PARA QUE SE VUELVA A IMPRIMIR EL NUMERO
//     }
//     else{
//         console.log("Terminaste")
//         clearTimeout(timeout); // TERMINA EL TEMPORIZADOR
//     }
// }, 1000)


// MANEJO DE ERRORES
try {
    if (desde >= hasta) { // ! SI EL VALOR INICIAL ES MAYOR AL VALOR FINAL DETIENE LOS TEMPORIZADORES Y ARROJARA EL ERROR PERSONALIZADO
        clearInterval(intervalo);
        clearTimeout(timeout);
        throw new Error("NO PUEDES COLOCAR EL NUMERO FINAL MAS GRANDE QUE EL INICIAL");
    }
} catch (error) {
    console.error(error);
}

// --------------------------------------------