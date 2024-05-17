/**
 * Crear una función every que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva true si todas las llamadas al callback devolvieron true
 */

// Arreglo a utilizar
let array = [2,5,7,8,4];

// function verificar(elemento , index, arreglo){
//     return elemento < 10;
// }

// Metodo every, lo que hace es buscar en el arreglo utilizado si todos los elementos cumplen la condicion arrojara true
// si un elemento no cumple la condicion arrojara false
console.log(array.every((elemento) => {
    return elemento < 10;
}));