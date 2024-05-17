/**
 * Crear una función find que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva el elemento pasado como argumento del primer callback que devuelva true
• sí ningún callback devuelve true, devuelva undefined
 */

// Arreglo con valores String
let arreglo = ["Hola", "Estamos", "En el metodo", "Find"];

// Metodo que se utilizara para el find, cojera cada elemento y los buscara, si no lo encuentra imprimira en consola "undefined"
let metodo = elemento => elemento === "Find";

// Funciona igual que hacer esto, x se comporta como el elemento que se esta procesando
console.log(arreglo.find((x) => {
    return x === "Hola"
}))

// Imprimir el metodo Find
console.log(arreglo.find(metodo))