const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", nameFoo);

function nameFoo(event) {
  const trimmed = event.target.value.trim();
  if (trimmed === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.target.value;
  }
}
