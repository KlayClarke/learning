let express = require("express");
let router = express.Router();

// require controller modules

let book_controller = require("../controllers/bookController");
let author_controller = require("../controllers/authorController");
let genre_controller = require("../controllers/genreController");
let book_instance_controller = require("../controllers/bookinstanceController");

/// BOOK ROUTES ///

// GET catalog home page
router.get("/", book_controller.index);

// GET request for creating a book
router.get("/book/create", book_controller.book_create_get);

// POST request for creating a book
router.post("/book/create", book_controller.book_create_post);

// GET request for deleting a book
router.get("/book/:id/delete", book_controller.book_delete_get);

// POST request for deleting a book
router.post("/book/:id/delete", book_controller.book_delete_post);

// GET request for updating a book
router.get("/book/:id/update", book_controller.book_update_get);

// POST request for updating a book
router.post("/book/:id/update", book_controller.book_update_post);

// GET request for one book
router.get("/book/:id", book_controller.book_detail);

// GET request for list of all book items
router.get("/books", book_controller.book_list);

/// AUTHOR ROUTES ///

// GET request for creating author
router.get("/author/create", author_controller.author_create_get);

// POST request for creating author
router.post("/author/create", author_controller.author_create_post);

// GET request for deleting author
router.get("/author/:id/delete", author_controller.author_delete_get);

// POST request for deleting author
router.post("/author/:id/delete", author_controller.author_delete_post);

// GET request for updating author
router.get("/author/:id/update", author_controller.author_update_get);

// POST request for updating author
router.post("/author/:id/update", author_controller.author_update_post);

// GET request for one author
router.get("/author/:id", author_controller.author_detail);

// GET request for list of all authors
router.get("/authors", author_controller.author_list);

/// GENRE ROUTES ///

// GET request for creating a genre
router.get("/genre/create", genre_controller.genre_create_get);

// POST request for creating a genre
router.post("/genre/create", genre_controller.genre_create_post);

// GET request for deleting a genre
router.get("/genre/:id/delete", genre_controller.genre_delete_get);

// POST request for deleting a genre
router.post("/genre/:id/delete", genre_controller.genre_delete_post);

// GET request for updating a genre
router.get("/genre/:id/update", genre_controller.genre_update_get);

// POST request for updating a genre
router.post("/genre/:id/update", genre_controller.genre_update_post);

// GET request for one genre
router.get("/genre/:id", genre_controller.genre_detail);

// GET request for list of all genres
router.get("/genres", genre_controller.genre_list);

/// BOOKINSTANCE ROUTES ///

// GET request for creating a bookinstance
router.get(
  "/bookinstance/create",
  book_instance_controller.bookinstance_create_get
);

// POST request for creating a bookinstance
router.post(
  "/bookinstance/create",
  book_instance_controller.bookinstance_create_post
);

// GET request for deleting a bookinstance
router.get(
  "/bookinstance/:id/delete",
  book_instance_controller.bookinstance_delete_get
);

// POST request for deleting a bookinstance
router.post(
  "/bookinstance/:id/delete",
  book_instance_controller.bookinstance_delete_post
);

// GET request for updating a bookinstance
router.get(
  "/bookinstance/:id/update",
  book_instance_controller.bookinstance_update_get
);

// POST request for updating a bookinstance
router.post(
  "/bookinstance/:id/update",
  book_instance_controller.bookinstance_update_post
);

// GET request for on bookinstance
router.get("/bookinstance/:id", book_instance_controller.bookinstance_detail);

// GET request for list of all bookinstances
router.get("/bookinstances", book_instance_controller.bookinstance_list);

module.exports = router;
