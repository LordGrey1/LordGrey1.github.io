// this will not be executed in runtime

/* type my multi line
 * more lines
 * comment i can carry on like this */

/*
 * Variables:
 * There are 3 types of variables
 * let, const, var */

/* var
 * This is the legacy way of defining a variable */
var firstName = "Naim";
var lastName = "Mustafa";

/*
 * const
 * when you define a const you cannot change its value later on
 * it will throw and error if you dare to try!!!!
 */
const firstName2 = "Pawel";
// This will error
// firstName2 = "Something else";

/* let
 * When you define a let variable this means you can redefine it
 * and change its value with other functions
 */
let firstName3 = "Sara";
// this will change firstName3's value
firstName3 = "Sara Nocun";

/*
 * console.log
 * this will output a statement in your console
 */
console.log("Hello World");

// String concatination
const name = "Pawel Nocun";
const job = "Developer";
const age = 29;

// addition
const output = name + " " + job + " " + age;

// inline string
const outputInline = `${name} ${job} ${age}`;

// example
const fullSentence =
  "My name is " +
  name +
  ". And i work as a " +
  job +
  " and I am " +
  age +
  " years old";
const fullSentenceInline = `My name is ${name} and i work as a ${job} and I am ${age} years old`;

// Math
const price = 15;
const amount = 20;
const itemName = "apple";

const orderSummary = `You have been purchased ${amount} of ${itemName} and it wil cost you ${
  amount * price
}$`;

/* Home Work
 * Try to create a function for an order system
 * when ever the function is being called it should output the orderSummary
 */

function takeOrder(price, amount, itemName) {
    // your code here
}

console.log(takeOrder(price, amount, itemName))
// shoud output
// You have been purchased 20 of apple and it wil cost you 300$