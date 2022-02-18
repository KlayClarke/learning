const isEven = function (num) {
  //regular function expression
  return num % 2 === 0;
};

const isEven = (num) => {
  // arrow function with parens around param
  return num % 2 === 0;
};

const isEven = (num) => {
  // arrow function with no parens around param
  return num % 2 === 0;
};

const isEven = (num) => num % 2 === 0; // implicit return

const movies = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand By Me",
    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 90,
  },
];

const newMovies = movies.map((movie) => {
  return `${movie.title} - ${movie.score}`;
});

// or

const newMovies = movies.map((movie) => `${movie.title} - ${movie.score / 10}`);

// same as

const newMovies = movies.map(function (movie) {
  return `${movie.title} - ${movie.score / 10}`;
});
