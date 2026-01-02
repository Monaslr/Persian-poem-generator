function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: " بر چهره گل نسیم نوروز خوش است",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let formElement = document.querySelector("#poem-form");
formElement.addEventListener("submit",generatePoem); 