var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");
const sequelize = require('./db');
const Signature = require('./models/Signature');
const cors = require('cors');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/api', apiRouter);

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

async function setup() {
  const ant = await Signature.create({ name: "Ant", email: "ant@ant.com", city: "Seattle", state: "WA" });
  console.log("Ant instance created.")
}

sequelize.sync({ force: true }).then(() => {
  console.log("Sequelize Sync completed");
  setup().then(() => console.log("Setup completed."));
})

module.exports = app;
