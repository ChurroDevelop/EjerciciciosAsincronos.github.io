/**
 * Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.
 */

const promesa = (tiempo) => { // Creando una funcion que retornara una unica promesa
    return new Promise((resolve, reject) => { // Return de la promesa
        setTimeout(() => { // Temporizador con el tiempo que se la pasa como argumento
            resolve(`Ha sido resuelta despues de ${tiempo} milisegundos`); // Mensaje a retornar para imprimir
            console.log(`Se completo la promesa con ${tiempo} milisegundos`); // Mensaje para la confirmacion de la promesa
        }, tiempo)
    })
}

// TODO: El Promise.all, acepta un conjunto de promesas que estara ejecutando 1 por 1, los toma como un array
// TODO: Como se pasan como un arreglo, si todo retornan el resolve, todas se ejecutaran por el .then, en cambio
// TODO: Si alguna promesa da false, se ira inmediantamente por el .catch, y atrapara y ejecutara el error
// TODO: Teniendo en cuenta que se retornan como un arreglo, se le pueden aplicar metodos del objeto Array()

Promise.all([promesa(1000), promesa(3000), promesa(5000)]) // Pasar la cantidad de promesas a ejecutar
    .then((resultado) => { // Devuelve el resolve de las promesas
        setTimeout(() => {
            console.log(`Promesas completadas`)
            console.log("----------------")
            resultado.forEach((mensaje, index) => { // Metodos propios de los arreglos
                console.log(`Mensaje --- ${mensaje} \n posicion ${index}`);
            })
        }, 2000)
    })
    .catch((err) => {
        console.log("Algo ha fallado")
    })

// const erorres = (ms) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (ms === 3000) {
//                 reject(`No se pudo resolver la promesa con ${ms} segundos`);
//                 console.log(`Promesa con ${ms} Rechazada`)
//             }
//             else{
//                 resolve(`Se pudo completar la promesa con ${ms} segundos`);
//                 console.log(`Promesa con ${ms} completada`);
//             }
//         }, ms)
//     })
// }

// Promise.all([erorres(2000), erorres(3000), erorres(5000)])
//     .then((aceptado) => {
//         setTimeout(() => {
//             console.log("Promesas completadas");
//             console.log("---------------------");
//             aceptado.forEach((elemento, index) => {
//                 console.log(`Mensaje --- ${elemento} \n Posicicion ${index}`);
//             })
//         }, 2000)
//     })
//     .catch((err) => {
//         setTimeout(() => {
//             console.log(err);
//         }, 3000)
//     })