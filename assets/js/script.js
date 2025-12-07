const text = "an upcoming developer";
let index = 0;

function typeEffect() {
    const subtitle = document.querySelector(".subtitle");
    subtitle.textContent = text.slice(0, index);
    index++;

    if (index <= text.length) {
        setTimeout(typeEffect, 90); // snelheid per letter
    }
}

window.addEventListener("DOMContentLoaded", typeEffect);

const snippetText = 
`const developer = {
  name: "yoni",
  skills: ["java", "html/css", "python"],
  passion: "solving problems"
};`;

let snippetIndex = 0;

function typeSnippet() {
    const box = document.getElementById("snippet");
    box.textContent = snippetText.slice(0, snippetIndex);
    snippetIndex++;

    if (snippetIndex <= snippetText.length) {
        setTimeout(typeSnippet, 90); // snelheid per teken
    }
}

window.addEventListener("DOMContentLoaded", typeSnippet);
