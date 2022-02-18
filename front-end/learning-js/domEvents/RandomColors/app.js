const body = document.querySelector("#body");

const rgbText = document.querySelector("#params");
const button = document.querySelector("#color");

button.addEventListener("click", () => {
  let randomNum1 = Math.floor(Math.random() * 255) + 1;
  let randomNum2 = Math.floor(Math.random() * 255) + 1;
  let randomNum3 = Math.floor(Math.random() * 255) + 1;
  body.style.backgroundColor = `rgb(${randomNum1},${randomNum2},${randomNum3})`;
  rgbText.innerHTML = `${body.style.backgroundColor}`;
  if (randomNum1 + randomNum2 + randomNum3 <= 450) {
    rgbText.style.color = "white";
  } else {
    rgbText.style.color = "black";
  }
});
