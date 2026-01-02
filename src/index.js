function generatePoem(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#user-input");

  let apiKey ="3374e73o90b5b05b6faa166tf86b3d63";
  let context ="You are a Persian poet. Write beautiful and meaningful Persian poems.";
  const prompt =
  `Write a Persian poem about "${promptInput.value}" with exactly 4 lines.make sure don't include any html tags in the answer ` +
  ` Separate each Persian line using <br>.` +
  ` Then provide an English translation with the same 4-line structure using <br>.` +
  ` Output as HTML with two blocks:` +
  ` 1) Persian in a <div style="text-align:right;"> ... </div>` +
  ` 2) English  and signiture in a <div style="text-align:left;"> ... </div>` +
  ` for signiture add <strong>Mona's AI Generator</strong> left aligned (inside the English block).` +
  ` Return ONLY the HTML (no extra text).`;

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