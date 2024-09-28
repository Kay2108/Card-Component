let firstNumber = 21;
let lastNumber= 79;

let sum = firstNumber + lastNumber;

console.log("Sum of both numbers is:  " + sum);

function getSum(firstNum, lastNum) 
{
    let sum = firstNum + lastNum;
    return sum;
}

let result = getSum(21, 79);
console.log('The result of the getSum function is: ' +result);

let firstNumberInput = document.getElementById("firstNum");
let secondNumberInput = document.getElementById("secondNum");
let addButton = document.getElementById("addButton");


function handleFirstNumberInput(e) {
    firstNumber = e.target.value;
}
firstNumberInput.addEventListener('input', handleFirstNumberInput)

function handleSecondNumberInput(e) {
    secondNumber = e.target.value;  
}
secondNumberInput.addEventListener('input', handleSecondNumberInput)

function getSum(firstNum, lastNum) {
    let sum = firstNum + lastNum;
    return sum;
}
    
addButton.addEventListener('click', () => {
    sum = getSum(parseInt(firstNumber), parseInt(secondNumber));  
    output.textContent = sum;
})