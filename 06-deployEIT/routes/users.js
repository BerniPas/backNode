import express from 'express';
import { check, body, query } from 'express-validator';

const  router = express.Router();

import {
  formularioRegistro,
  formularioLogin,
  registrarUsuario,
  loginUsuario
} from '../controllers/usersControler.js';

/* 
  Esta ruta responde a /users
 */

router.get('/registro', formularioRegistro);

router.get('/login', formularioLogin);


//validamos datos con validator
router.post('/registro', [
  check('nombre').notEmpty().isLength({min: 3}).isString(),
  check('email').notEmpty().isEmail(),
  check('password').notEmpty().isLength({min: 8}),
] ,registrarUsuario);

router.post('/login', [
  check('email').notEmpty().isEmail(),
  check('password').notEmpty().isLength({min: 8}),
] ,loginUsuario);


export default router;
