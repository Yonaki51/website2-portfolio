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
        setTimeout(typeSnippet, 70); // snelheid per teken
    }
}

window.addEventListener("DOMContentLoaded", typeSnippet);
