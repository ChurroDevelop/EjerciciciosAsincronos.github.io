/**
 * Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo,
mostrar solo los nombres que comiencen con "A").
 */

function datos(){ // Funcion para mostrar los datos del Json
    setTimeout(() => { // Tiempo de espera para la peticion al json
        fetch("../json/ejercicio18.json") // Peticion al formato Json
            .then((respuesta) => {
                return respuesta.json(); // retornar el casteo para el Json
            })
            .then((data) => {
                data.usuarios.forEach((elemento, index) => { // Iterar sobre cada elemento del arreglo que tiene el formato Json
                    console.log(`Procesando elemento ${index}`)
                    if(elemento.nombre.toUpperCase().charAt(0) === "C" && elemento.edad >= 18){ // Condicionales para el primer caracter del nombre y la edad
                        console.log(`El nombre ${elemento.nombre} empieza por C \n Esta en la posicion ${index}`)
                    }
                    else{
                        console.error("El nombre no empieza por la letra C, SIGUIENTE ELEMENTO")
                    }
                    console.log("-------------------------------------");
                })
                console.log(data)
            })
    }, 2000)
}

datos() // Llamar la funcion para obtener los datos y tener las validaciones