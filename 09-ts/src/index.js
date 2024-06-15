"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hola_1 = require("./hola");
console.log('Hello TypeScript!');
//varianles en ts
//lenguaje fuertemente tipado
var nombre = '';
var edad = 20;
//podemos declarar variables con dos tipos de datos
var dni;
var direccion = 'Calle falsa 123';
var estudiante = true;
//funciones en ts
var dameDatos = function (nombre, edad, direccion, dni) {
    var data = 50;
    return "hola ".concat(nombre, " y tienes ").concat(edad, " a\u00F1os y tu direccion es ").concat(direccion, " y tu dni es ").concat(dni);
};
//retornamos números
var dameNumero = function (nombre, edad, direccion) {
    var data = 50;
    return data;
};
//imprimimos la importación de datos
console.log(hola_1.default);
//ejecutamos las funciones
console.log(dameDatos('Juan', 20, direccion, 1245789));
console.log('================================================');
console.log(dameDatos('Juan', 20, direccion, '55555648'));
console.log('================================================');
//deveuelve un número
console.log(dameNumero('Juan', 20, direccion));
console.log('================================================');
//arreglo de datos 
var alumnos;
alumnos = ['Juan', 'Pedro', 'Maria', 'Ana'];
for (var i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i]);
}
console.log('================================================');
