import express from 'express';
const router = express.Router();

import {  
    mostrarFormulario, 
    cargarFormulario,
    listarProductosTabla,
    listarProductosCards,
    mostrarDescripcionProducto
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
router.post('/descripcion/:_id', mostrarDescripcionProducto);

export default router;

