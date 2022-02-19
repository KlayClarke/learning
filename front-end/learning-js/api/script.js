const img = document.querySelector("img");
const randomizeButton = document.querySelector("button");
const searchButton = document.querySelector("button[type='submit']");

function fetchRandomGif() {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=KAEH8Nhd18a775RhjCjbuh1We6qSLMkV&s=beautiful",
    {
      mode: "cors",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch((e) => {
      img.src =
        "https://images.unsplash.com/photo-1531686264889-56fdcabd163f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlyZXdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";
      console.log(e);
    });
}

function searchForGif() {
  let val = document.querySelector("input").value;
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=KAEH8Nhd18a775RhjCjbuh1We6qSLMkV&s=${val}`,
    {
      mode: "cors",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch((e) => {
      img.src =
        "https://images.unsplash.com/photo-1531686264889-56fdcabd163f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlyZXdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";
      console.log(e);
    });

  document.querySelector("input").value = "";
}

fetchRandomGif();

randomizeButton.addEventListener("click", fetchRandomGif);
searchButton.addEventListener("click", searchForGif);
