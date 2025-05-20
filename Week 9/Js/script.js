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
let x = false;
console.log(w && x); // false
console.log(w || x); // true
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
