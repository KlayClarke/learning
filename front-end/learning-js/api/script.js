const img = document.querySelector("img");
const randomizeButton = document.querySelector("button");
const searchButton = document.querySelector("button[type='submit']");

async function fetchRandomGif() {
  let response = await fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=KAEH8Nhd18a775RhjCjbuh1We6qSLMkV&s=beautiful",
    {
      mode: "cors",
    }
  );
  let json = await response.json();
  img.src = json.data.images.original.url;
}

async function searchForGif() {
  let val = document.querySelector("input").value;
  let response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=KAEH8Nhd18a775RhjCjbuh1We6qSLMkV&s=${val}`,
    {
      mode: "cors",
    }
  );
  let json = await response.json();
  img.src = json.data.images.original.url;
}

fetchRandomGif();

randomizeButton.addEventListener("click", fetchRandomGif);
searchButton.addEventListener("click", searchForGif);
