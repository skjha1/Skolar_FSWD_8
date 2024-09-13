```js
// Equal (==)

console.log(5 == '5');

// Strict Equal (===) 

console.log(5 === '5');

// Not Equal (!=)

console.log(5 != '5');

// Strict Not Equal (!==)

console.log(5 !== '5');


// Logical operators
// Logical AND (&&): Return true if both operands are true 

console.log(true && true); // true
console.log(true && false); // false

// Logical OR (||): Return true if at least one operand are true 

console.log(true || false); // true 
console.log(false || false); // false

// Logical NOT (!): Returns the opposite boolean value of the operands

console.log(!true); // false 
console.log(!false); // true


// Conditional statement

if (condition) {
    // code block to be executed if the condition is true
}

// else statement

if (condition) {
    // code block to be executed if the condition is true
} else {
    // code block to be executed if the condition is false
}


// else if statement(elif)

if (condition1) {
    // code block to be executed if the condition1 is true
} else if(condition2)  {
    // code block to be executed if the condition2 is ture 
} else {
    // code block to be executed if all condition is false
}


// Loops 
// For loop 

for (let i = 0; i< Array.length; i++) {
    // code block to be executed for each item in the array
}

// While loop 
while (condition) {
     // code block to be executed if the condition is true
}

//do while loop 
do {
    // code block to be executed at least once
} while (condition);



for (let i = 0; i < 5; i++) {
    console.log(i); // print from 
}


let i= 0;
while (i < 5){
    console.log(i); // Print from 
    i++;
}


let j= 0;
do{
    console.log(j); // Print from 
    j++;
} while(j < 5);


// switch statement 

switch (excpression) {
    case value1:
        // code block to be exceted if the expression equals to value1
        break;
    case  value2:
        // code block to be exceted if the expression equals to value2
        break;

    default:
        // code vlock to be executed if exprssions doesn't match ant case
}


let fruit = 'Apple';

switch (fruit) {
    case 'Banana':
        console.log("Banana is yellow"); 
        break;
    case  'Apple':
        console.log("Apple is red"); 
        break;

    case  'Orange':
        console.log("Orange is orange"); 
        break;

    default:
        console.log("Unknown fruit"); 
}







```
