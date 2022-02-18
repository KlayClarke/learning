const myMath = {
  PI: 3.14159,
  square: function (num) {
    return num * num;
  },
  cube: function (num) {
    return num * num * num;
  },
};

const myMath = {
  PI: 3.14159,
  square(num) {
    return num * num;
  },
  cube(num) {
    return num * num * num;
  },
};

const person = {
  first: "Robert",
  last: "Herjavec",
  fullName() {
    return `${this.first} ${this.last}`;
  },
};

// function sing() {
//   console.log("Do");
//   console.log("Re");
//   console.log("Mi");
// }

// sing();

// function greet(person) {
//   console.log(`Hello, ${person}`);
// }

// greet("Klay");

// function greet(firstName, lastName) {
//   console.log(`Hey there, ${firstName} ${lastName[0]}!`);
// }

// greet("Klay", "Clarke");

// function repeat(string, number) {
//   let strConcat = "";
//   for (let i = 0; i < number; i++) {
//     strConcat += string;
//   }
//   console.log(strConcat);
// }

// repeat("hi", 5);

// // SCOPE

// let radius = 8;
// if (radius > 0) {
//   const PI = 3.14159;
//   let msg = "hi!";
// }

// console.log(radius);
// console.log(PI);
// console.log(msg);
