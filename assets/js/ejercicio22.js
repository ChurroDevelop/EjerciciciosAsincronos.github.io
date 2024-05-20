/**
 * Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
lista de elementos uno por uno.
 */

let asincrona = async (elemento, indice, delay) => {
    let proceso = await (`Palabra ---- ${elemento}`);
    setTimeout(() => {
        console.log(`Indice: ${indice} \n ${proceso}`);
    }, delay * indice)
}

let arreglo = ["Hola", "Estoy", "Aprendiendo", "JavaScript", "Asincrono", "Para", "Aprender", "Mas"];

arreglo.forEach((valor, index) => {
    asincrona(valor, index, 2000)
})