let Book = require("../models/book");
let Author = require("../models/author");
let Genre = require("../models/genre");
let BookInstance = require("../models/bookinstance");

let async = require("async");

// display site index

exports.index = function (req, res) {
  async.parallel(
    {
      book_count: function (callback) {
        Book.countDocuments({}, callback); // pass empty object as match condition to find all documents of this collection
      },
      book_instance_count: function (callback) {
        BookInstance.countDocuments({}, callback);
      },
      book_instance_available_count: function (callback) {
        BookInstance.countDocuments({ status: "Available" }, callback);
      },
      author_count: function (callback) {
        Author.countDocuments({}, callback);
      },
      genre_count: function (callback) {
        Genre.countDocuments({}, callback);
      },
    },
    function (err, results) {
      res.render("index", {
        title: "Local Library Home",
        error: err,
        data: results,
      });
    }
  );
};

// display list of all books

exports.book_list = function (req, res) {
  res.send("NOT IMPLEMENTED: Book List");
};

// display detail page for a specific book

exports.book_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: Book Detail: " + req.params.id);
};

// display book create form on GET

exports.book_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Book create GET");
};

// handle book create on POST

exports.book_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Book create POST");
};

// display book delete form on GET

exports.book_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Book delete GET");
};

// handle book delete on POST

exports.book_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Book delete POST");
};

// display book update form on GET

exports.book_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Book update GET");
};

// handle book update on POST

exports.book_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Book update POST");
};
