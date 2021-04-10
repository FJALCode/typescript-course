(() => {
    const aveanger = {
        nombre: 'Steve',
        clave: 'Capitan América',
        poder: 'Droga'
    }

    const extraer = ( {nombre, poder} : any) => {        
        // console.log('hola');        
        console.log(nombre);
        console.log(poder);
    }
    // const { nombre, clave, poder } = aveanger

    // extraer (aveanger);

    const aveangers : string[] = ['Thor','Ironman','Spiderman'];
    
    // console.log(aveangers[0]);
    // console.log(aveangers[1]);
    // console.log(aveangers[2]);

    const extraerArr = ( [,, arana] : string[]) => {
        console.log(arana); 
    }
    // const [,, arana] = aveangers;
    // console.log(arana);
    extraerArr(aveangers);
    
    

    



})();