/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNums(){
    const number1 = Number(document.getElementById("add1").value);
    const number2 = Number(document.getElementById("add2").value);
    document.querySelector('#sum').value = add(number1, number2);
}

document.querySelector("#addNumbers").addEventListener('click', addNums);

/* Function Expression - Subtract Numbers */
const subtract = function(subtract1, subtract2){
    return subtract1 - subtract2;

}

function subtractNumbers(){
    const subtract1 = Number(document.getElementById("subtract1").value);
    const subtract2 = Number(document.getElementById("subtract2").value);
    document.querySelector('#difference').value = subtract(subtract1, subtract2);
}

document.querySelector("#subtractNumbers").addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => {
    return factor1*factor2;
}

function multiplyNumbers(){
    const factor1 = Number(document.getElementById("factor1").value);
    const factor2 = Number(document.getElementById("factor2").value);
    document.querySelector('#product').value = multiply(factor1, factor2);
}

document.querySelector("#multiplyNumbers").addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const devide = (dividend, divisor) => {
    return dividend/divisor;
}

function divideNumbers(){
    const dividend = Number(document.getElementById("dividend").value);
    const divisor = Number(document.getElementById("divisor").value);
    document.querySelector('#quotient').value = devide(dividend, divisor);
}

document.querySelector("#divideNumbers").addEventListener('click', divideNumbers);

/* Decision Structure */

function totalValue(subtotal){
    if (document.getElementById('member').checked){
        return subtotal - (subtotal*0.2);
    } else {
        return subtotal;
    }
}
function calculateTotal(){
    const subtotal = Number(document.getElementById("subtotal").value); 
    document.getElementById('total').innerHTML = `$${totalValue(subtotal)}.00`; 
}
  
document.querySelector("#getTotal").addEventListener('click', calculateTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const arrayElement = document.getElementById('array');
arrayElement.innerHTML = `${numbersArray}`

/* Output Odds Only Array */
document.getElementById("odds").innerHTML = numbersArray.filter(oddFunction)
function oddFunction(number){
    return number % 2 !== 0;
}

/* Output Evens Only Array */
document.getElementById("evens").innerHTML = numbersArray.filter(evenFunction)
function evenFunction(number){
    return number % 2 === 0;
}

/* Output Sum of Org. Array */
document.getElementById("sumOfArray").innerHTML = numbersArray.reduce(addNumbers)
function addNumbers(sum, number){
    return number += sum;
}
/* Output Multiplied by 2 Array */
document.getElementById("multiplied").innerHTML = numbersArray.map(multiplyNum)
function multiplyNum(number){
    return number * 2;
}
/* Output Sum of Multiplied by 2 Array */
document.getElementById("sumOfMultiplied").innerHTML = numbersArray.map(multiplyNum).reduce(addNumbers)