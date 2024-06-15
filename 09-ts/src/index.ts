
import hola from './hola';

console.log('Hello TypeScript!');

//varianles en ts
//lenguaje fuertemente tipado
let nombre: string = '';
let edad: number = 20;

//podemos declarar variables con dos tipos de datos
let dni: number | string;


const direccion: string ='Calle falsa 123';
let estudiante: boolean = true;

//funciones en ts
const dameDatos = (nombre:string, edad:number, direccion: string, dni: number | string): string => {

    let data: number = 50;
    return `hola ${nombre} y tienes ${edad} años y tu direccion es ${direccion} y tu dni es ${dni}`;

};


//retornamos números
const dameNumero = (nombre:string, edad:number, direccion: string): number => {

    let data: number = 50;
    return data;

};

//imprimimos la importación de datos
console.log(hola);

//ejecutamos las funciones
console.log(dameDatos('Juan', 20, direccion, 1245789));
console.log('================================================');
console.log(dameDatos('Juan', 20, direccion, '55555648'));
console.log('================================================');

//deveuelve un número
console.log(dameNumero('Juan', 20, direccion));

console.log('================================================');

//arreglo de datos 
let alumnos: string[];

alumnos = ['Juan', 'Pedro', 'Maria', 'Ana'];

for (let i: number = 0; i < alumnos.length; i++) {
    console.log(alumnos[i]);
}


console.log('================================================');





