
const express = require('express');
const router = express.Router();

const {
    mostrarFormulario,
    cargarFormulario
} = require('../controllers/productsController');

/* GET users listing. */
router.get('/', mostrarFormulario);

router.post('/', cargarFormulario);


module.exports = router;
