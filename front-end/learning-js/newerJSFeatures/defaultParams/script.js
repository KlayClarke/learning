// to add default params - in case a user forgets to pass in a param (numSides would default to 6)

function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

// be careful of the order - have default params come after params with no default

function greet(person, msg = "Hello there") {
  console.log(`${msg}, ${person}!`);
}
