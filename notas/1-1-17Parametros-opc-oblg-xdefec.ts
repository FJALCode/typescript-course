(function () {

    function activar ( quien ?: string, ){
        if (quien) {
            console.log(`La casa de ${quien}.`); 
        } else {
            console.log('La casa de Juan');
            
        }  
    }

    activar('Fernando');


})();