"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
//importamos la función de conexión a base de datos de mongodb
//import conectarDB from './database/conexion.js';
//importamos la función de conexión a base de datos de mongoose
//import conectarMongoose from './database/mongooseConect.js';
//ejecutamos la función de conexión a base de datos a la librería mongodb
//conectarDB();
//ejecutamos la función de conexión a base de datos a la librería mongoose
//ei es que creamos una función para conectar a la base de datos con mongoose
//conectarMongoose();
const server = app_1.default.listen(PORT, () => {
    console.log(`Server trabajando en http://localhost:${PORT}`);
});
server.on('error', (error) => {
    console.log(`Error en el servidor: ${error}`);
});
