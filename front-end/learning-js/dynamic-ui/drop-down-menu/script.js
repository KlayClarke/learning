const dropDownLinks = document.querySelectorAll("nav ul li a");
const dropDownSection = document.querySelector("section");
const dropDownMenus = document.querySelectorAll("section ul");

function toggleMenuContents(e) {
  dropDownMenus.forEach((menu) => menu.classList.add("hide"));
  dropDownSection.classList.add("hide");
  for (const menu of dropDownMenus) {
    // if menu corresponds to clicked link
    if (menu.classList.contains(e.target.className)) {
      // toggle menu
      menu.classList.toggle("hide");
      // toggle section
      dropDownSection.classList.toggle("hide");
    }
  }
  dropDownLinks.forEach((link) =>
    link !== e.target
      ? // deactivate all links but the link pressed by user
        link.classList.remove("active")
      : // toggle active class for link pressed by user
        link.classList.toggle("active")
  );
}

dropDownLinks.forEach((link) =>
  link.addEventListener("click", toggleMenuContents)
);
