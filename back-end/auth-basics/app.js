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
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// set up mongoose connection
var mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

// set up user model
var User = mongoose.model(
  "User",
  new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
  })
);

// takes username and password, tries to find user, if username and password matches authenticate user and move on
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) return done(err);
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          // passwords match - log user in
          return done(null, user);
        } else {
          // passwords don't match
          return done(null, false, { message: "Incorrect credentials" });
        }
      });
      return done(null, user);
    });
  })
);

// to serialize user - store cookie for log in maintenance
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// to deserialize user - remove cookie
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

// save current user as local variable - can call in any view as currentUser without passing it to view
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

// app.use("/", indexRouter);
// app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.render("index", { secret: process.env.EXPRESS_SESSION_SECRET });
});

app.get("/sign-up", (req, res) => res.render("sign_up_form"));

app.post("/sign-up", (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    if (err) return next(err);
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    }).save((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  });
});

app.get("/log-in", (req, res) => res.render("log_in_form"));

app.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

app.get("/log-out", (req, res) => {
  req.logout();
  res.redirect("/");
});

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
