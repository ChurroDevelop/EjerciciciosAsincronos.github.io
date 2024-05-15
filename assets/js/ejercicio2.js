/**
 * En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
pesado que demora más de 100 ms en finalizar.
¿Cuándo se ejecutará la función programada y por qué se ejecutará?
a) Después del bucle.
b) Antes del bucle.
c) Al comienzo del bucle.
¿Qué va a mostrar alert()?
 */

let i = 0;

console.log(setTimeout(() => {
    console.log(i);
}, 100))

for(let j = 0; j < 20; j++){
    i++;
}

/**
 * * Primero se declara la variable i, la cual se le asignara el valor de 0
 * * Luego se trata de imprimir una funcion setTimeout() la cual tendra 1000 milisegundo lo que equivale a 1 segundo para que se ejecute
 * * Cuando se ejecuta se imprimira el valor de la i
 * ! PEROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
 * * Luego de ese console.log del setTimeout viene un bucle for, el cual tendra una variable j la cual se le asigna el valor de 0, y hace una condicion la cual es
 * * Si j es menor a 20 j se aumentara el valor de j
 * * Si la condicion se for se cumple el valor de i aumenta de 1 en 1
 * * Y como el setTimeout() es una funcion asincrona se ejecutara como por decirlo asi en segundo plano, pero el i que esta dentro del setTimeout, esta tomando el valor que se le esta haciendo
 * * En cada iteracion del bucle entonces por eso imprime el valor total de las iteraciones del bucle for
 */