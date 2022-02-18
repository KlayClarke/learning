import "./style.css";
import _ from "lodash";
import printMe from "./print.js";
import myName from "./myName.js";
import Data from "./data.xml";
import Notes from "./data.csv";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.textContent = myName("Klay");
  element.classList.add("hello");

  btn.innerHTML = "Click me to check the consoles!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
