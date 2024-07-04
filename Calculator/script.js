const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR";
    }
}

function calculateSquareRoot() {
    try {
        const currentValue = eval(display.value);
        if (currentValue >= 0) {
            display.value = Math.sqrt(currentValue);
        } else {
            display.value = "ERROR";
        }
    } catch (error) {
        display.value = "ERROR";
    }
}