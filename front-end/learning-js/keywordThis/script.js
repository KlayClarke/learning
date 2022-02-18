// when using arrow function, keyword 'this' is not set to individual object (person), but the window object
// when using traditional function, keyword 'this' is set to individual object
// if you use both, like in the shoutName function below, you can access the object from within an arrow function

const person = {
  firstName: "Viggo",
  lastName: "Mortensen",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this);
      console.log(this.fullName());
    }, 3000);
  },
};
