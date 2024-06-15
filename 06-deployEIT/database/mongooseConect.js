
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_LOCAL_MONGOOSE = process.env.MONGO_LOCAL_MONGOOSE;
const MONGO_ATLAS_MONGOOSE = process.env.MONGO_ATLAS_MONGOOSE;

console.log(MONGO_LOCAL_MONGOOSE);
console.log(MONGO_ATLAS_MONGOOSE);

const conectarMongoose = mongoose.connect(MONGO_ATLAS_MONGOOSE).then(
    () => {
        console.log('=======================================');
        console.log(`Conexion realizada correctamente a: ${MONGO_ATLAS_MONGOOSE}`);
    },
    err => {
        console.log('=======================================');
        console.log(`Error en la conexión: ${err}`);
    });

export default conectarMongoose;