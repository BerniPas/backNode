import Producto from '../models/productModels.js';
//const Productos = new Producto();

import { request, response } from 'express';

/* GET users listing. */
const mostrarFormulario = (req, res) => {
    res.render('mongooseProduct', {
        title: 'Registrar Producto'
    });
};

//insertamos datos en la database
const cargarFormulario =  async (req, res) => {

    //desestructuramos los datos del body
    const { nombre, precio, imagen, stock } = req.body;
    
    try {
        
        const producto = {
            nombreProducto: nombre,
            precioProducto: precio,
            imagenProducto: imagen,
            stockProducto: stock
        };
        
        console.log(producto);

        //creamos un nuevo producto
        const datoProducto = new Producto(producto);

        await datoProducto.save()

        return res.render('productoCargado');

    } catch (error) {
        console.log(error);
        return res.render('error', {
            message: error
        });

    }

};

//listar todos los productos
const listarProductosTabla = async (req, res) =>{

    try {

        //buscamos todos los productos
        const listaProductos = await Producto.find();

        //mostramos los productos en consola
        console.log(listaProductos);
        
        //renderizamos la vista listarProductos y enviamos los productos
        return res.render('listarProductos',{
            message: 'Vienen todos los productos',
            productos: listaProductos
        });

    } catch (error) {

        console.log(error);

        return res.render('error',{
            message: 'Nuestro ingenieros estan trabajando en el problema, vuelva mas tarde'
        });

    }
};


const listarProductosCards = async (req, res) =>{

    try {

        //buscamos todos los productos
        const listaProductos = await Producto.find();

        //mostramos los productos en consola
        console.log(listaProductos);
        
        //renderizamos la vista listarProductos y enviamos los productos
        return res.render('listarCards',{
            message: 'Vienen todos los productos',
            productos: listaProductos
        });

    } catch (error) {

        console.log(error);

        return res.render('error',{
            message: 'Nuestro ingenieros estan trabajando en el problema, vuelva mas tarde'
        });

    }

}

//obtener un producto por descripción
const mostrarDescripcionProducto = async (req, res) =>{

    const id = req.params._id
    
    console.log(id);

    try {

        const productoBuscado = await Producto.findById({_id: id});

        //si no encontramos el producto
        if(!productoBuscado){
            res.render('descripcionProducto',{
                menssage: 'Sin stock del Producto'
            });
        }
        
        res.render('descripcionProducto',{
            productoBuscado: productoBuscado
        });
    } catch (error) {
        

        console.log(error);

        return res.render('error',{
            message: 'Nuestro ingenieros estan trabajando en el problema, vuelva mas tarde'
        });

    }

}

const eliminarProducto = async (req = request, res = response) =>{

    const id = req.params._id;
    
    console.log(id);

    try {

        //buscamos el producto por id y lo eliminamos
        const productoEliminadoporId = await Producto.findByIdAndDelete({_id: id});

        console.log('Producto eliminado', productoEliminadoporId);

        //rebuscamos todos los productos
        const listaProductos = await Producto.find();

        res.render('listarCards', {
            productos: listaProductos
        });

    } catch (error) {

        console.log(error);

        return res.render('error',{
            message: 'Nuestro ingenieros estan trabajando en el problema, vuelva mas tarde'
        });

    }
}

const formularioActualizar = async (req = request, res = response) =>{
        
        const id = req.params._id;
    
        console.log(id);
    
        try {
    
            //buscamos el producto por id y lo eliminamos
            const productoParaActualizar = await Producto.findById({_id: id}) 
            
            return res.render('productoParaActualizar',{
                title: 'Producto para Actualizar',
                productoParaActualizar: productoParaActualizar
            });
    
        }
        catch (error) {
    
            console.log(error);
    
            return res.render('error',{
                message: 'Nuestro ingenieros estan trabajando en el problema, vuelva mas tarde'
            });
    
        }
    

}

const actualizarProducto = async (req = request, res = response) =>{
        
        const id = req.params._id;
    
        console.log(id);
    
        try {
            const data = {
                nombreProducto: req.body.nombre,
                precioProducto: req.body.precio,
                imagenProducto: req.body.imagen,
                stockProducto: req.body.stock
            }
    
            //buscamos el producto por id y lo eliminamos
            const productoParaActualizar = await Producto.findByIdAndUpdate({_id: id}, data);

            console.log(productoParaActualizar);

            const listaProductos = await Producto.find();
            
            res.render('listarCards', {
                productos: listaProductos
            });

        }
        catch (error) {
    
            console.log(error);
    
            return res.render('error',{
                message: 'Nuestro ingenieros estan trabajando en el problema, vuelva mas tarde'
            });
    
        }

}




export {
    mostrarFormulario,
    cargarFormulario,
    listarProductosTabla,
    listarProductosCards,
    mostrarDescripcionProducto,
    eliminarProducto,
    actualizarProducto,
    formularioActualizar
};