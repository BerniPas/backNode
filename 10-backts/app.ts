import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
/* import hbs from 'hbs';
import cors from 'cors';
import session from 'express-session'
import MongoStore from 'connect-mongo'
/* import dotenv from 'dotenv';
dotenv.config(); */


//importamos las rutas de la app
/* import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import productsRouter from './routes/products.js'; */

//importamos las rutas que utilizan la librería mongoose
/* import mongooseRouter from './routes/mongooseRouter.js';
import { cookie } from 'express-validator';  */

const app = express();
//const miClave = process.env.SECRET_SESSION;

// view engine setup
app.set('views', 'views');
app.set('view engine', 'hbs');
//hbs.registerPartials('views/partials');

//usamos los middlewares de la app
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(cors());
//app.use(express.static(path.join(__dirname, '/public')));

/* const option = {
    origin: 'http://example.com'
} */
/* app.use(cors({
    origin: 'http://example.com'
})) */
//app.use('/', cors(  option ), indexRouter);

//utilizamos session con MongoStorage 
/* app.use(session({
    secret: process.env.SECRET_SESSION,
    saveUninitialized: false, // don't create session until something stored
    resave: true, //don't save session if unmodified
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_ATLAS_MONGOOSE,
        /* touchAfter: 24 * 3600 // time period in seconds */
/*     }),
    cookie: {
        maxAge: 60000
    }
})); */


//utilizamos las rutas de la app
/* app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/productos', mongooseRouter); */

//pagina de error 404
app.get('*', (req, res) => {
    res.render('error', {
        title: 'Error',
        message: 'Página no encontrada'
    });
})

export default app;