const add = (x, y) => {
  return x + y;
};

const PI = 3.14159;

const square = (x) => {
  return x * x;
};

// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

// or, export as object

const math = {
  add: add,
  PI: PI,
  square: square,
};

// or... add export to function creation such as...

// module.exports.subtract = (x, y) => x - y;

// or export using shortcut syntax --> won't work if you initialize exports as variable (why would one do such a thing?)

const subtract = (x, y) => x - y;

exports.add = add;
exports.PI = PI;
exports.square = square;
exports.subtract = subtract;
