const clrBtn = document.querySelector('#clears');
const equalBtn = document.querySelector('#equals');

const calcBtns = document.querySelectorAll('.calc-button');
const display = document.querySelector('#display');

const num7 = document.querySelector('#seven');
const num8 = document.querySelector('#eight');
const num9 = document.querySelector('#nine');
const num4 = document.querySelector('#four');
const num5 = document.querySelector('#five');
const num6 = document.querySelector('#six');
const num1 = document.querySelector('#one');
const num2 = document.querySelector('#two');
const num3 = document.querySelector('#three');
const num0 = document.querySelector('#zero');

console.log(calcBtns);
let userInput ="";

let valuesTogether ="";

let button ="";

num7.addEventListener('click', calcValues);
num8.addEventListener('click', calcValues);
num9.addEventListener('click', calcValues);
num4.addEventListener('click', calcValues);
num5.addEventListener('click', calcValues);
num6.addEventListener('click', calcValues);
num1.addEventListener('click', calcValues);
num2.addEventListener('click', calcValues);
num3.addEventListener('click', calcValues);
num0.addEventListener('click', calcValues);


function calcValues() {
  userInput = event.target.textContent;
  valuesTogether += userInput;
  display = valuesTogether;
}



// function displayInput (){
// let value = this.textContent;
// valuesTogether += value;
// }

// calcBtns.addEventListener('click', displayInput);
