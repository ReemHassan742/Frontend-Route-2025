//window.alert("Hello, world!");
/*
document.getElementById("demo").innerHTML = "Hello, JavaScript!";
document.getElementById("demo").style.color = "red";

console.log("Hello, world!");
*/

/*
Datatypes

primitives
1. Number  Example: 1, 2, 3, 4, 5
2. String  Example: "Hello, world!"
3. Boolean  Example: true, false
4. Undefined Example: undefined
5. Null Example: null
6. Symbol Example: Symbol("description")
7. BigInt Example: 1234567890123456789012345678901234567890n

Non-primitives
1. Object Example: { name: "John", age: 30 }
2. Array Example: [1, 2, 3, 4, 5]
3. Function Example: function() { return "Hello, world!"; }
4. Date Example: new Date()
5. RegExp Example: /[a-z]/i
6. Map Example: new Map()
7. Set Example: new Set()

 */

userName = "Reem Hassan";
userAge = 21;
console.log(typeof userName);
console.log(typeof userAge);

// JS is a loosely typed language, which means that you don't have to declare the type of a variable when you create it.
// You can change the type of a variable at any time.
// For example, you can create a variable that is a number and then change it to a string later.
// This is called dynamic typing.
// Example:
let x = 5; // x is a number
x = "Hello"; // x is now a string

// Prompt is a built-in function that allows you to take input from the user.
// The prompt function takes a string as an argument and displays it as a message to the user.
var userName = window.prompt("Please enter your name:");
console.log(userName);

//concatination is the process of joining two or more strings together.
var firstName = "Reem";
var lastName = "Hassan";
var fullName = firstName + " " + lastName;
console.log(fullName);
