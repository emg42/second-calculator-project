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

console.log(num6);

let values ="";



// function calcValues() {
//   userInput = this.textContent;
//   valuesTogether += userInput;
//   display.textContent = valuesTogether;
// }

num7.addEventListener('click', numSeven);
// num8.addEventListener('click', numEight);
// num9.addEventListener('click', numNine);
num4.addEventListener('click', numFour);
num5.addEventListener('click', numFive);
num6.addEventListener('click', numSix);
num1.addEventListener('click', numOne);
num2.addEventListener('click', numTwo);
num3.addEventListener('click', numThree);
num0.addEventListener('click', numZero);



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
// function numEight() {
//   values += "8";
//   display.textContent =  values;
// }
// function numNine() {
//   values += "9";
//   display.textContent =  values;
// }
// function numPlus() {
//   values += "+";
//   display.textContent =  values;
// }
// function numMinus() {
//   values += "+";
//   display.textContent =  values;
// }
// function numPlus() {
//   values += "-";
//   display.textContent =  values;
// }

// function numClr() {
//   values += "";
//   display.textContent =  values;
// }
// function numEquals



// function displayInput (){
// let value = this.textContent;
// valuesTogether += value;
// }

// calcBtns.addEventListener('click', displayInput);
