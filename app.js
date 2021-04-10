"use strict";
(() => {
    // Uso de Let y Const
    const nombre = 'Ricardo Tapia';
    const edad = 23;
    let PERSONAJE = {
        nombre: nombre,
        edad: edad
    };
    ;
    const batman = {
        nombre: 'Bruno Díaz',
        artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
    };
    // Convertir esta funcion a una funcion de flecha
    const resultadoDoble = (a, b) => (a + b) * 2;
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    const getAvenger = (nombre, poder, arma = 'arco') => {
        let mensaje;
        mensaje = poder ?
            `${nombre} tiene el poder de: ${poder} y un arma ${arma}` :
            `${nombre} tiene un ${poder}`;
    };
    class Rectangulo {
        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
            this.area = () => this.base * this.altura;
        }
    }
    const resultado = new Rectangulo(4, 8).area();
    console.log(`El area del rectangulo es: ${resultado}`);
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.
})();
