const app = require('./app.js');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Server trabajando en http://localhost:${PORT}`);
});

server.on('error', (error) => {
    console.log(`Error en el servidor: ${error}`);
});
