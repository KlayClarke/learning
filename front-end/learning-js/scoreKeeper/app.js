const p1 = {
  score: 0,
  scoreDisplay: document.querySelector("#p1-score"),
  button: document.querySelector("#p1"),
};

const p2 = {
  score: 0,
  scoreDisplay: document.querySelector("#p2-score"),
  button: document.querySelector("#p2"),
};
const playerButtons = [p1.button, p2.button];
const resetButton = document.querySelector(".reset");

for (let button of playerButtons) {
  button.addEventListener("click", function () {
    if (button === p1.button) {
      p1.score++;
    } else {
      p2.score++;
    }
    p1.scoreDisplay.innerText = `${p1.score}`;
    p2.scoreDisplay.innerText = `${p2.score}`;
    checkForWinner(p1.score, p2.score, maxScore());
  });
}

resetButton.addEventListener("click", function () {
  for (let p of [p1, p2]) {
    p.score = 0;
    p.scoreDisplay.innerText = p1.score;
    p.scoreDisplay.style.color = "black";
    p.button.disabled = false;
  }
});

function maxScore() {
  return document.querySelector(".max").value;
}

function checkForWinner(p1Score, p2Score, maxValue) {
  if (p1Score >= maxValue || p2Score >= maxValue) {
    for (let button of playerButtons) {
      button.disabled = true;
    }
    if (p1Score > p2Score) {
      p1.scoreDisplay.style.color = "green";
      p2.scoreDisplay.style.color = "red";
    } else if (p2Score > p1Score) {
      p1.scoreDisplay.style.color = "red";
      p2.scoreDisplay.style.color = "green";
    }
  }
}
