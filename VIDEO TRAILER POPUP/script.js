const buttonEl = document.querySelector(".btn");
const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");

buttonEl.addEventListener("mouseover", (event) => {
  const x = event.pageX - buttonEl.offsetLeft;
  const y = event.pageY - buttonEl.offsetTop;

  buttonEl.style.setProperty("--xPos", x + "px");
  buttonEl.style.setProperty("--yPos", y + "px");
});

btnEl.addEventListener("click", () => {
  trailerContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", () => {
  trailerContainerEl.classList.add("active");
  videoEl.pause();
  videoEl.currentTime = 0;
});
