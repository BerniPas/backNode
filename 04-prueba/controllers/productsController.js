
const fs = require('node:fs');


const mostrarFormulario = (req, res) => {
    res.render('registroProductos', {
        title: 'Registrar Producto'
    });
}

const cargarFormulario = (req, res) => {

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

    //creamos un array de productos
    let productos = [];

    //cargamos el producto en el array
    productos.push(producto);

    //guardamos el producto en un archivo .txt sincrónico
    fs.writeFileSync('archivos/productosSync.txt', JSON.stringify(productos));


    //guardamos el producto en un archivo .txt asincrónico
    fs.writeFile('archivos/productosAsync.txt', JSON.stringify(productos), (err) => {
        if (err) {
            console.log(err);
            fs.writeFileSync('archivos/error.txt', err);
        }
    });

    //enviamos el producto como respuesta de tipo json
    res.json({
        nombre: nombre,
        precio: precio,
        imagen: imagen,
        stock: stock
    });
}

module.exports = {
    mostrarFormulario, 
    cargarFormulario
}