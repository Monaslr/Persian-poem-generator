function generatePoem(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#user-input");

  let apiKey ="3374e73o90b5b05b6faa166tf86b3d63";
  let context ="You are a Persian poet. Write beautiful and meaningful Persian poems.";
  let prompt =`Write a Persian poem about ${promptInput.value} in 4 lines.seprate the lines with <br>.also add Mona's AI Generator signature at the end of the poem with <strong> element.`;
  let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a Persian poem about ${promptInput.value}...</div>`;

  axios.get(apiUrl).then(displayPoem);
}

function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let formElement = document.querySelector("#poem-form");
formElement.addEventListener("submit",generatePoem); 