const path = require('node:path');

const bienvenida = (req, res) => {
    res.render('index');
}

const descargas = (req, res) => {
    console.log('Entro a descarga');
    console.log(path.join(__dirname, '../public/descarga.txt'));
    console.log(path.resolve(__dirname, '../public/descarga.txt'));
    res.download(path.join(__dirname, '../public/descarga.txt'));
}

const home = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html')); 
}

const registro = (req, res) => {

    res.render('registro');

}

const registarUsuario = (req, res) => {

    const {
        nombre, 
        apellido, 
        email, 
        password
    } = req.body;

    console.log(`Nombre: ${nombre} Apellido: ${apellido} Email: ${email} Password: ${password}`);

    res.send('Usuario Registrado');
}


const guardar = (req, res) => {
    const nombre = req.body.nombre;
    console.log(nombre);
    res.status(201).send('Guardado Nombre: ' + nombre); 
}

const formulario = (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    const apellido = req.body.apellido;

    console.log(`Hola ${nombre} ${email} ${apellido}`);

/*     const {
        nombre, 
        apellido, 
        email
    } = req.body; */
    
    res.json({
        Nombre: nombre,
        Apellido: apellido,
        Email: email
    });

}

const actualizar = (req, res) => {
    res.send('Actualizando');
}

const borrar = (req, res) => {
    res.send('Borrando');    
}

const template = (req, res) => {

    let nombre = 'Juan'

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mi Template</title>
        </head>
        <body>
            <h1>Este es mi template ${nombre}</h1>
        </body>
        </html>
    `);
}

const login = (req, res) => {

    res.send(`<form>
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre">
    </form>`)

}


module.exports = {
    descargas,
    home,
    bienvenida,
    registro,
    registarUsuario,
    guardar, 
    formulario,
    actualizar,
    borrar,
    template
}