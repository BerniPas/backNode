import express from 'express';
const router = express.Router();

import {  
    mostrarFormulario, 
    cargarFormulario,
    listarProductosTabla,
    listarProductosCards,
    mostrarDescripcionProducto, 
    eliminarProducto,
    actualizarProducto,
    formularioActualizar
} from '../controllers/mongooseProduct.js';

/* 
    esta ruta responde a la url /productos/
*/

/* GET users listing. */
router.get('/', mostrarFormulario);

//insertamos datos en la database
router.post('/', cargarFormulario);

//listar todos los productos
router.get('/list', listarProductosTabla);

//listar productos en formato de cards
router.get('/listcards', listarProductosCards);

//obtener un producto por descripción
router.post('/delete/:_id', eliminarProducto);

router.get('/update/:_id', formularioActualizar);

//update del producto
router.post('/update/:_id', actualizarProducto);

//obtener un producto por descripción
router.get('/descripcion/:_id', mostrarDescripcionProducto);


export default router;

