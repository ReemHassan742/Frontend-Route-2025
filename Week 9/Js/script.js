//Math operations + - * / ** %

// + addition
let a = 10;
let b = 20;
let c = a + b;
console.log(c); // 30

// - subtraction
let d = 30;
let e = 10;
let f = d - e;
console.log(f); // 20

// * multiplication
let g = 5;
let h = 4;
let = g * h;
console.log(i); // 20

// / division
let j = 20;
let k = 5;
let l = j / k;
console.log(l); // 4

// ** exponentiation
let m = 2;
let n = 3;
let o = m ** n;
console.log(o); // 8

// % modulus
let p = 10;
let q = 3;
let r = p % q;
console.log(r); // 1

// Increment and Decrement
let s = 5;
s++; // s = s + 1
console.log(s); // 6
s--; // s = s - 1
console.log(s); // 5

// Assignment Operators
let t = 10;
t += 5; // t = t + 5
console.log(t); // 15
t -= 3; // t = t - 3
console.log(t); // 12
t *= 2; // t = t * 2
console.log(t); // 24
t /= 4; // t = t / 4
console.log(t); // 6
t %= 2; // t = t % 2
console.log(t); // 0

// Comparison Operators
let u = 10;
let v = 20;
console.log(u == v); // false
console.log(u === v); // false
console.log(u != v); // true
console.log(u > v); // false
console.log(u < v); // true
console.log(u >= v); // false
console.log(u <= v); // true

// Logical Operators
let w = true;
let xx = false;
console.log(w && xx); // false
console.log(w || xx); // true
console.log(!w); // false

// falsy values
// 0, "", null, undefined, NaN
// truthy values
// "0", "false", [], {}, function(){}, -1, 1, true

//Explicit conversion - implicit conversion
let y = "10";
let z = 5;
let a1 = y + z; // "105"
console.log(a1); // "105"
let a2 = Number(y) + z; // 15
console.log(a2); // 15
let a3 = parseInt(y) + z; // 15
console.log(a3); // 15
let a4 = parseFloat(y) + z; // 15
console.log(a4); // 15
let a5 = Boolean(y) + z; // 6'
console.log(a5); // 6
let a6 = Boolean(z) + y; // "true10"
console.log(a6); // "true10"
//Implicit conversion
let a7 = y - z; // 5
console.log(a7); // 5
let a8 = y * z; // 50
console.log(a8); // 50

//if else - switch
let age = 18;
if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior citizen.");
}

// switch
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

var numbers = "";
for (var i = 1900; i <= 2025; i++) {
  numbers += `<Option> ${i} </Option>`;
}
document.getElementById("mySelect").innerHTML = numbers;

//functions
function add(a, b) {
  return a + b;
}
console.log(add(5, 10)); // 15

function subtract(a, b) {
  return a - b;
}
console.log(subtract(10, 5)); // 5

//function expression
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(5, 10)); // 50
//arrow function
const divide = (a, b) => {
  return a / b;
};
console.log(divide(10, 5)); // 2
//IIFE
(function () {
  console.log("This is an IIFE");
})();
//closures
function outerFunction() {
  let outerVariable = "I am outside!";
  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}
const closure = outerFunction();
closure(); // "I am outside!"
//callback
function callbackFunction() {
  console.log("This is a callback function");
}
function mainFunction(callback) {
  console.log("This is the main function");
  callback();
}
mainFunction(callbackFunction); // "This is the main function" "This is a callback function"
//promise
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Promise resolved!");
  } else {
    reject("Promise rejected!");
  }
});
myPromise
  .then((message) => {
    console.log(message); // "Promise resolved!"
  })
  .catch((error) => {
    console.log(error);
  });
//async await
async function asyncFunction() {
  try {
    const result = await myPromise;
    console.log(result); // "Promise resolved!"
  } catch (error) {
    console.log(error);
  }
}
asyncFunction();

//hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase. This means that you can use variables and functions before they are declared in the code.
//Example of hoisting with variables
console.log(x); // undefined
var x = 5;
console.log(x); // 5
//Example of hoisting with functions
function hoistedFunction() {
  console.log("This function is hoisted!");
}
hoistedFunction(); // "This function is hoisted!"
