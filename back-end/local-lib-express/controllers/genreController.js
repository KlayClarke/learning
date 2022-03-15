let async = require("async");
let mongoose = require("mongoose");
let Genre = require("../models/genre");
let Book = require("../models/book");
const { body, validationResult } = require("express-validator");

// display list of all genres

exports.genre_list = function (req, res, next) {
  Genre.find()
    .sort([["name", "ascending"]])
    .exec(function (err, list_genres) {
      if (err) {
        return next(err);
      }
      res.render("genre_list", {
        title: "Genre List",
        genre_list: list_genres,
      });
    });
};

// display detail page for a specific genre

exports.genre_detail = function (req, res, next) {
  let id = mongoose.Types.ObjectId(req.params.id);
  async.parallel(
    {
      genre: function (callback) {
        Genre.findById(req.params.id).exec(callback);
      },

      genre_books: function (callback) {
        Book.find({ genre: req.params.id }).exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.genre == null) {
        // if genre does not exist in database
        let err = new Error("Genre not found");
        err.status = 404;
        return next(err);
      }
      res.render("genre_detail", {
        title: "Genre Detail",
        genre: results.genre,
        genre_books: results.genre_books,
      });
    }
  );
};

// display genre create form on GET

exports.genre_create_get = function (req, res, next) {
  res.render("genre_form", { title: "Create Genre" });
};

// handle genre create on POST

exports.genre_create_post = [
  // validate and sanitize the name field
  body("name", "Genre name required").trim().isLength({ min: 1 }).escape(),

  // process request after validation and sanitization
  (req, res, next) => {
    // extract the validation errors from a request
    const errors = validationResult(req);

    // create a genre object with escaped and trimmed data
    let genre = new Genre({
      name: req.body.name,
    });

    if (!errors.isEmpty()) {
      // there are errors - render the form again and display sanitized values / error messages
      res.render("genre_form", {
        title: "Create Genre",
        genre: genre,
        errors: errors.array(),
      });
      return;
    } else {
      // data from form is valid
      // check if genre with same name already exists
      Genre.findOne({ name: req.body.name }).exec(function (err, found_genre) {
        if (err) {
          return next(err);
        }
        if (found_genre) {
          // genre exists, redirect to its detail page
          res.redirect(found_genre.url);
        } else {
          genre.save(function (err) {
            if (err) {
              return next(err);
            }
            // genre saved - redirect to genre detail page
            res.redirect(genre.url);
          });
        }
      });
    }
  },
];

// display genre delete form on GET

exports.genre_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre delete GET");
};

// handle genre delete on POST

exports.genre_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre delete POST");
};

// display genre update form on GET

exports.genre_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre update GET");
};

// handle genre update on POST

exports.genre_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre update POST");
};
