
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
console.log(buttons);
let input ="";

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', userInput)
}

function userInput () {
if (this.value == 'c'){
  clrScreen();
} else if(this.value == '='){

}
}


function showInput(string){
  display.textContent
}

function clrScreen() {
input="";
showInput(input);
}
