const clrBtn = document.querySelector('#clears');
const equalBtn = document.querySelector('#equals');

const calcBtns = document.querySelectorAll('.calc-button');
const display = document.querySelector('#display');

let displayInput ="";

// function addToDisplay (){
//
//
// }

calcBtns.addEventListener('click', function(){
  let displayValues ="";
  for (let i = 0; i < calcBtns.length; i++) {
  displayValues.push(calcBtns[i].textContent);
  }
  console.log(displayValues);

})
