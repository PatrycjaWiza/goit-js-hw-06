function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());
const body = document.querySelector("body");
const button = document.querySelector("button");
const color = document.querySelector(".color");

const handleEvent = () => {
  body.style.backgroundColor = getRandomHexColor();
  color.innerHTML = getRandomHexColor();
};
button.addEventListener("click", handleEvent);
