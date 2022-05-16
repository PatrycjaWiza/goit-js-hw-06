/* <input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */

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
