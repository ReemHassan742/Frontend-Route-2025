console.log("Q1");
num = window.prompt("Enter a number");
console.log(num);

console.log("Q2");
if (num % 3 && num % 4 == 0) {
  console.log("Yes!");
} else {
  console.log("No!");
}

console.log("Q3");
let num1 = window.prompt("Enter first number");
let num2 = window.prompt("Enter second number");
if (num1 > num2) {
  console.log(num1 + " is greater than " + num2);
} else if (num1 < num2) {
  console.log(num1 + " is less than " + num2);
} else {
  console.log(num1 + " is equal to " + num2);
}

console.log("Q4");
if (num1 > 0) {
  console.log(num1 + " is positive");
} else if (num1 < 0) {
  console.log(num1 + " is negative");
} else {
  console.log(num1 + " is zero");
}

console.log("Q5");
let num3 = window.prompt("Enter a number");
if (num1 >= num2 && num1 >= num3) {
  console.log(num1 + " is the largest number");
} else if (num2 >= num1 && num2 >= num3) {
  console.log(num2 + " is the largest number");
} else {
  console.log(num3 + " is the largest number");
}

console.log("Q6");
if (num1 % 2 == 0) {
  console.log(num1 + " is even");
} else {
  console.log(num1 + " is odd");
}

console.log("Q7");
let char = window.prompt("Enter a character");
if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
  console.log(char + " is a vowel");
} else {
  console.log(char + " is a consonant");
}

console.log("Q8");

let output = "";
for (let i = 1; i <= num1; i++) {
  output += i;
  if (i < num1) output += ", ";
}
console.log(output);

console.log("Q9");
let multiplicationTable = "";
let number = window.prompt("Enter a number for multiplication table");
for (let i = 1; i <= 10; i++) {
  multiplicationTable += number + " x " + i + " = " + number * i + "\n";
}
console.log(multiplicationTable);

console.log("Q10");
for (let i = 1; i <= num1; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

console.log("Q11");
console.log(num1 ** num2);

console.log("Q12 + 13");
var subject1 = window.prompt("Enter subject 1 degree: ");
var subject2 = window.prompt("Enter subject 2 degree: ");
var subject3 = window.prompt("Enter subject 3 degree: ");
var subject4 = window.prompt("Enter subject 4 degree: ");
var subject5 = window.prompt("Enter subject 5 degree: ");
var total = subject1 + subject2 + subject3 + subject4 + subject5;
var percentage = (total / 500) * 100;
console.log("Total marks: " + total);
console.log("Percentage: " + percentage);
if (percentage >= 90) {
  console.log("Grade: A");
} else if (percentage >= 80) {
  console.log("Grade: B");
} else if (percentage >= 70) {
  console.log("Grade: C");
} else if (percentage >= 60) {
  console.log("Grade: D");
} else if (percentage >= 50) {
  console.log("Grade: E");
} else {
  console.log("Grade: F");
}

console.log("Q13");
let month = window.prompt("Enter month number (1-12): ");
let days;
switch (month) {
  case "1":
    days = 31;
    break;
  case "2":
    days = 28;
    break;
  case "3":
    days = 31;
    break;
  case "4":
    days = 30;
    break;
  case "5":
    days = 31;
    break;
  case "6":
    days = 30;
    break;
  case "7":
    days = 31;
    break;
  case "8":
    days = 31;
    break;
  case "9":
    days = 30;
    break;
  case "10":
    days = 31;
    break;
  case "11":
    days = 30;
    break;
  case "12":
    days = 31;
    break;
  default:
    console.log("Invalid month number");
}
console.log("Number of days in month " + month + ": " + days);

console.log("Using switch case");

//Write a program to check whether an alphabet is vowel or consonant

let alphabet = window.prompt("Enter an alphabet: ");
switch (alphabet.toLowerCase()) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log(alphabet + " is a vowel");
    break;
  default:
    console.log(alphabet + " is a consonant");
}

//Write a program to find maximum between two numbers
let numA = window.prompt("Enter first number: ");
let numB = window.prompt("Enter second number: ");
switch (true) {
  case numA > numB:
    console.log(numA + " is greater than " + numB);
    break;
  case numA < numB:
    console.log(numB + " is greater than " + numA);
    break;
  default:
    console.log("Both numbers are equal");
}

let num10 = window.prompt("Enter a number: ");
switch (num10 % 2) {
  case 0:
    console.log(num10 + " is even");
    break;
  default:
    console.log(num10 + " is odd");
}

let num11 = window.prompt("Enter a number: ");
switch (true) {
  case num11 > 0:
    console.log(num11 + " is positive");
    break;
  case num11 < 0:
    console.log(num11 + " is negative");
    break;
  default:
    console.log(num11 + " is zero");
}

let operator = window.prompt("Enter operator (+, -, *, /): ");
let result;
switch (operator) {
  case "+":
    result = parseFloat(num1) + parseFloat(num2);
    break;
  case "-":
    result = parseFloat(num1) - parseFloat(num2);
    break;
  case "*":
    result = parseFloat(num1) * parseFloat(num2);
    break;
  case "/":
    result = parseFloat(num1) / parseFloat(num2);
    break;
  default:
    console.log("Invalid operator");
}
console.log("Result: " + result);
