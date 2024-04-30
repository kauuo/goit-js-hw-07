function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

createBtn.addEventListener("click", createBoxes);

function createBoxes(event) {
  boxes.style.display = "flex";
  boxes.style.flexWrap = "wrap";
  boxes.style.gap = "10px";

  let count = parseInt(input.value);
  if (count > 0 && count < 101) {
    const fragment = document.createDocumentFragment(); // Створення фрагмента

    for (let i = 0; i < count; i++) {
      const newBox = document.createElement("div");
      newBox.classList.add("new-box");
      newBox.style.width = `${30 + i * 10}px`;
      newBox.style.height = `${30 + i * 10}px`;
      newBox.style.backgroundColor = getRandomHexColor();

      fragment.appendChild(newBox); // Додавання боксу до фрагмента
    }

    boxes.appendChild(fragment); // Додавання всіх боксів до DOM за одну операцію
  }
}


destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes(event) {
  const removeBoxes = document.querySelectorAll(".new-box");
  removeBoxes.forEach((box) => box.remove());
}
