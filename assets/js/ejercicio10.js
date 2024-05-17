/**
 * . Crear una función takeWhile que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva un array con los elementos hasta el primer callback que devolvió false
• (Inverso del dropWhile)
 */

// Utilizando la libreria que se instalo
let funcion = require("lodash");

let arreglo = [-1,-8,-8,-5,10,20,42]; // Arreglo a utilizar

let metodo = _.takeWhile(arreglo, (x) => { // metodo takeWhile para buscar los elementos que cumplen con la condicion si retorna true, lo almacenara den otra array
    // si retorna false, dejara de ejecutarse y no se agregara a la nueva array
    return x < 0
})

console.log(`Arreglo original: ${arreglo}`); // Imprimir el arreglo origina
console.log(`Elementos agregados al nuevo arreglo: ${metodo}`) // Imprimir el arreglo despues del metodo takeWhile
