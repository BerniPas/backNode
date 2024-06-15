import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import hbs from 'hbs';
import cors from 'cors';


//importamos las rutas de la app
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import productsRouter from './routes/products.js';

//importamos las rutas que utilizan la librería mongoose
import mongooseRouter from './routes/mongooseRouter.js';

const app = express();

// view engine setup
app.set('views', 'views');
app.set('view engine', 'hbs');
hbs.registerPartials('views/partials');

//usamos los middlewares de la app
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, '/public')));

/* const option = {
  origin: 'http://example.com'
} */
/* app.use(cors({
  origin: 'http://example.com'
})) */
//app.use('/', cors(  option ), indexRouter);


//utilizamos las rutas de la app
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/productos', mongooseRouter);

//pagina de error 404
app.get('*', (req, res)=>{
  res.render('error', {
    title: 'Error', 
    message: 'Página no encontrada'
  });
})

export default app;
