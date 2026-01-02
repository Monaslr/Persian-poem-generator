function generatePoem(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#user-input");

  let apiKey ="3374e73o90b5b05b6faa166tf86b3d63";
  let context ="You are a Persian poet. Write beautiful and meaningful Persian poems.";

  let prompt =
    `Generate ONLY valid HTML. No Markdown, no explanations, no code blocks. ` +
    `Do NOT use triple backticks (\`\`\`) and do NOT label the output as html. ` +

    `Write a Persian poem about "${promptInput.value}" with exactly 4 lines. ` +
    `Separate each Persian line using <br>. ` +

    `Then write an English translation with exactly 4 lines. ` +
    `Separate each English line using <br>. ` +

    `IMMEDIATELY AFTER the English translation, on a NEW LINE, ` +
    `add this exact signature: <br><strong>Mona's AI Generator</strong>. ` +
    `The signature MUST be present and MUST be the final line and MUST be left aligned. ` +

    `Format the output EXACTLY as follows: ` +
    `<div style="text-align:right; direction:rtl;">[Persian poem]</div>` +
    `<div style="text-align:left; direction:ltr;">[English translation lines]</div>` +
    `<div style="text-align:left; direction:ltr;"><strong>Mona's AI Generator</strong></div>` +
   `Return ONLY these two divs. Nothing else.`;

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