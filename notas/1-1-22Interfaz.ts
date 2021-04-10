(() => {

    interface xMen {
        nombre : string,
        edad : number,
        poder ?: string
    }


    const enviarMision = (xmen : xMen) =>{
        console.log(`Enviando a ${xmen.nombre} a la misión`);        
    };

    const regresarMision = (xmen : xMen) =>{
        console.log(`Enviando a ${xmen.nombre} a la misión`);        
    };

    const wolverine : xMen = {
        nombre : 'Logan',
        edad : 60
    }

    enviarMision(wolverine);
    regresarMision(wolverine);


})();