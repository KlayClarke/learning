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

const prices = [3.99, 1.95, 2.75, 3.25, 6.85];

// to find minimum value in array

const minPrice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
});

// // to sum array

// const totalPrice = prices.reduce((total, price) => {
//   return total + price;
// });

// // (lets say you already have $20 of items already in cart - initial value)

const totalPrice = prices.reduce((total, price) => total + price);

// find highest scored movie in movies

const highestRatedMovie = movies.reduce((bestMovie, currentMovie) => {
  if (currentMovie.score > bestMovie.score) {
    return currentMovie;
  }
  return bestMovie;
});
