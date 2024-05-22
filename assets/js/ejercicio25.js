/**
 * 25. Usar un proxy para la validación de los valores de propiedades
• Cuando declaremos que el atributo es numérico solo permitimos que ingresen
números
• Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
letras
• Cuando declaremos que el atributo es un email, solo permitimos que ingresen
correos
• Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
fechas
• Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
al final de estos y se debe mostrar el error personalizado por consola
 */

let persona = {
    nombre: "Churro",
    apellido: "Perez",
    tecnologias: [
        "Mysql",
        "Node Js",
        "React"
    ],
    edad: 19,
    profesion: "Tecnologo desarrollo de software",
    email: "ChurroPerez25@gmail.com",
    fechaNacimiento: "25/10/2005"
}

let manejador = {
    set: ((obj, prop, value) => {
        const numeros = /[0-9]/;
        const letras = /[a-zA-Z]/g;
        const email = /^.+@gmail\.com$/i;
        const fechas = /^\d{2}\/(0[1-9]|1[0-2])\/\d{4}$/;
        const espacios = /\s/;
        try {
            if (espacios.test(value) === false) {
                setTimeout(() => {
                    if (numeros.test(value) === true && prop === "edad") {
                        console.log(`La propiedad: ${prop} \n Cumple con la expresion regular de numeros: ${value}`)
                    }
                    else if (letras.test(value) === true) {
                        console.log(`La propiedad: ${prop} \n Cumple con la expresion regular de letras: ${value}`)
                        if (prop === "email" && email.test(value) === true) {
                            console.log(`La propiedad ${prop} \n Cumple con la expresion regulas de email: ${value}`)
                        }
                        // else{
                        //     if (email.test(value) === false) {
                        //         throw new Error("El correo no cumple con las condiciones de la expresion regular")
                        //     }
                        // }
                    }
                    else if (fechas.test(value) === true && prop === "fechaNacimiento") {
                        console.log(`La propiedad: ${prop} \n Cumple con la expresion regular de Fechas: ${value}`);
                    }
                    else{
                        throw new Error("No se a encontrado ninguna otra validacion")
                    }
                }, 3000)    
            }
            else{
                throw new Error("No cumple con los espacios en blanco, debe escribirlo sin espacios en blanco")
            }
        } catch (error) {
            console.log(error)
        }
    })
}


let proxy = new Proxy(persona, manejador)

proxy.nombre = "Jhon"
proxy.edad = 1;
proxy.email = "ikdmfd.@gmail.com"
proxy.fechaNacimiento = "08/09/2010"
proxy.apellido = "Colmenares"