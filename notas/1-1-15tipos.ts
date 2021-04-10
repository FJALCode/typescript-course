
// Tipos de datos

(function () {
    
    let mensaje: string = 'Hola';
    let numero: number = 123
    let booleano: boolean = true; // false
    let hoy: Date = new Date();

    let cualquiercosa: string | Number | Date | boolean;
    cualquiercosa = mensaje;
    cualquiercosa = numero;
    cualquiercosa = booleano;
    cualquiercosa = hoy;

    let spiderman = {
        nombre: 'Peter',
        edad : 30
    };
    spiderman = {
        nombre: 'Juan',
        edad: 8
    }

})();


//Variables Let y Const

/*
(function () {
    
    let mensaje = 'Hola'; // variable básica en typescript cambia su valor
    const prueba ='hola'
    // console.log(mensaje);

    if (true) {
       let mensaje = 'test';        
    }
    
    console.log(mensaje);
    

})();
*/

// Funciones básicas
/*
(function () {

    /**
     * Función que
     * 
     * @method salidar
     * @param {string} nombre
     */
    /*
    function saludar(nombre: string) {
        console.table('Hola que tal ' + nombre); // Hola Logan
    }


    const wolverine = {
        nombre: 'Logan'
    };


    saludar(wolverine.nombre);
})();
*/




