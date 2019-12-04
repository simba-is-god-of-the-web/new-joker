const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const socketIO = require("socket.io");

// load env
require('dotenv').config();

// auth
const auth = require('./auth/auth.js');
const verify = require('./auth/verifyToken.js');

// route
const indexRouter = require('./routes/index.js');
const testRouter = require('./routes/test.js');
const loginRouter = require('./routes/login.js');
const roomRoute = require('./routes/roomRoute.js');

const io = socketIO();
const app = express();
app.io = io;
const wsRouter = require('./routes/wsrouter.js')(io);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SCRETE));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/auth', auth);
app.use('/test', testRouter);
app.use('/ws',wsRouter);
app.use('/room',roomRoute);

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
