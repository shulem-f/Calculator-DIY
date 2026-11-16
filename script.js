// Arithmetic
// - Create an add function that returns the sum of two numbers.
function add (num1,num2){

    return num1 + num2

}
// - Create a subtract function that subtracts the second number from the first.
function subtract (num1,num2){

    return num1 - num2

}
// - Create a multiply function that returns the product of two numbers.
function multiply (num1,num2){

    return num1 * num2

}
// - Create a divide function that divides the first number by the second.
function divide (num1,num2){
//   If the second number is zero, return "Cannot divide by zero".
if (num2 === 0){
    return "Cannot divide by zero"
}else{
    return num1 /num2
}
}
// - Store the four functions in an object.
// - Create a mapping from each operator symbol to its key in that object.
const operators = {
    "+":add,
    "-":subtract,
    "*":multiply,
    "/":divide
}


// Setup
// - Initialize num1, operator, num2, and result to empty strings.

let num1 = ''
let num2 = ''
let operator = ''
let result = ''

// - Get the display and buttons.

const display = document.getElementById("input")

const buttons = document.querySelectorAll(".btn")

// - Attach a click listener to each button that calls handleButtonPress.


for (let i = 0; i < buttons.length; i++){
   buttons[i].addEventListener('click', ()=> {
    handleButtonPress(buttons[i])
})
}

//function()
function handleButtonPress(btn){
// When a digit is pressed
if (btn.classList.contains("digit")){
// - If no operator is selected, append the digit to num1 as string and clear result.
    if (!operator){

        num1 += btn.value
        result = ''
        display.value = num1

    } else if (operator){
    // - If an operator is selected, append the digit to num2 as string.
        num2 += btn.value
        display.value = `${num1} ${operator} ${num2} `

    }
}
// When an operator is pressed:
else if (btn.classList.contains("operator")){
// - If num1 is empty and result is a valid number, use result as num1.
    if(!num1 && result !== "Cannot divide by zero" && result){

        num1 = result

    }
    // - If num1 is still empty, show "Type a number" and stop.
    else if (!num1){

        display.value = "Type a number"
        return

    }
    // - If num2 is empty, save the newly pressed operator.
    if(!num2){

        operator = btn.value
        display.value = `${num1} ${operator}`

    }
    // - Otherwise, calculate using num1, num2, and the current operator.
    else if (operator){

        let calculate = operators[operator](Number(num1),Number(num2))
    //   - If the calculation returns an error, clear everything.
    if (calculate === "Cannot divide by zero"){
    //     Clear num1, operator, and num2.
    num1 =''
    num2 = ''
    operator = ''
    result = ''
    display.value = "Cannot divide by zero"

    } else {
    //   - Otherwise, save the answer in result as string and num1.
    result = String(calculate)
    num1 = result
    //     Replace the current operator with the newly pressed operator.
    operator = btn.value
    //     Clear num2 so the next digit starts a new number.
    num2 = ''
    display.value = `${num1} ${operator}`

    }
    }
}
// When equals is pressed
else if (btn.classList.contains("equals")){
// - Calculate using num1, num2, and the current operator.
if(num1 && operator && num2){
let calculate = operators[operator](Number(num1),Number(num2))
// - Store the answer in result as string.
result = String(calculate)
// - Clear num1, operator, and num2.
num1 =''
num2 = ''
operator = ''
display.value = result
} else{
    return
}
}
// When clear is pressed
else {
// - Reset all four variables.
num1 =''
num2 = ''
operator = ''
result = ''
display.value = ''
console.log("clear")

}
}

