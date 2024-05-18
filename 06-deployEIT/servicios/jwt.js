import dotenv from "dotenv";
dotenv.config();
import jwt from 'jsonwebtoken';


const generarJWT = (user) => {

    console.log(`User para el JWT: ${user.nombre} - ${user.email} - ${user.password}`);

    return new Promise((resolve, reject) => {

        //firmar el token
        jwt.sign(user, process.env.SECRET_JWT, {
            expiresIn: '2h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token');
            } else {
                resolve(token);
            }
        });
    });

};


/* 
const generarJWT = async (user) => {
    const token = jwt.sign(user, PRIVATE_KEY_JWT, { algorithm: 'HS256' });
    const token = jwt.sign(user, PRIVATE_KEY_JWT, { algorithm: 'HS256', expiresIn: '1h' });
    console.log('token2', token)
    const decode = jwt.verify(token, PRIVATE_KEY_JWT);
    console.log('decode', decode)
    return token
}
*/

const verificarJWT = async (token) => {}

export {
    generarJWT,
    verificarJWT
}
