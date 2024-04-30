function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const body = document.querySelector("body");
const color = document.querySelector(".color");
const colorBtn = document.querySelector(".change-color");

colorBtn.addEventListener("click", changeColor);

function changeColor(event) {
  let randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
}
