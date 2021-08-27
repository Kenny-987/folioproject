const bod = document.querySelector(".projects");
const buttons = document.querySelectorAll(".btns");
const content = document.querySelectorAll(".pic");

bod.addEventListener("click", function (e) {
  const targeted = e.target.dataset.id;
  if (targeted) {
    buttons.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    content.forEach(function (text) {
      text.classList.remove("active");
    });
    const newEl = document.getElementById(targeted);
    newEl.classList.add("active");
  }
});
