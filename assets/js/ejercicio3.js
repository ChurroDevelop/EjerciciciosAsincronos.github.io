/**
 * Crear una función map que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• obtenga el resultado
• lo pushee a un nuevo array
• devuelva el array final con el resultado de cada una de las llamadas al callback.
 */

let array = [1,2,3,4,5,6,7,8,9];

let nueva = array.map((valor) => {
    return valor * 3
})

console.table(nueva)