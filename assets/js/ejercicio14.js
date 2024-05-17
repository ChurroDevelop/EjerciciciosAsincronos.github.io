/**
 * Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
diga "Operación completada". Utiliza async/await.
 */

let asincrona = async () =>{
    let datos = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    let respuesta = await datos.json();
    console.log(datos)
    console.log(respuesta);
}

setTimeout(() => {
    asincrona()
}, 3000)