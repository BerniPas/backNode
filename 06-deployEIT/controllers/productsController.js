
import fs from 'node:fs';


import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const MONGO_LOCAL = process.env.MONGO_LOCAL;
const MONGO_ATLAS = process.env.MONGO_ATLAS;
const client = new MongoClient(MONGO_ATLAS);
//selecciono la databse
const database = 'educacionit';

//creamos un array de productos
let productos = [];


const mostrarFormulario = (req, res) => {
    res.render('registroProductos', {
        title: 'Registrar Producto'
    });
}

const cargarFormulario = async (req, res) => {

    //desestructuramos los datos del body
    const { nombre, precio, imagen, stock } = req.body;

    //creamos un objeto con los datos del producto
    const producto = {
        nombreProducto: nombre,
        precioProducto: precio,
        imagenProducto: imagen,
        stockProducto: stock
    };

    //imprimimos el producto
    console.log(producto);

    //cargamos el producto en el array
    productos.push(producto);

    //guardamos el producto en un archivo .txt sincrónico
    //fs.writeFileSync('archivos/productosSync.txt', JSON.stringify(productos));

    await client.connect();

    //guardamos los datos en nuestra databese de mongo local
    const db = client.db(database);

    //creamos una colección
    //const collection = db.createCollection('documents');

    //insertamos un documento
    db.collection('documents').insertOne(producto);

    //guardamos el producto en un archivo .txt asincrónico
    //por default el dato se sobreescribe en el archivo
/*     fs.writeFile('archivos/productosAsync.txt', JSON.stringify(productos), (err) => {
        if (err) {
            console.log(err);
            fs.writeFileSync('archivos/error.txt', err);
        }
    }); */

/*     fs.appendFile('archivos/productosAsync.txt', JSON.stringify(productos), (err) => {
        if (err) {
            console.log(err);
            fs.writeFileSync('archivos/error.txt', err);
        }
    }); */

    //enviamos el producto como respuesta de tipo json
    res.json({
        nombre: nombre,
        precio: precio,
        imagen: imagen,
        stock: stock
    });
}

export { mostrarFormulario, cargarFormulario };

//sólo podemos realizar una exportación por default
//export default cargarFormulario;