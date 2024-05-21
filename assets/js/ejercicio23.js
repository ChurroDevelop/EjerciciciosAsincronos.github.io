/**
 * Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
try/catch para mostrar un mensaje de error en caso de fallo.
 */


let cargar = (tiempo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let peticion = fetch("../json/ejercicio23.json");
            peticion
                .then((resultado) => {
                    return resultado.json();
                })
                .then((data) => {

                    // data.jugadores.map((elemento, index) => {
                    //     data.jugadores[index].habilidades.forEach((e) => {
                    //         if (e === "Duende de fuego") {
                    //             reject(`La habilidad (${e}) no esta disponible`);
                    //         }
                    //     })
                    // })
                    resolve(data.jugadores);
                })
                .catch((e) => {
                    console.log(e)
                })
        }, tiempo)
    })
}   

cargar(3000)
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((e) => {
        console.log(e);
    })