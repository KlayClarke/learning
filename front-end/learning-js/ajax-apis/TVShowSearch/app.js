const userSearch = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const displayShows = document.querySelector("#show-info");
const showImage = document.querySelector("#show-img");
const showTitle = document.querySelector("#show-title");

searchButton.addEventListener("click", function (e) {
  e.preventDefault();
  requestShow();
  userSearch.value = "";
});

const requestShow = async () => {
  try {
    const res = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${userSearch.value}`
    );
    showImage.src = `${res.data[0].show.image.medium}`;
    showTitle.innerText = res.data[0].show.name;
    return res.data;
  } catch (e) {
    displayShows.append("Requested show unavailable", e);
    return "Requested show unavailable", e;
  }
};
