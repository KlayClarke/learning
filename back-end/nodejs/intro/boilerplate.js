const fs = require("fs");
const dirName = process.argv[2] || "project"; // pass default file name if none passed through

// fs.mkdir("newdir", { recursive: true }, (err) => {
//   // asynchronous way to make directory using nodejs
//   console.log("I come in the callback");
//   if (err) throw err;
// });

// fs.mkdirSync("newdir"); // synchronous way to make directory using nodejs
try {
  fs.mkdirSync(dirName); // create directory with dirName pass through in previous code

  // after dirName, create three files in new dir
  fs.writeFileSync(`${dirName}/index.html`, "");
  fs.writeFileSync(`${dirName}/script.js`, "");
  fs.writeFileSync(`${dirName}/styles.css`, "");
} catch (e) {
  console.log("Error caught");
}
