const user1 = {
  email: "harvery@gmail.com",
  password: "sCoTTlskJE213",
  firstName: "Harverd",
  lastName: "Mills",
  born: 1930,
  bio: "ljjfadsjfew efjadl qw dslasDSAD LDAJL sdlfld",
  city: "San Fransisco",
  state: "California",
};

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

// function fullName(user) {
//   return `${user.firstName} ${user.lastName}`;
// }

// // same as above, but using destructuring

// function fullName(user) {
//   const { firstName, lastName } = user;
//   return `${lastName}, ${firstName}`;
// }

// to destructure on the way into the function (as param)

function fullName({ firstName, lastName = "default lastName" }) {
  return `${firstName} ${lastName}`;
}

// to destructure in array method

const movieReviews = movies.map(({ title, score, year }) => {
  return `${title} was released in ${year} and has a rating of ${score}`;
});
