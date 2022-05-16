const counterValue = document.querySelector("#value");
const addValue = document.querySelector('[data-action="increment"]');
const minusValue = document.querySelector('[data-action="decrement"]');

let a = 1;

const addLog = () =>{
    a++;
    counterValue.innerHTML = a;
};

const minusLog = () =>{
    a--;
    counterValue.innerHTML = a;
};

addValue.addEventListener("click", addLog);
minusValue.addEventListener("click", minusLog);