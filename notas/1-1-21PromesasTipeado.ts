(() => {
    const retirarDinero= (montoRetirar : number):Promise<number> =>{
        let dineroActual = 1000;
        return new Promise( (resolve, reject) => {
            if(montoRetirar >= dineroActual){
                reject('No hay suficiente fondos');
            }else{
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        } );
    }

    retirarDinero(1500).then((res)=>{
        console.log(`Me quedan ${res}`);        
    }).catch((err)=>{
        console.warn(err);        
    });

})();