// Declares two variables, adds them together and stores the result in the sum variable
let firstTerm = 10; 
let secondTerm = 20; 
let sum = firstTerm + secondTerm; 

//Calculate the area by multiplying its length by its width
function getArea(length, width) { 
    return length * width;
}

// Function returns a random integer between min and max inclusive
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Blueprint for creating car objects
class Car {
    constructor(model, year) { 
        this.model = model; 
        this.year = year; 
    }
}

// Function calculate the factorial of number n
function factorial(n) {
    if (n <= 1) {
        return  1
    } else {
        return n * factorial(n-1)
    }
}

let myFavNumber = 7; 


let myNotFavNumber = 5; 

// Function calculates and returns the sum of all elements in a numeric array
function getSumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; 
    }
    return sum;
}

// Function calculate the sum by adding the first number until it's less than the second
function getSumNumbers(firstNumber, secondNumber) {
    let result = 0; 
    for (let i = 0; i < secondNumber; i++) { 
        result += firstNumber; 
    }
    return result; 
}