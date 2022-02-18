import { franc } from "franc";
import langs from "langs";
import colors from "colors";

const langRequest = franc(process.argv[2]); // save user input into variable titled 'langRequest'
if (langRequest === "und") {
  console.log("undefined".bgRed);
} else {
  try {
    console.log(langs.where("3", langRequest).name); // try to pass user input into langs module - if langs module fails to take info and return data
  } catch (e) {
    console.log("error".bgRed); // catch the error and print 'error' to console instead
  }
}
