/**
 * Crear una función dropWhile que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva un array con los elementos a partir del primer callback que devolvió false
• (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el
callback de true, no los agrega, cuando el callback da false por primera vez agrega
todos los elementos restantes a partir de dicho elemento inclusive)
 */
let metodo = require("underscore-contrib") // Utilizar la libreria

let arreglo = [-1,-5,-2-4,5,8,7,5,6,1,]; // Arreglo a aplicar el dropWhile

let funcion = _.dropWhile(arreglo, function(x){
    return x < 0; // Elimina los elementos que estan por debajo de 0
})

console.log(`Array original: ${arreglo}`);
console.log(`Elementos Restantes del array: ${funcion}`);
// Elimina los elementos [-1,-5,-2,-4];