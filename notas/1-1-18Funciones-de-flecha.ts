(function () {

    const miFuncion = function (a: string) {
        return a;
    }

    const miFuncionF = (a: string) => a;

    // console.log(miFuncion('Hola'));
    // console.log(miFuncionF('Que Tal'));

    const sumarN = function (a: number, b: number) {
        return a + b;
    }

    const sumarF = (a: number, b: number) => a + b;

    // console.log(sumarN(4, 5));
    // console.log(sumarF(6, 7));

    const hulk = {
        nombre: 'Hulk',
        smash() {
            // setTimeout( function () {
            //     console.log(`${this.nombre} Smash!!!`);    
            // }, 1000);

            setTimeout(() => {
                console.log(`${this.nombre} Smash!!!`);    
            }, 1000);            
            
        }
    }
    hulk.smash();


})();