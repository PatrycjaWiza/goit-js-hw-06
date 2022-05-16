const inpt = document.querySelector("#font-size-control");
const txt = document.querySelector("#text");
const handleEvent = () => {
  txt.style.fontSize = `${inpt.value}px`;
};

inpt.addEventListener("input", handleEvent);
