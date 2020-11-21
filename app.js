const myarr = document.querySelectorAll(".section");
const sections = Array.from(myarr);
const fragment = document.createDocumentFragment();
// Navigation is built dynamically.
for (const section of sections) {
  const show = document.createElement("a");
  show.textContent = `${section.id}`;
  show.setAttribute("class", `${section.id} order disappear`);
  show.addEventListener("click", function onclick() {
    show.setAttribute("href", `#${section.id}`);
  });
  fragment.appendChild(show);
}
navbar.appendChild(fragment);
// Highlight viewed section while scrolling.
const options = {
  threshold: 0.6,
};
let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach((entry) => {
    const className = entry.target.id;
    const choise = document.querySelector(`.${className}`);
    if (entry.isIntersecting) {
      choise.classList.add("mark");
    } else {
      choise.classList.remove("mark");
    }
  });
}
sections.forEach((section) => {
  observer.observe(section);
});
