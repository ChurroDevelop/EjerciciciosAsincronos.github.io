/**
 * Crear una función some que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva true si al menos una de las llamadas al callback devolvió true
 */

// Arreglo para utilizar
let arreglo = [1,2,3,4,5,6,7,8,9];

// Metodo el cual se va a utilizar en el some
let metodo = x => x % 2 === 0

// El some busca si almenos un elemento cumple la condicion y devuelve tru, si no devuelve false
console.log(arreglo.some(metodo));