window.addEventListener("DOMContentLoaded", function () {
 
  const darkToggle = document.getElementById("dark-toggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const searchInput = document.getElementById("searchInput");
searchInput?.addEventListener("keyup", function () {
  const value = this.value.toLowerCase();
  document.querySelectorAll(".course-card").forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(value) ? "block" : "none";
  });
});

const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelector(".tab.active")?.classList.remove("active");
    tab.classList.add("active");
    const category = tab.dataset.category;
    document.querySelectorAll(".course-card").forEach(card => {
      card.style.display = category === "all" || card.dataset.category === category ? "block" : "none";
    });
  });
});
});