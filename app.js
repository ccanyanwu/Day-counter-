//storing relevant elements from the DOM
const inputNumber = document.querySelector('#number');
const lowerCount = document.querySelector('#lower');
const addCount = document.querySelector('#add');
const reset = document.querySelector('#reset');

// variable for increment 
let counter = 0;

//function holding all event Listeners 
const eventListeners = () =>{
    addCount.addEventListener('click', increment) ;
    lowerCount.addEventListener('click', decrement);
    reset.addEventListener('click', resetFunction)
} 

eventListeners();   //calls the eventListener function 

//function to increment counter 
function increment(e){
    counter += 1;
  inputNumber.value = counter;
  numberColor();
  e.preventDefault();
} 

//function to decrement counter 
function decrement(e){
  counter -= 1;
  inputNumber.value = counter;
  numberColor();
  e.preventDefault();
} 

//changes number color based on number value 
function numberColor() {
  if (inputNumber.value > 0) {
    inputNumber.style.color = 'green';
  }else if (inputNumber.value < 0){
    inputNumber.style.color = 'red'
  }else {
    inputNumber.style.color = '#000'
  } 
}

//resets counter to zero
function resetFunction(e) {
  counter = 0
  inputNumber.value = counter;
  numberColor();
  e.preventDefault();
}
