const bcrypt = require("bcrypt");

// const hashPassword = async (pw) => {
//   // create hashed password - salt password
//   const salt = await bcrypt.genSalt(12);
//   console.log(salt);
//   const hash = await bcrypt.hash(pw, salt);
//   console.log(hash);
// };

const hashPassword = async (pw) => {
  // same as before but hashes in less code
  const hash = await bcrypt.hash(pw, 12);
  console.log(hash);
};

// hashPassword("monkey");

// to check a password
const login = async (pw, hashedPw) => {
  const result = await bcrypt.compare(pw, hashedPw);
  if (result) {
    console.log("Logged in");
  } else {
    console.log("Incorrect Password");
  }
};

login("monkey", "$2b$12$rjezMAlfDDjevPEaKSCXVuiA8GVWdSyFni/vRP8CS5CoH5WtOco3a");
