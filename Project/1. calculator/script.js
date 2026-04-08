const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // allow only numbers and operators
        if (!/^[0-9+\-*/.]+$/.test(display.value)) {
            display.value = "Error";
            return;
        }

        display.value = Function("return " + display.value)();
    } catch {
        display.value = "Error";
    }
}