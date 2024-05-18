import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";

const USER = process.env.USER_EMAIL;
const MAIL = process.env.PASS_EMAIL

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: USER,
        pass: MAIL,
    },
});

// async..await is not allowed in global scope, must use a wrapper
async function enviarMail(mail, nombre) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Empresa X 👻"', // sender address
        to: mail, // list of receivers
        subject: "Hola desde la Empresa ✔", 
        html: `<h1>sale por el mes de Mayo!!</h1> <br>
        <h2>Hola ${nombre}, bienvenido a la App</h2>
        <p>Puedes comprar más productos en nuestro sitio: 
            <a href="https://www.educacionit.com/" target="_blank">Comprar</a>
        </p>`, // html body
    });

}

export default enviarMail;
