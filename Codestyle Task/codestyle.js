let firstTerm = 10; // Unclear variable name
let secondTerm = 20; // Inconsistent variable casing
let Sum = firstTerm + secondTerm; // Mixed casing and unclear variable names

function getArea(length, width) { // Function name is not descriptive
    return rectArea = length * width;
}

// Function to generate random numbers without clear naming or comments
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

// Poorly named class with unclear purpose
class car {
    constructor(model, year) { // Unclear parameter names
        this.model = model; // Inconsistent variable naming
        this.year = year; // Inconsistent variable naming
    }
}

// Function with poor indentation and lack of comments
function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

// Badly named and structured variable
let myFavNumber = 7; // Misleading variable name and missing camelCase

// Poorly formatted comment
let a = 5; // Misplaced comment with no space after variable assignment

// Inefficient code with unnecessary repetition
function getSumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Redundant calculation
    }
    return sum;
}

// Non-descriptive function name and unclear purpose
function getSumNumbers(x, y) {
    let result = 0; // Unclear variable initialization
    for (let i = 0; i < y; i++) { // Unclear loop condition
        result += x; // Ambiguous operation
    }
    return result; // Misleading return value
}