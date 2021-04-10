(()=>{

  // Uso de Let y Const
  const nombre = 'Ricardo Tapia';
  const edad = 23;

  let PERSONAJE = {
    nombre: nombre,
    edad: edad
  };


  // Cree una interfaz que sirva para validar el siguiente objeto
  interface heroe {
      nombre: string,
      artesMarciales: string[]
  };

  const batman : heroe = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  }

  // Convertir esta funcion a una funcion de flecha
  const resultadoDoble = (a:number, b:number):number => (a+b)*2

  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'

  const getAvenger = (
      nombre : string,
      poder ?: string,
      arma : string = 'arco'
  ) =>{
    let mensaje
    mensaje = poder ? 
    `${nombre} tiene el poder de: ${poder} y un arma ${arma}`:
    `${nombre} tiene un ${poder}`;
  }

  class Rectangulo {      
      constructor(
          public base : number,
          public altura : number
      ){} 
    area = ():number => this.base * this.altura;
  }

  const resultado = new Rectangulo (4,8).area();
  console.log(`El area del rectangulo es: ${resultado}`);
  


  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.



})();