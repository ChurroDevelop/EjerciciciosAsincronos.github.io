/**
 * Crear una función filter que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• sí dicho callback devuelve true, pushea el elemento a un nuevo array
• devuelva el array final con los elementos que pasaron el "filtro".
 */

let cantidad = 5
let arreglo = [5,4,1,3,7,8,2,5]
// for(let i = 0; i < cantidad; i++){
//     arreglo[i] = parseInt(prompt(`Ingrese el numero ${i}`))
// }

let copia = arreglo.filter((elemento) => { // [0--5,1--5]
    if (elemento === 5){
        return elemento
    }
})

console.table(copia)