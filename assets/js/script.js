const snippetText = `const developer = {
  name: "yoni",
  skills: ["java", "html/css", "python"],
  passion: "solving problems"
};`;

const TYPING_SPEED_MAX = 250;
let snippetIndex = 0;

function typeSnippet() {
  const box = document.getElementById("snippet");
  box.textContent = snippetText.slice(0, snippetIndex);
  snippetIndex++;

  if (snippetIndex <= snippetText.length) {
    setTimeout(typeSnippet, Math.floor(Math.random() * TYPING_SPEED_MAX));
  }
}

window.addEventListener("DOMContentLoaded", typeSnippet);

// Skill accordion toggle
document.querySelectorAll(".skill-header").forEach(header => {
    header.addEventListener("click", () => {
        const clickedItem = header.parentElement;

        // Close all skill items except the clicked one
        document.querySelectorAll(".skill-item").forEach(item => {
            if (item !== clickedItem) {
                item.classList.remove("active");
            }
        });

        // Toggle the clicked item
        clickedItem.classList.toggle("active");
    });
});
