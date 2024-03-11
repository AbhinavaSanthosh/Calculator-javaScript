const display = document.getElementById('display');

function appendToDisplay(input){
  display.value += input;
}

function calculate(){
  try{
    display.value = eval(display.value);
  }catch(error){
    display.value = "error";
  }
}

function clearDisplay(){
  display.value = '';
}

function backDisplay(){
  display.value = display.value.substr(0,display.value.length-1);
}