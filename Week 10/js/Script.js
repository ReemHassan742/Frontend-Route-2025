//object in js
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  isMarried: true,

  wife: {
    firstName: "Jane",
    lastName: "Doe",
    age: 28,
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  },
};
console.log(person.firstName); // Output: John
console.log(person.fullName()); // Output: John Doe
console.log(person.wife.firstName); // Output: Jane
console.log(person.wife.fullName()); // Output: Jane Doe

//Built in Objects like window, document, console
console.log(window); // Output: Window object
console.log(document); // Output: Document object
console.log(console); // Output: Console object

//So I use object to store data and functions related to that and I can access them using dot notation or bracket notation.

//array in js
var fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Output: Apple
console.log(fruits.length); // Output: 3
console.log(fruits[fruits.length - 1]); // Output: Cherry

//We can use for loop to get the elements of the array
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // Output: Apple, Banana, Cherry
}

//I can also use array methods like push, pop, shift, unshift, splice, slice, etc.
fruits.push("Orange"); // Adds "Orange" to the end of the array
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Orange"]
fruits.pop(); // Removes the last element from the array
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]
fruits.shift(); // Removes the first element from the array
console.log(fruits); // Output: ["Banana", "Cherry"]
fruits.unshift("Mango"); // Adds "Mango" to the beginning of the array
console.log(fruits); // Output: ["Mango", "Banana", "Cherry"]
fruits.splice(1, 1); // Removes 1 element from index 1
console.log(fruits); // Output: ["Mango", "Cherry"]
fruits.slice(0, 2); // Returns a new array with elements from index 0 to 1
console.log(fruits); // Output: ["Mango", "Cherry"]

//I can also use array methods like forEach, map, filter, reduce, etc.
fruits.forEach(function (fruit) {
  console.log(fruit); // Output: Mango, Cherry
});

//array can store more then one data type
var mixedArray = [
  "Apple",
  42,
  true,
  { name: "John" },
  function () {
    return "Hello";
  },
];

//I can store objects in an array
var people = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 28,
  },
];
console.log(people[0].firstName); // Output: John
console.log(people[1].lastName); // Output: Doe
//I can also use array methods like find, findIndex, some, every, etc.
var foundPerson = people.find(function (person) {
  return person.firstName === "John";
});
console.log(foundPerson); // Output: { firstName: "John", lastName: "Doe", age: 30 }