/**
 * Crea una Promise que se resuelva después de 3 segundos y luego imprima "Promise
resuelta" cuando se cumpla
 */

// Funcion para la promesa que tomara como parametro la cantidad de milisegundos 
let promesa = (s) => {
    // Retorna una nueva promesa la funcion
    return new Promise((resolve, reject) => { // tendra dos parametros la promesa el cual es la respuesta y el error
        setTimeout(() => { // temporizador para que se ejecute de forma asincrona
            if (true) {
                resolve("La promesa a sido resuelta"); // Imprime si la promesa fue cumplida o aceptada
            }
            else{
                reject("Ha ocurrido un error en la promesa"); // Imprime si la promesa fue rechazada
            }
        }, s) // tiempo de ejecucion de la promesa
    })
}

promesa(5000) // Llamando a la funcion pasandole el tiempo en ms como argumento
    .then((respuesta) => { // .then para la ejecucion de las promesas aceptadas
        console.log(respuesta);
    })
    .catch((error) => { // .catch para la ejecucion de las promesas rechazadas
        console.error(error);
    })
    .finally(() => { // .finally, para que se ejecute independientemente si la promesa fue aceptada o rechazada
        setTimeout(() => {
            console.log("Esta parte se ejecuta siempre despues de la promesa");
        }, 2000)
    })