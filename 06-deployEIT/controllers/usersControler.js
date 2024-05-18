import { request, response } from 'express';
import { validationResult } from 'express-validator';
import { Usuario } from '../models/index.js';
import bcrypt from 'bcrypt';
import enviarMail from '../servicios/mailResponse.js';
import { 
    generarJWT,
    verificarJWT
} from '../servicios/jwt.js';

const formularioRegistro = (req = request, res = response) => {
    res.render('registroUser')
}

const formularioLogin = (req, res) => {
    res.render('loginUser');
}

const registrarUsuario = async (req, res) => {

    const errores = validationResult(req);

    console.log(errores);
    
    if(!errores.isEmpty()){
        return res.render('registroUser', {
            mensaje: 'Faltan datos Obligatorios'
        });
    }

    //desestructuramos los datos del body
    const { nombre, email, password, provincia } = req.body;

    //buscamos en la database si el user ya existe
    const existeEmail = await Usuario.find({emailUser: email})

    console.log(existeEmail);

    if(existeEmail.length > 0){
        return res.json({
            mensaje: 'El Email enviado ya existe en la base de datos'
        });
    } 
    
    
    try {
        
        const persona = {
            nombreUser: nombre,
            emailUser: email,
            password: password,
            provincia: provincia
        };
        
        console.log(persona);

        //crear una salt
        const salt = await bcrypt.genSalt(10);
        console.log(salt);

        //encriptamos la contraseña del user
        persona.password = await bcrypt.hash(password, salt);
        console.log(persona.password);

        //creamos un nuevo producto
        const datoUser = new Usuario(persona);

        await datoUser.save();

        //asignar el JWT al User
        //generarJWT(datoUser.id, datoUser.nombreUser);

        //enviar un mail de bienvenida
        //await enviarmail(persona.emailUser);
/* 
        return res.status('200').json({
                nombre: nombre,
                email: email,
                password: password,
                provincia: provincia
            }
        ); */

        //enviamos un mail de Bienvenida
        await enviarMail(email, nombre);

        res.render('loginUser')

    } catch (error) {
        console.log(error);
        return res.render('error', {
            message: error
        });

    }

}

const loginUsuario = async (req, res) => {

    
    const errores = validationResult(req);

    console.log(errores);
    
    if(!errores.isEmpty()){
        return res.render('loginUser', {
            mensaje: 'Email o Password incorrectos'
        });
    }

    //desestructuramos los datos del body
    const { email, password } = req.body;


    
    //buscamos en la database si el user ya existe
    //const existeUser = await Usuario.findOne({emailUser: email})
    const existeUser = await Usuario.find({emailUser: email})
    
    console.log(existeUser);
    
    if(!existeUser){
        return res.render('registroUser', { 
            mensaje: 'Es necesario registrarse para poder loguearse'
        });
    } 
    

    try { 

    //comparamos la password encriptada con la password enviada
    //const passwordCorrecto = await bcrypt.compareSync(password, existeUser.password);
    const passwordCorrecto = await bcrypt.compareSync(password, existeUser[0].password);

        if(!passwordCorrecto){
            return res.json({
                mensaje: 'Usuario o Password incorrectos'
            });
        }


            //generar un user
        const user = {
            nombre: existeUser[0].nombreUser,
            email: existeUser[0].emailUser,
            password: existeUser[0].password
        }

        

        //asignar el JWT al User
        const token = await generarJWT(user);

        console.log(token);

        req.header = ('x-token', token)

    
        res.render('admin',{
            token
        });
        

    } catch (error) {
        console.log(error);
        return res.render('error', {
            message: error
        }); 
    }
}

export {
    formularioRegistro,
    formularioLogin,
    registrarUsuario,
    loginUsuario
}