const user = {
  email: "harvery@gmail.com",
  password: "sCoTTlskJE213",
  firstName: "Harverd",
  lastName: "Mills",
  born: 1930,
  bio: "ljjfadsjfew efjadl qw dslasDSAD LDAJL sdlfld",
  city: "San Fransisco",
  state: "California",
};

// to make a variable called email from the user property (houses user's email)
// const { email } = user;
//// similar to:
// const email = user.email;

// to save time, can also do multiple variables at once
const { email, password, firstName, lastName, city, bio } = user;

// to rename new variable

const { born: newName } = user;

// to give default value to variable that is undefined in object

const { deathYear = "N/A" } = user;
