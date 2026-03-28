const menubtn = document.getElementById('menubtn');
const navlinks = document.getElementById('nav-links');

menubtn.addEventListener("click", (e) => {
  navlinks.classList.toggle("active");
  e.stopPropagation();
});

navlinks.addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("click", () => {
  navlinks.classList.remove("active");
});