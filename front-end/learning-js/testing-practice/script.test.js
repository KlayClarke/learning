test("capitalized first letter", () => {
  expect(capitalize("loser")).toBe("Loser");
});

test("reverse string", () => {
  expect(reverseString("Love")).toBe("evoL");
});

test("add", () => {
  expect(calculate.add(13, 18)).toBe(31);
});

test("subtract", () => {
  expect(calculate.subtract(31, 18)).toBe(13);
});

test("divide", () => {
  expect(calculate.divide(81, 9)).toBe(9);
});

test("multiply", () => {
  expect(calculate.multiply(19, 3)).toBe(57);
});

test("caesar cipher w/ spaces", () => {
  expect(caesarCipher("Kanye West", 129843)).toBe("Jzmxd Vdrs");
});

test("caesar cipher w/out spaces", () => {
  expect(caesarCipher("magician", 10025)).toBe("bpvxrxpc");
});

test("caesar cipher w/ punctuation", () => {
  expect(caesarCipher("I am happy lol. Sike!", 180092)).toBe(
    "Y qc xqffo beb. Iyau!"
  );
});

test("analyze and deconstruct array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

function capitalize(str) {
  let newStr = "";

  for (let char of str) {
    if (str.indexOf(char) == 0) {
      newStr += char.toUpperCase();
    } else {
      newStr += char.toLowerCase();
    }
  }
  return newStr;
}

function reverseString(str) {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
}

calculate = {
  add: function (x, y) {
    return x + y;
  },

  subtract: function (x, y) {
    return x - y;
  },

  divide: function (x, y) {
    return x / y;
  },

  multiply: function (x, y) {
    return x * y;
  },
};

function caesarCipher(str, shift) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newStr = "";

  for (let char of str) {
    newChar = alphabet[(alphabet.indexOf(char.toLowerCase()) + shift) % 26];
    char === " " // if space
      ? (newStr += " ") // append space
      : !alphabet.includes(char.toLowerCase()) // if char not present alphabet (probably punctation)
      ? (newStr += char) // append punctuation
      : char === char.toUpperCase() // if char is uppercase
      ? (newStr += newChar.toUpperCase()) // append new char as upper
      : (newStr += newChar); // else append new char
  }

  return newStr;
}

function analyzeArray(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });

  let average = arr.reduce((prev, next) => prev + next, 0) / arr.length;
  let min = arr[0];
  let max = arr[arr.length - 1];
  let length = arr.length;

  return {
    average,
    min,
    max,
    length,
  };
}
