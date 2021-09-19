document.querySelector(".nav-toggle").addEventListener("click", function (e) {
  this.parentElement.classList.toggle("nav-visible");
});

const navLinks = document.querySelectorAll(".nav-list-item a");
for (let link of navLinks) {
  link.addEventListener("click", function (e) {
    const size = window.matchMedia("(max-width: 890px)");
    if (size.matches)
      this.closest(".nav-visible").classList.remove("nav-visible");
  });
}
