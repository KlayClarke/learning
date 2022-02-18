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

movies.forEach(function (el) {
  console.log(`${el.title} - ${el.score}`);
});

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // numbers.forEach(function (el) {
// //   console.log(el);
// // });

// numbers.forEach(function (el) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });
