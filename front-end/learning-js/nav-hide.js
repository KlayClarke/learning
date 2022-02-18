const navbar = document.querySelector(".navbar");

const lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const scrollTop =
    window.pageYOffset || this.document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});
