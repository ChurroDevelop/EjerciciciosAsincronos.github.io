/**
 * . Crea una función asincrónica que realice una llamada a un archivo local en formato json y
luego manipule los datos recibidos para mostrar información específica.
 */

let asincrona = async () => {
    let peticion = await fetch("../json/ejercicio19.json")
    let data = await peticion.json();
    setTimeout(() => {
        console.log(data)
    }, 2000)

    console.log(`Datos antes del cambio de nombre`, data.usuario[0]);
    data.usuario[0].nombre = prompt("Ingrese el nuevo nombre");
    for(;true;){
        data.usuario[0].edad = parseInt(prompt("Ingrese la nueva edad"));
        try {
            if (data.usuario[0].edad >= 80) {
                throw new Error("Debes colocar una edad menor a 80");
            }
            else{
                break;
            }
        } catch (error) {
            alert(error);
        }
    }
    console.log(data.usuario[0]);
}

asincrona()