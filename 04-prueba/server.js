const app = require('./app.js');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;

//importamos la función de conexión a base de datos
const conectarDB = require('./database/conexion.js');

//ejecutamos la función de conexión a base de datos
conectarDB();

const server = app.listen(PORT, () => {
    console.log(`Server trabajando en http://localhost:${PORT}`);
});

server.on('error', (error) => {
    console.log(`Error en el servidor: ${error}`);
});
