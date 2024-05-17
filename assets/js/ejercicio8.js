/**
 * Crear una función findIndex que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva el índice del elemento pasado como argumento del primer callback que
devuelva true
• sí ningún callback devuelve true, devuelva undefined
 */

// Arreglo a utilizar 
let numeros = [5,8,10,12,15];

// Metodo para el findIndex, lo que hace es procesar cada elemento del arreglo y retornara la posicicion del primer elemento que cumpla la condicion
let metodo = elemento => elemento > 13;

// Metodo findIndex, retorna 4, porque se encontro el elemento en el indice 4 del arreglo original
// donde no se encontrara algun numero que cumpliera la condicion arrojara -1
console.log(numeros.findIndex(metodo));