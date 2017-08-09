const clrBtn = document.querySelector('#clears');
const equalBtn = document.querySelector('#equals');

const calcBtns = document.querySelectorAll('.calc-button');
const display = document.querySelector('#display');

let input ="";

let valuesTogether ="";




function displayInput (){
let value = this.textContent;
valuesTogether += value;
}
calcBtns.addEventListener('click', displayInput);
