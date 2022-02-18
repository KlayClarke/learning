const modal = document.querySelector(".modal");
const triggers = document.querySelectorAll(".popup");

// const closeButton = document.querySelector(".close-button");

// function toggleModal() {
//   modal.classList.toggle("show-modal");
// }

// function windowOnClick(event) {
//   if (event.target === modal) {
//     toggleModal();
//   }
// }

function logJoke() {
  console.log("HAHAHAHAHAHAHAHAHAHAHAHA");
}

triggers.forEach((item) => {
  item.addEventListener("click", logJoke);
});
// closeButton.addEventListener("click", toggleModal);
// window.addEventListener("click", windowOnClick);
