// to store all param values passed in as an array, use REST (...)
//// (...list) == collect the REST of the values and store them in list
// not spreading things out, but collecting things into a single parameter

function sum(...nums) {
  console.log(nums);
  return nums.reduce((total, el) => total + el);
}
