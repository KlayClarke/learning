const imageFrame = document.querySelector("#frame img");
const prevButton = document.querySelector("#prev-button i");
const nextButton = document.querySelector("#next-button i");
const navDotHolder = document.querySelector("#nav-dots-holder");

let currentImageIndex = 0;

const images = [
  "https://images.unsplash.com/photo-1645060815414-15bb7dfea21b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8aVVJc25WdGpCMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1644981878591-8c6c8ba61f9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8aVVJc25WdGpCMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1628130298757-eea141a85719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1644784169245-d470e5811962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1644789862230-560426f59781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
];

for (const image of images) {
  // create nav dot
  const navDot = document.createElement("i");
  navDot.classList.add("fa-solid");
  navDot.classList.add("fa-circle");
  navDot.classList.add("nav-dot");
  navDot.setAttribute("id", images.indexOf(image));
  navDotHolder.appendChild(navDot);
}

const navDots = document.querySelectorAll(".nav-dot");

imageFrame.setAttribute("src", images[currentImageIndex]);
activateNavDot(currentImageIndex);
let autoChange = window.setInterval(nextImage, 5000);

function prevImage() {
  window.clearInterval(autoChange);
  autoChange = window.setInterval(nextImage, 5000);

  if (currentImageIndex === 0) {
    currentImageIndex = images.length - 1;
  } else {
    currentImageIndex -= 1;
  }
  imageFrame.setAttribute("src", images[currentImageIndex]);
  activateNavDot(currentImageIndex);
}

function nextImage() {
  window.clearInterval(autoChange);
  autoChange = window.setInterval(nextImage, 5000);
  if (currentImageIndex === images.length - 1) {
    currentImageIndex = 0;
  } else {
    currentImageIndex += 1;
  }
  imageFrame.setAttribute("src", images[currentImageIndex]);
  activateNavDot(currentImageIndex);
}

function navDotClick(e) {
  window.clearInterval(autoChange);
  autoChange = window.setInterval(nextImage, 5000);
  currentImageIndex = parseInt(e.target.id);
  imageFrame.setAttribute("src", images[currentImageIndex]);
  activateNavDot(currentImageIndex);
}

function activateNavDot(index) {
  for (const navDot of navDots) {
    navDot.id == index
      ? navDot.classList.add("active")
      : navDot.classList.remove("active");
  }
}

prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);
navDots.forEach((dot) => dot.addEventListener("click", navDotClick));
