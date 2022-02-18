const movies = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984,
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013,
  },
  {
    title: "13 Going On 30",
    score: 70,
    year: 2004,
  },
  {
    title: "Stand By Me",
    score: 85,
    year: 1986,
  },
  {
    title: "Waterworld",
    score: 62,
    year: 1995,
  },
  {
    title: "Jingle All The Way",
    score: 71,
    year: 1996,
  },
  {
    title: "Parasite",
    score: 95,
    year: 2019,
  },
  {
    title: "Notting Hill",
    score: 77,
    year: 1999,
  },
  {
    title: "Alien",
    score: 90,
    year: 1979,
  },
];

// const bestMovies = movies.filter((movie) => {
//   // return all movies with score greater than or equal to 80
//   return movie.score >= 80;
// });

// or, to save space we can

// const goodMovies = movies.filter((m) => m.score >= 80);
// const badMovies = movies.filter((m) => m.score < 80);

// const recentMovies = movies.filter((m) => m.year >= 2000);
// const olderMovies = movies.filter((m) => m.year < 2000);

// to isolate good movies and create array with their titles

const goodMovies = movies.filter((m) => m.score >= 80).map((m) => m.title);
const badMovies = movies.filter((m) => m.score < 80).map((m) => m.title);
