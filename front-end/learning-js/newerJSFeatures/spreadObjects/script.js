const feline = {
  legs: 4,
  family: "Felidae",
};

const canine = {
  legs: 4,
  family: "Caninae",
};

const catDog = { ...feline, ...canine }; // properties with same name are overwritten (canine would win - by order)

const dataFromForm = {
  email: "blueman@gmail.com",
  password: "tobias123!",
  username: "tfunke",
};

// can copy object and add new key,value pairs to copy

const newUser = { ...dataFromForm, isAdmin: false, id: 2345 };
