const clrBtn = document.querySelector('#clears');
const equalBtn = document.querySelector('#equals');

// const calcBtns = document.querySelectorAll('.calc-button');
const display = document.querySelector('#display');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const divideBtn =
document.querySelector('#divide');
const timesBtn = document.querySelector('#times');
const decBtn = document.querySelector('#decimal');

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

console.log(num6);

let values ="";



// function calcValues() {
//   userInput = this.textContent;
//   valuesTogether += userInput;
//   display.textContent = valuesTogether;
// }

num7.addEventListener('click', numSeven);
num8.addEventListener('click', numEight);
num9.addEventListener('click', numNine);
num4.addEventListener('click', numFour);
num5.addEventListener('click', numFive);
num6.addEventListener('click', numSix);
num1.addEventListener('click', numOne);
num2.addEventListener('click', numTwo);
num3.addEventListener('click', numThree);
num0.addEventListener('click', numZero);

decBtn.addEventListener('click', decimal);

plusBtn.addEventListener('click', numPlus);
minusBtn.addEventListener('click', numMinus);
timesBtn.addEventListener('click', numTimes);
divideBtn.addEventListener('click', numDivide);

equalBtn.addEventListener('click', equals);
clrBtn.addEventListener('click', clears);



function numPlus () {
  values += "+";
  display.textContent =  values;
}

function numMinus () {
  values += "-";
  display.textContent =  values;
}
function numDivide () {
  values += "/";
  display.textContent =  values;
}
function numTimes () {
  values += "*";
  display.textContent =  values;
}

function numOne (){
  values += "1";
  display.textContent =  values;
}
function numTwo() {
  values += "2";
  display.textContent =  values;
}
function numThree(){
  values += "3";
  display.textContent =  values;
}
function numFour() {
  values += "4";
  display.textContent =  values;
}
function numZero () {
  values += "0";
  display.textContent =  values;
}
function numFive() {
  values += "5";
  display.textContent =  values;
}
function numSix() {
  values += "6";
  display.textContent =  values;
}
function numSeven() {
  values += "7";
  display.textContent =  values;
}
function numEight() {
  values += "8";
  display.textContent =  values;
}
function numNine() {
  values += "9";
  display.textContent =  values;
}
function numPlus() {
  values += "+";
  display.textContent =  values;
}

function equals () {
  eval(values);
  display.innerHTML = eval(values);
}
function clears () {
  values = "";
  display.innerHTML = "";
}

function decimal () {
  values += ".";
  display.textContent = values;
}
