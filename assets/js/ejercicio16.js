/**
 * Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
y mostrar el resultado final.
*/

function* generador() {
    yield 1
    yield 2
    yield 3
    return 4
}

let objeto = {
    id: 1
}

console.log(JSON.stringify(objeto))

let x = generador()

let uno = x.next();
let dos = x.next();
let tres = x.next()
let cuatro = x.next();

console.log(JSON.stringify(uno));
console.log(JSON.stringify(dos));
console.log(JSON.stringify(tres));
console.log(JSON.stringify(cuatro));