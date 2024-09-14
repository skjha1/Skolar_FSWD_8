```js

var myArray = []; // Empty Array
var myNumbers = [1, 2, 3, 4, 5]; // Array with numbers
var myString = ["apple", "banana", "orange"];


myArray.push(6); // Add 6 to the end of the array
var lastElement = myArray.pop(); // Remove and return the last element of the array
var firstElement = myArray.shift(); // Remove and return the first element of the array
myArray.unshift(); // Add 0 to the beginning of the array

// Accessing element 
var firstElement = myArray[0]; // Access the first element of the array
var thirdElement = myArray[2]; // Access the third element of the array

var fruits = ["apple", "banana", "orange"];
fruits.splice(1, 1, "grapes"); // Remove the 1 element at the indes 1 and then adds "grapes" in its place



// Objects 

var myObjects = {};  // Empty object
var person = {
    name: "yash",
    age: 17,
    city: "Delhi"
}; // Objects with properties


person.name = "Amulya"; // Adding a properties to an object
person.age = 16; // Adding another property


person.sayHello = function() {
    console.log("Hello, my name is " + this.name);
}; // Adding a method to the object 

var name = person.name; // Accessing the property using the dot notation
var age = person['age']; // Accessing the property using the squre bracket notation

person['city'] = 'Chennai'; // Adding or modifying property using squre bracket notation
person.sayHello(); // invoking method using dot notation


```
