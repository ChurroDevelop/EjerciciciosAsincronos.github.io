/**
 * Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
Promise.allSettled() para obtener información sobre el estado de todas las Promises.
 */


const promesa = (tiempo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (tiempo === 3000 || tiempo === 6000) {
                console.log(`Se rechazo la promesa con ${tiempo} ms`)
                reject(`Hubo un error en la promesa con tiempo de ${tiempo} ms`);
            }
            else{
                console.log(`Se completo la promesa con ${tiempo} ms`)
                resolve(`Se completo la promesa con ${tiempo} ms`)
            }
        }, tiempo)
    })
}

/**
 * TODO: El Promise.allSettlet(), recibe un arreglo de promesas, donde si en algun momento, se rechaza alguna promesa
 * TODO: Se ejecutara de igual manera, y devolvera una matriz como valor, donde se mostrara un arreglo, con valores de objeto
 * TODO: Donde mostrara el estado de la promesa, y donde mostrara el mensaje que le pusimos a ese resolve, o reject.
 */

Promise.allSettled([
    promesa(2000),
    promesa(3000),
    promesa(5000),
    promesa(6000)
])
    .then((result) => {
        setTimeout(() => {
            console.log(result);
            result.map((elemento, index) => {
                console.log(`Elemento ${index} del arreglo \n ${elemento.value || elemento.reason} \n Estado de la promesa ${elemento.status}`);
            })
        }, 2000)
    })
    .catch((err) => {
        setTimeout(() => {
            console.error(`Error ---- ${err}`)
        }, 5000)
    })