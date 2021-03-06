require("dotenv").config();

var createError = require("http-errors");
var bcrypt = require("bcryptjs");
var express = require("express");
var session = require("express-session");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var compression = require("compression");
var helmet = require("helmet");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var messageRouter = require("./routes/messages");

var app = express();

// set up mongoose connection
var mongoose = require("mongoose");
var mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

// authentication with passport
const User = require("./models/user");
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) return done(err);
      if (!user) {
        return done(null, false, { message: "Incorrect credentials" });
      }
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          // passwords match - log user in
          return done(null, user);
        } else {
          // passwords dont match
          return done(null, false, { message: "Incorrect credentials" });
        }
      });
      return done(null, user);
    });
  })
);

// to serialize user - store cookie
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// to deserialize user - remove cookie ?
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use(helmet());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/messages", messageRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
