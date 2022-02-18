const scores = [876, 756, 543, 321, 143, 123];

// saving the respective values of scores into own variables - order matters

const [gold, silver, bronze, ...everyoneElse] = scores;

// same as 'const gold = 876;, const silver = 756;, const bronze = 543; const everyoneElse = [321, 143, 123]'
