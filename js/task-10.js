function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const divBoxes = document.querySelector("#boxes");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const value = document.querySelector("#controls input");

create.addEventListener("click", createBoxes);

function createBoxes(amount) {
  //create as much divs as amount number TO DO
  amount = value.value;
  const boxArr = [];
  const box = document.createElement("div");
  //each next elements +"10px" TO DO
  box.style.width = "30px";
  box.style.height = "30px";
  box.style.backgroundColor = getRandomHexColor();
  boxArr.push(box);

  divBoxes.append(box);
}
function destroyBoxes() {
  divBoxes.innerHTML = "";
}
destroy.addEventListener("click", destroyBoxes);
