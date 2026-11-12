document.getElementById('bluediv').textContent = "Hello world"

// Arithmetic
// - Create an add function that returns the sum of two numbers.
// - Create a subtract function that subtracts the second number from the first.
// - Create a multiply function that returns the product of two numbers.
// - Create a divide function that divides the first number by the second.
//   If the second number is zero, return "Cannot divide by zero".
// - Store the four functions in an object.
// - Create a mapping from each operator symbol to its key in that object.

// Setup
// - Initialize num1, operator, num2, and result to empty strings.
// - Get the display and buttons.
// - Attach a click listener to each button that calls handleButtonPress.

//function()
// When a digit is pressed
// - If no operator is selected, append the digit to num1 as string and clear result.
// - If an operator is selected, append the digit to num2 as string.

// When an operator is pressed:
// - If num1 is empty and result is a valid number, use result as num1.
// - If num1 is still empty, show "Type a number" and stop.
// - If num2 is empty, save the newly pressed operator.
// - Otherwise, calculate using num1, num2, and the current operator.
//   - If the calculation returns an error, save it in result.
//     Clear num1, operator, and num2.
//   - Otherwise, save the answer in result as string and num1.
//     Replace the current operator with the newly pressed operator.
//     Clear num2 so the next digit starts a new number.
// When equals is pressed
// - Calculate using num1, num2, and the current operator.
// - Store the answer in result as string.
// - Clear num1, operator, and num2.

// When clear is pressed
// - Reset all four variables.

