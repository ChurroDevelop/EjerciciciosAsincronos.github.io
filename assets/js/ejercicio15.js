/**
 * Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
"Error: Promise rechazada".
 */

let promesa = (ms, num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 30) {
                resolve("Ha cumplido los estandares, PROMESA ACEPTADA")
            }
            else{
                reject("Nos has cumplido, PROMESA RECHAZADA");
            }
        }, ms);
    })
}

promesa(3000, 25)
    .then((respuesta) => {
        console.log(respuesta);
    })
    .catch((err) => {
        console.error(`Error: ${err}`);
    })
    .finally(() => {
        setTimeout(() => {
            console.log("Promesa terminada")
        }, 2000);
    });