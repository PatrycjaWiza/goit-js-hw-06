const input = document.querySelector("#validation-input");
const dataSetLength = document.querySelector("input[data-length='6']");
const minLength = dataSetLength.dataset.length;
const handleEvent = () => {
  if (input.value.length < minLength) {
    input.classList.add("invalid");
  } else {
    input.classList.replace("invalid", "valid");
  }
};

input.addEventListener("blur", handleEvent);
