/**
 * Crear un objeto proxy usando la clase Proxy
 */

let objeto = {
    nombre: "",
    apellido: "Carreño",
    edad: 18,
    habilidades: [
        "Html",
        "Css",
        "Javascript",
        "Mysql",
        "Java",
        "Java web"
    ]
}

let manejador = {
    set: function(objeto, prop, valor){ 

        // TODO: Valores de entrada del nuevo objeto proxy
        // TODO: objeto esta reciviendo el objeto original
        // TODO: Prop, esta reciviendo la propiedad la cual se esta modificando
        // TODO: Valor, es el valor que tiene dicha propiedad del objeto original

        if (valor === "Juanes") {
            console.log(`Se ha modificado el nombre a (${valor})`);
        }
        else{
            if (valor >= 18) {
                console.log(`Se ha modificado la edad y ahora tiene (${valor})`);
            }
            else{
                console.log("No se a modificado ningun valor del proxy");
            }
        }
    },

    get: function(objeto, prop, valor){

        /**
         * TODO: Este metodo se puede utilzar para poder verificar si se encuentran dichas propiedades de los objetos originales
         * @param objeto Toma el objeto original del arreglo
         * @param prop Toma la propiedad que se esta evaluando del objeto
         * @param valor Toma el valor de la propiedad del objeto que se esta procesando
         */

        if (prop === "habilidades") {
            return `Si se encuentran las habilidades`;
        }
        else{
            return Reflect.get(...arguments);
            // return `No se encontro ninguna coincidencia`;
        }
    }
}

let pro = new Proxy(objeto, manejador)

pro.nombre = "Juanes"
pro.edad = 84551;
// pro.apellido = "Ronaldo"

// console.log(pro.habilidades);
console.log(pro.nombre);