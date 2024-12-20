var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressLayout = require("express-ejs-layouts"); //impor modul express-ejs-layout
const cors = require("cors"); //import cors
const connectDB = require('./app_api/models/db');

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var prodiRouter = require('./app_server/routes/prodi');
var fakultasRouter = require('./app_server/routes/fakultas');
const fakultasRouters = require('./app_api/routes/fakultas');
const prodiRouters = require('./app_api/routes/prodi');
const authRouters = require('./app_api/routes/auth');
const mahasiswaRouterApi = require('./app_api/routes/mahasiswa');


require("dotenv").config();

var app = express();

// view engine setup
app.set('views', path.join(__dirname,'app_server','views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayout);
app.use(cors()); //gunakan middleware cors

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/prodi',prodiRouter);
app.use('/fakultas',fakultasRouter);
app.use('/api/fakultas',fakultasRouters);  
app.use('/api/prodi',prodiRouters);
app.use('/api/auth', authRouters);
app.use('/api/mahasiswa', mahasiswaRouterApi);  


//CONNECT TO MONGODB
connectDB();
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
