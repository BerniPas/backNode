//desestructuración 
//const { MongoClient } = require("mongodb");

const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();

const MONGO_LOCAL = process.env.MONGO_LOCAL;
const MONGO_ATLAS = process.env.MONGO_ATLAS;

console.log(MONGO_LOCAL);
console.log(MONGO_ATLAS);//falta configurar

const client = new MongoClient(MONGO_LOCAL);

//selecciono la databse
const database = 'educacionit';

const conectarDB = async () => {
    try{
        //me cnnecto a la base de datos
        await client.connect();

        //selecciono la base de datos
        const db = client.db(database);

        //creamos una colección
        //const collection = db.createCollection('documents');

        //insertamos un documento
        db.collection('documents').insertOne({
            nombre: 'Pepe',
            apellido: 'Pérez',
            edad: 25,
            provincia: 'Buenos Aires'
        });

        console.log('=======================================');
        console.log(`Conexion realizada correctamente a: ${MONGO_LOCAL} - Base de datos: ${database}`);
        console.log('=======================================');
    }catch(error){
        console.log('=======================================');
        console.log(`Error en la conexión: ${error}`);
        console.log('=======================================');
    }
};




conectarDB();
//module.exports = conectarDB;

