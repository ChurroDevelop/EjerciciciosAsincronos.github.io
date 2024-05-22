/**
 * Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
y mostrar el resultado final.
*/

// Se crea una nueva promesa
let suma = 0
new Promise((resolve) => {
    setTimeout(() => {
        resolve(5) // El valor inicial que devolvera la promesa como respuesta aceptada sera 5
    }, 3000)
})
    .then((respuesta) => { // aqui toma la respuesta de la primera promesa
        return new Promise((resolve) => { // se crea una nueva promesa que retornara un a condicion
            setTimeout(() => {
                console.log(`Numero inicial: ${respuesta}`) // imprime el valor inicial de la promesa
                suma += respuesta * 2; // Suma en cada promesa 
                resolve(respuesta * 2) // El resolve de la nueva promesa que se retornda, tomara el valor de la respuesta de la primer promesa
                                        // y asi sucesivamente en cada .then de las promesas
            }, 3000)
        })
    })
    .then((respuesta) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Numero despues de la primer promesa encadenada: ${respuesta}`)
                suma += respuesta * 2;
                resolve(respuesta * 2)
            }, 3000)
        })
    })
    .then((respuesta) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Numero despues de la segunda promesa encadenada: ${respuesta}`)
                suma += respuesta * 2;
                resolve(respuesta * 2)
            }, 3000)
        })
    })
    .then((respuesta) => {
        setTimeout(() => {
            console.log(`Numero al final de las promesas encadenadas \n Se multiplico 3 veces por 2: ${respuesta}`); // Imprime el resultado final de la promesa
            console.log(`La suma de las promesas encadenadas es ${suma}`); 
        }, 3000)
    })

