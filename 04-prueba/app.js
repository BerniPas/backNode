var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const hbs = require('hbs');


//importamos las rutas de la app
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//usamos los middlewares de la app
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//utilizamos las rutas de la app
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

//pagina de error 404
app.get('*', (req, res)=>{
  res.render('error', {
    title: 'Error', 
    message: 'Página no encontrada'
  });
})

module.exports = app;
