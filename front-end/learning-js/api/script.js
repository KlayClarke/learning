const img = document.querySelector("img");

console.log(img);

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
  });
