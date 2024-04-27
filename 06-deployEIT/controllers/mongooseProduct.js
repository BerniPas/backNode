import Producto from '../models/productModels.js';
//const Productos = new Producto();

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


export {
    mostrarFormulario,
    cargarFormulario,
    listarProductosTabla,
    listarProductosCards,
    mostrarDescripcionProducto
};