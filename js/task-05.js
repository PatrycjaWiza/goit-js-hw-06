const inputValue = document.querySelector("#name-input");
const outputValue = document.querySelector("#name-output");

const handleEvent = () => {
  if (inputValue.value !== "") {
    outputValue.innerHTML = inputValue.value;
  } else {
    outputValue.innerHTML = "Anonymous";
  }
};

inputValue.addEventListener("input", handleEvent);
