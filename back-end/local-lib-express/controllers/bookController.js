let Book = require("../models/book");
let Author = require("../models/author");
let Genre = require("../models/genre");
let BookInstance = require("../models/bookinstance");
let async = require("async");
const { body, validationResult } = require("express-validator");

// display site index

exports.index = function (req, res, next) {
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
  Book.find({}, "title author")
    .sort({ title: 1 })
    .populate("author")
    .exec(function (err, list_books) {
      if (err) {
        return next(err);
      }
      res.render("book_list", { title: "Book List", book_list: list_books });
    });
};

// display detail page for a specific book

exports.book_detail = function (req, res, next) {
  async.parallel(
    {
      book: function (callback) {
        Book.findById(req.params.id)
          .populate("author")
          .populate("genre")
          .exec(callback);
      },
      book_instance: function (callback) {
        BookInstance.find({ book: req.params.id }).exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.book == null) {
        let err = new Error("Book not found");
        err.status = 404;
        return next(err);
      }
      res.render("book_detail", {
        title: results.book.title,
        book: results.book,
        book_instances: results.book_instance,
      });
    }
  );
};

// display book create form on GET

exports.book_create_get = function (req, res, next) {
  async.parallel(
    {
      authors: function (callback) {
        Author.find(callback);
      },
      genres: function (callback) {
        Genre.find(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      res.render("book_form", {
        title: "Create Book",
        authors: results.authors,
        genres: results.genres,
      });
    }
  );
};

// handle book create on POST

exports.book_create_post = [
  // convert genre to an array
  (req, res, next) => {
    if (!req.body.genre instanceof Array) {
      if (typeof req.body.genre === "undefined") req.body.genre = [];
      else req.body.genre = new Array(req.body.genre);
    }
    next();
  },

  // validate and sanitize fields
  body("title", "Title must not be empty").trim().isLength({ min: 1 }).escape(),
  body("author", "Author must not be empty")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("summary", "Summary must not be empty")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("isbn", "ISBN must not be empty").trim().isLength({ min: 1 }).escape(),
  // use wildcard * to individually validate each of the genre array entries - code below translates to sanitize each item below key genre
  body("genre.*").escape(),

  // process request after validation and sanitization
  (req, res, next) => {
    // extract the validation errors from a request
    const errors = validationResult(req);

    // create a book object with escaped and trimmed data
    let book = new Book({
      title: req.body.title,
      author: req.body.author,
      summary: req.body.summary,
      isbn: req.body.isbn,
      genre: req.body.genre,
    });

    if (!errors.isEmpty()) {
      // there are errors - render form again with sanitized values and error messages

      // get all authors and genres for form
      async.parallel(
        {
          authors: function (callback) {
            Author.find(callback);
          },
          genres: function (callback) {
            Genre.find(callback);
          },
        },
        function (err, results) {
          if (err) {
            return next(err);
          }
          // mark user selected genres as checked
          for (let i = 0; i < results.genres.length; i++) {
            if (book.genre.indexOf(results.genres[i]._id) > -1) {
              // set checked to true for current genre
              results.genres[i].checked = "true";
            }
          }
          res.render("book_form", {
            title: "Create Book",
            authors: results.authors,
            genres: results.genres,
            book: book,
            errors: errors.array(),
          });
          return;
        }
      );
    } else {
      // data from form is valid

      book.save(function (err) {
        if (err) {
          return next(err);
        }
        // successful - redirect to new book record
        res.redirect(book.url);
      });
    }
  },
];

// display book delete form on GET

exports.book_delete_get = function (req, res, next) {
  async.parallel(
    {
      // find book and bookinstances
      book: function (callback) {
        Book.findById(req.params.id).exec(callback);
      },
      bookinstances: function (callback) {
        BookInstance.find({ book: req.params.id }).exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.book == null) {
        // no results
        res.redirect("/catalog/books");
      }
      // successful so render
      res.render("book_delete", {
        title: "Delete Book",
        book: results.book,
        bookinstances: results.bookinstances,
      });
    }
  );
};

// handle book delete on POST

exports.book_delete_post = function (req, res, next) {
  async.parallel(
    {
      book: function (callback) {
        Book.findById(req.body.bookid).exec(callback);
      },
      bookinstances: function (callback) {
        BookInstance.find({ book: req.params.bookid }).exec(callback);
      },
    },
    function (err, results) {
      if (err) return next(err);
      // success
      if (results.bookinstances.length > 0) {
        // book has bookinstances - render
        res.render("book_delete", {
          title: "Delete Book",
          book: results.book,
          bookinstances: results.bookinstances,
        });
        return;
      } else {
        // book has no bookinstances - delete object and redirect user to list of books
        Book.findByIdAndRemove(req.body.bookid, function deleteBook(err) {
          if (err) {
            return next(err);
          }
          // success - go to books list
          res.redirect("/catalog/books");
        });
      }
    }
  );
};

// display book update form on GET

exports.book_update_get = function (req, res, next) {
  // get book, authors, and genres for form
  async.parallel(
    {
      book: function (callback) {
        Book.findById(req.params.id)
          .populate("author")
          .populate("genre")
          .exec(callback);
      },
      authors: function (callback) {
        Author.find(callback);
      },
      genres: function (callback) {
        Genre.find(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.book == null) {
        // no results
        let err = new Error("Book not found");
        err.status = 404;
        return next(err);
      }
      // success
      // mark our selected genres as checked
      for (
        let all_g_iter = 0;
        all_g_iter < results.book.genre.length;
        all_g_iter++
      ) {
        for (
          let book_g_iter = 0;
          book_g_iter < results.book.genre.length;
          book_g_iter++
        ) {
          if (
            results.genres[all_g_iter]._id.toString() ===
            results.book.genre[book_g_iter]._id.toString()
          ) {
            results.genres[all_g_iter].checked = "true";
          }
        }
      }
      // render book form
      res.render("book_form", {
        title: "Update Book",
        authors: results.authors,
        genres: results.genres,
        book: results.book,
      });
    }
  );
};

// handle book update on POST

exports.book_update_post = [
  // convert the genre to an array
  (req, res, next) => {
    if (!(req.body.genre instanceof Array)) {
      if (typeof req.body.genre === "undefined") req.body.genre = [];
      else req.body.genre = new Array(req.body.genre);
    }
    next();
  },
  // validate and sanitize fields
  body("title", "Title must not be empty").trim().isLength({ min: 1 }).escape(),
  body("author", "Author must not be empty")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("summary", "Summary must not be empty")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("isbn", "ISBN must not be empty").trim().isLength({ min: 1 }).escape(),
  body("genre.*").escape(),

  // process request after validation and sanitization
  (req, res, next) => {
    // extract the validation errors from a request
    const errors = validationResult(req);

    // create a book object with escaped / trimmed data and old id
    let book = new Book({
      title: req.body.title,
      author: req.body.author,
      summary: req.body.summary,
      isbn: req.body.isbn,
      genre: typeof req.body.genre === "undefined" ? [] : req.body.genre,
      _id: req.params.id, // THIS IS REQUIRED; OTHERWISE A NEW ID WOULD BE ASSIGNED TO UPDATED BOOK OBJECT
    });
    if (!errors.isEmpty()) {
      // there are errors - render form again with sanitized values and error messages
      // get all authors and genres for form
      async.parallel(
        {
          book: function (callback) {
            Book.findById(req.params.id)
              .populate("author")
              .populate("genre")
              .exec(callback);
          },
          authors: function (callback) {
            Author.find(callback);
          },
          genres: function (callback) {
            Genre.find(callback);
          },
        },
        function (err, results) {
          if (err) return next(err);
          // mark our selected genres as checked
          for (let i = 0; i < results.genres.length; i++) {
            if (book.genre.indexOf(results.genres[i]._id) > -1) {
              results.genres[i].checked = "true";
            }
          }
          // render book form
          res.render("book_form", {
            title: "Update Book",
            authors: results.authors,
            genres: results.genres,
            book: results.book,
            errors: errors.array(),
          });
        }
      );
      return;
    } else {
      // data from form is valid - update the record
      Book.findByIdAndUpdate(req.params.id, book, {}, function (err, thebook) {
        if (err) return next(err);
        // successful - redirect to book detail page
        res.redirect(thebook.url);
      });
    }
  },
];
