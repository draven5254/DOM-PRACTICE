const containerEL = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const popupContainer = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", () => {
  containerEL.classList.add("active");
  popupContainer.classList.remove("active");
});

closeIconEl.addEventListener("click", () => {
  containerEL.classList.remove("active");
  popupContainer.classList.add("active");
});
