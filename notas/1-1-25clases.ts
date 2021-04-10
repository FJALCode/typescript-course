(() => {

    class AvengerDeInfinityWar {
        constructor(
            public nombre: string,
            public equipo: string,
            public nombreReal?: string,    
            public puedePelear?: boolean,
            public peleasGanadas: number = 1){}
    }

    const antMan = new AvengerDeInfinityWar('Antman','Capi');

    console.log(antMan);
})();