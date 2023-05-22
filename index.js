// My global variable for getting displayed output html
let displayedNum = document.getElementById("output-displayed");

// My global variable for targetting the operators
let theOperators = document.getElementById("operators");

// Function for calculating input from the end user
function Calculate() {
  displayedNum.value = eval(displayedNum.value);
}

// Function for displaying input from the end user
function Display(num) {
  displayedNum.value += num;
}

// Function for the operators
function Operators(numb) { 
    if (theOperators.value = ".") {
      displayedNum.value = displayedNum.value.slice(0,-1);
    } 
    displayedNum.value += numb;
      
  }

// Function for deleting 1 number per time on the screen
function Delete() {
  displayedNum.value = displayedNum.value.slice(0,-1);
}

// Function for clearing all output displayed on the screen
function Clear() {
  displayedNum.value = "";
}




