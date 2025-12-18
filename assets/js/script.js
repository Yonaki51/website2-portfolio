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
    setTimeout(typeSnippet, Math.floor(Math.random() * 250)); // snelheid per teken
  }
}

window.addEventListener("DOMContentLoaded", typeSnippet);

// dropdown
document.querySelectorAll(".skill-header").forEach(header => {
    header.addEventListener("click", () => {
        
        const clickedItem = header.parentElement;

        // Sluit ALLE skill-items behalve degene waarop is geklikt
        document.querySelectorAll(".skill-item").forEach(item => {
            if (item !== clickedItem) {
                item.classList.remove("active");
            }
        });

        // Toggle alleen het geklikte item
        clickedItem.classList.toggle("active");
    });
});
