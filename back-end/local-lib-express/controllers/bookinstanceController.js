let Book = require("../models/book");
let BookInstance = require("../models/bookinstance");
let async = require("async");
const { body, validationResult } = require("express-validator");

// display list of all bookinstances

exports.bookinstance_list = function (req, res, next) {
  BookInstance.find()
    .populate("book")
    .exec(function (err, list_bookinstances) {
      if (err) {
        return next(err);
      }
      res.render("bookinstance_list", {
        title: "Book Instance List",
        bookinstance_list: list_bookinstances,
      });
    });
};

// display detail page for a specific bookinstance

exports.bookinstance_detail = function (req, res, next) {
  BookInstance.findById(req.params.id)
    .populate("book")
    .exec(function (err, bookinstance) {
      if (err) {
        return next(err);
      }
      if (bookinstance == null) {
        let err = new Error();
        err.status = 404;
        return next(err);
      }
      res.render("bookinstance_detail", {
        title: `Copy: ${bookinstance.book.title}`,
        bookinstance,
      });
    });
};

// display bookinstance create form on GET

exports.bookinstance_create_get = function (req, res, next) {
  // find all books, execute function that returns books object
  Book.find({}).exec(function (err, books) {
    if (err) {
      return next(err);
    }
    // successful, so render form
    res.render("bookinstance_form", {
      title: "Create BookInstance",
      book_list: books,
      status_list: ["Available", "Maintenance", "Loaned", "Reserved"],
    });
  });
};

// handle bookinstance create on POST

exports.bookinstance_create_post = [
  // validate and sanitize fields.
  body("book", "Book must be specified").trim().isLength({ min: 1 }).escape(),
  body("imprint", "Imprint must be specified")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("status").escape(),
  body("due_back", "Invalid date")
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),

  // process request after validation and sanitization
  (req, res, next) => {
    // extract the validation errors from a request
    const errors = validationResult(req);

    // create a bookinstance object with escaped and trimmed data
    let bookinstance = new BookInstance({
      book: req.body.book,
      imprint: req.body.imprint,
      status: req.body.status,
      due_back: req.body.due_back,
    });

    if (!errors.isEmpty()) {
      // there are errors - render form again with sanitized values and error messages

      // find all books only showing titles then execute function to return list of books as object
      Book.find({}, "title").exec(function (err, books) {
        if (err) {
          return next(err);
        }
        // successful so render
        res.render("bookinstance_form", {
          title: "Create BookInstance",
          book_list: books,
          selected_book: bookinstance.book._id,
          errors: errors.array(),
          bookinstance: bookinstance,
        });
      });
      return;
    } else {
      // data from form is valid
      // save bookinstance and redirect user to newly created bookinstance url
      bookinstance.save(function (err) {
        if (err) {
          return next(err);
        }
        // successful - redirect to new record
        res.redirect(bookinstance.url);
      });
    }
  },
];

// display bookinstance delete form on GET

exports.bookinstance_delete_get = function (req, res, next) {
  async.parallel(
    {
      // find bookinstance and book in db

      bookinstance: function (callback) {
        BookInstance.findById(req.params.id).populate("book").exec(callback);
      },
    },
    function (err, results) {
      if (err) return next(err);
      // successful so render
      res.render("bookinstance_delete", {
        title: "Delete Book Instance",
        bookinstance: results.bookinstance,
      });
    }
  );
};

// handle bookinstance delete on POST

exports.bookinstance_delete_post = function (req, res, next) {
  async.parallel(
    {
      bookinstance: function (callback) {
        BookInstance.findById(req.body.bookinstanceid).exec(callback);
      },
    },
    function (err, results) {
      if (err) return next(err);
      // success - delete object and redirect user to list of authors
      BookInstance.findByIdAndRemove(
        req.body.bookinstanceid,
        function deleteBookInstance(err) {
          if (err) return next(err);
          // success - go to list of bookinstances
          res.redirect("/catalog/bookinstances");
        }
      );
    }
  );
};

// display bookinstance update form on GET

exports.bookinstance_update_get = function (req, res, next) {
  // get bookinstance and book
  async.parallel(
    {
      books: function (callback) {
        Book.find({}).exec(callback);
      },
      bookinstance: function (callback) {
        BookInstance.findById(req.params.id)
          .populate("book")
          .populate("imprint")
          .populate("status")
          .populate("due_back")
          .exec(callback);
      },
    },
    function (err, results) {
      if (err) return next(err);
      if (results.bookinstance == null) {
        // no results
        let err = new Error("Book Instance not found");
        err.status = 404;
        return next(err);
      }
      // success
      res.render("bookinstance_form", {
        title: "Update Book Instance",
        book_list: results.books,
        bookinstance: results.bookinstance,
        status_list: ["Available", "Maintenance", "Loaned", "Reserved"],
      });
    }
  );
};

// handle bookinstance update on POST

exports.bookinstance_update_post = [
  // validate and sanitize fields
  body("book", "Book must be specified").trim().isLength({ min: 1 }).escape(),
  body("imprint", "Imprint must be specified")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("status").escape(),
  body("due_back", "Invalid date")
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),

  // process request after validation and sanitization
  (req, res, next) => {
    // extract validation errors from a request
    const errors = validationResult(req);

    // create a bookinstance object with escaped / trimmed data and old id
    let bookinstance = new BookInstance({
      book: req.body.book,
      imprint: req.body.imprint,
      status: req.body.status,
      due_back: req.body.due_back,
      _id: req.params.id, // THIS IS REQUIRED; OTHERWISE, A NEW ID WOULD BE ASSIGNED TO UPDATED BOOKINSTANCE OBJECT
    });
    if (!errors.isEmpty()) {
      // there are errors - render form again with sanitized values and error messages
      // get book for form
      async.parallel(
        {
          bookinstance: function (callback) {
            BookInstance.findById(req.params.id)
              .populate("book")
              .populate("imprint")
              .populate("status")
              .populate("due_back")
              .exec(callback);
          },
        },
        function (err, results) {
          if (err) return next(err);
          // success - render form
          res.render("bookinstance_form", {
            title: "Update Book Instance",
            book: results.bookinstance.book,
            imprint: results.bookinstance.imprint,
            status: results.bookinstance.status,
            due_back: results.bookinstance.due_back,
          });
        }
      );
      return;
    } else {
      // data from form is valid - update the record
      BookInstance.findByIdAndUpdate(
        req.params.id,
        bookinstance,
        {},
        function (err, thebookinstance) {
          if (err) return next(err);
          // successful - redirect to bookinstance detail page
          res.redirect(thebookinstance.url);
        }
      );
    }
  },
];
