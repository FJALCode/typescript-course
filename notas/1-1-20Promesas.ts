(() => {
    console.log('Inicio');

    const prom1 = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve('Se termino la promesa');
            // reject('Se rejecto la promesa');
        },1000);
    });

    prom1
        .then(mensaje => console.log(mensaje))
        .catch(err => console.warn(err));


    console.log('Fin');
    
    

})();