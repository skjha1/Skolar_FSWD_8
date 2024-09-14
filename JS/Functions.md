```js

// // Function declaration
// function myFunction(param1, param2) {
//     // function body
//     // you can perform operations using param1 and param2
// }

// // Function invocation : function are called and invoked using their name followed by the parentheses

// myFunction(10, 20);


// function myFunction(x, y) {
//     // function body
//     // you can use x and y as variables representating the parameter
// }

// function add(x, y) {
//     let res = x + y;
//     return res;
// }



// // Scope 

// let globalVariable = 10;

// function myFuncton () {
//     let localVariable = 20;
//     console.log(globalVariable); // Accessing global variable 
//     console.log(localVariable); // Accessing local variable 
// } 

// console.log(globalVariable); // Accessing global variable outside of the function
// console.log(localVariable); // Accessing local variable ---- this will throw error as localVarible is not accessible outside of the function

// function add(x, y) {
//     return x + y;
// }

// // Function to find the maximum of two numbers
// function findMax(a, b) {
//     return a > b ? a : b;
// }

// // Function to  check if a number is even
// function isEven(num) {
//     return num % 2 === 0;
// }


// function addNumbers(num1, num2) {
//     return num1 + num2;
// }

// console.log(addNumbers(5, 7)); // output: 12


// function isGreater(num1, num2) {
//     return num1 > num2;
// }

// console.log(isGreater(10, 5)); // output: ture
// console.log(isGreater(3, 5)); // output: flase



// function canVote(age, isCitizen) {
//     return age >=18 && isCitizen; // using the && operator to check both condition
// }

// console.log(canVote(20, true)); // output: ture (both condtion are true)
// console.log(canVote(16, true)); // output: false (age is less then 18)


// function increamentValue(num){
//     return ++num; // ++ operator to increatment the number
// }

// console.log(increamentValue(5)); // output: 6


// function simpleCalculator () {
//     const num1 = parseFloat(prompt("Enter the first number"));
//     const num2 = parseFloat(prompt("Enter the second number"));
//     const operation = prompt('Choose operations (+, -, *, /):')

//     if (operation === '+') {
//         console.log(`${num1} + ${num2} = ${num1 + num2}`);
//     } else if (operation === '-') {
//         console.log(`${num1} - ${num2} = ${num1 - num2}`);
//     } else if (operation === '*') {
//         console.log(`${num1} * ${num2} = ${num1 * num2}`);
//     } else if (operation === '/') {
//         if (num2 !== 0) {
//             console.log(`${num1} / ${num2} = ${num1 / num2}`);
//         } else {
//             console.log("Division by zero is not allowd");
//         }
//     } else {
//         console.log("Invalid operation!")
//     }
    
// }

// simpleCalculator();



const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Enter your name: ', (name) => {
    console.log(`Hello, ${name}!`);
    r1.close();
});






```
