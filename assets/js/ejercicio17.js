/**
 * Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
obtenidos en la consola.
 */

function cargarJson(){
    // TODO: PETICION HTTP
    setTimeout(() => {
        fetch("../json/ejercicio17.json") // Ruta de donde se consumira el formato en Json
        .then((response) => { // como es una promesa tiene sus metodos, se utiliza el then para mostrar respuesta
            return response.json(); // se hace el casteo de esa respuesta del Json y lo transforma a un Json
        })
        .then((datos) => {
            // Imprime todo lo que hay en el formato Json
            console.log(datos)
            // Imprime las habilidades, como estan almacenados en un array, se utiliza el metodo forEach
            datos.habilidades.forEach((elemento, index) => {
                console.log(`Habilidad ${index} es: ${elemento}`);
            })
        })
        .catch((err) => {
            console.log("Error no se encontro", err)
        })
    }, 2000)
}

cargarJson() // Llamar a la funcion de consumidor de Json