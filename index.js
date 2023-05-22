// My global variable for getting displayed output html
let displayedNum = document.getElementById("output-displayed");

// Function for calculating input from the end user 
function Calculate(){
    if(displayedNum){
        displayedNum.value = eval(displayedNum.value);
    }

    else {
        alert ("Invalid")
    }
   
}

// Function for displaying input from the end user
function Display(num) {
  displayedNum.value += num;
}

// Function for deleting 1 number per time on the screen
function Delete() {
  displayedNum.value = displayedNum.value.slice(0,-1);
}

// Function for clearing all output displayed on the screen
function Clear() {
  displayedNum.value = "";
}




