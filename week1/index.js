// welcome to 30 days of javscripts // coders den week1 exercisess

//#1 // Comments can make code readable
//#2 // Welcome to 30DaysOfJavaScript
//#3 // comments can make code readable, easy to reuse and informative

//#4 declarering variables.

let firstName = "john"; //i declared a variable named firstName and i assigned a string data type "john" to it.
let isMale = true; //i declared a variable named isMale and i assigned a boolean data type of true to it.
let age; // i declared a variable  named age and left it unassigned;
let country = null; // i declared a variable  named country and assigned it to an empty object,null

//#5 checking data types

console.log(typeof firstName); //checking the firstName data type, it will return string cause  firstname is assigned to a string
console.log(typeof isMale); //checking the isMale data type, it will return boolean cause the isMale is assigned to a boolean
console.log(typeof age); //checking the age data type, it will return undefined cause no value was assigned to age
console.log(typeof country); //checking the country data type, it will return object  cause country is assigned to an empty object

//#6 declearing four variables and leavining it undefined

let num1; //undefined variable
let num2; //undefined variable
let num3; //undefined variable
let num4; //undefined variable

//#7 declearing four variables and assigning values to them

let num5 = 10; // assigned a number(integer) value to it
let num6 = "six"; // assigned a string value to it
let num7 = true; // assigned a Boolean value to it
let num8 = 2.7; // assigned a number(float-piont) value to it

//#8 declering variables to store personal informations in multiple lines

const myFirstName = "Hassana"; // myFirstName not changing
const myLastName = "Abdullahi"; // myLastName  not changing
let maritalStatus = "single"; // maritalStatus can change at anytime
let myCountry = "Nigeria"; // country will change on God
let myAge1 = 20; // keeps changing every year

//#9 declering variables to store personal informations in a single line

let myNotFirstName = "Benita",
  myNotLastName = "Byrone",
  myNotMaritalStatus = "married",
  myGotoCuntry = "UAE",
  myNotAge = "21";

//10 declearing two vars myAge and yourAge and assigning initial values to them then console logging them;

let myAge = 25;
let yourAge = 30;

console.log(`i am ${myAge} years old.`);
console.log(`you are ${yourAge} years old.`);
