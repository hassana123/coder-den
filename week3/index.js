//Week three Exercises//

/////////////////////////exercise level one///////////////////////
/////////////////#1//////////////////////////
//declaring variables
let firstName = "Hassana";
let lastName = "Abdullahi";
let country = "Nigeria";
let city = "Kaduna";
let age = 10;
let isMarried = false;

// checking data types
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);

/////////////////#2//////////////////////////

//comparing data types
console.log(typeof 10 === typeof "10"); // not strictly equal
/////////////////#3//////////////////////////
console.log(typeof parseInt("9.8") == typeof "10"); //not equal at all

// writing js statement that will provide truthy value
let num = 1; //truthy value
let isHappy = true; //truthy value
let greeting = "Hello"; //truthy value

/////////////////#4//////////////////////////
// writing js statement that will provide falsy value

let num1; //truthy value
let isNotHappy = false; //truthy value
let greetings = ""; //truthy value

/////////////////#5//////////////////////////
//figuring out the results of the following comparison expression
console.log(4 > 3); // is 4 >3 //true
console.log(4 >= 3); // is 4 > or = 3 //true
console.log(4 < 3); // is 4 < 3 //false
console.log(4 == 4); // is 4 loosely = 4 //true
console.log(4 === 4); // is 4 strictly equal 4 //true
console.log(4 != 4); // is 4 not loosely = 4 //false
console.log(4 !== 4); // is 4 not strictly = 4 //false
console.log(4 != "4"); // is 4 not loosely ="4"//false
console.log(4 !== "4"); // is 4 not strictly = "4" //true
console.log(4 == "4"); // is 4 loosely = "4" //true
console.log(4 === "4"); // is 4 strictly equal "4" //false
console.log("jargon".length !== "python".length); // the  are equal in lenght so saying they are not equaal in lenght will display a falsy value

/////////////////#6//////////////////////////
console.log(4 > 3 && 10 < 12); //is 4>3 and 10<12 //true
console.log(4 > 3 && 10 > 12); //is 4>3 and 10>12 //false
console.log(4 > 3 || 10 < 12); //is 4>3 or 10<12 //true
console.log(4 > 3 || 10 < 12); //is 4>3 or 10<\>12 //true
console.log(!(4 > 3)); //not 4>3 //no
console.log(!(4 < 3)); //not 4<3 //yes
console.log(!false); //not false //yes
console.log(!(4 > 3 && 10 < 12)); //not 4>3 and 10<12 //false
console.log(!(4 > 3 && 10 > 12)); //not 4>3 and 10>12 /true
console.log(!("dragon".includes("on") && "python".includes("on")));

/////////////////#7//////////////////////////

//using date object to get date time, day, year, month, hours, minutes, secnds,

// initializing the date object
let date = new Date();
// geting date time, day, year, month, hours, minutes, secnds
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getTime());

/////////////////////////exercise level Two///////////////////////

/////////////////#1//////////////////////////
//using the prompt window function to   get the base and height
// let base = prompt("enter base");
// let height = prompt("Enter height");
// // calculating the area of a triangle using the values entered into the prompt
// let areaOfTriangle = 0.5 * base * height;
// console.log(areaOfTriangle);

/////////////////#2//////////////////////////

//using the prompt window function to get side a,b and c of a traingle to calculate the perimeter
// let sideA = prompt("Enter side A");
// let sideB = prompt("Enter side B");
// let sideC = prompt("Enter side C");

// let perimeterOfTriangle =
//   parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);
// console.log(perimeterOfTriangle);

/////////////////#3//////////////////////////

// let lenght = prompt("Enter length");
// let width = prompt("Enter length");

// let areaOfRectangle = lenght * width;
// console.log(areaOfRectangle);
// let perimeterOfRectangle = 2 * (parseFloat(lenght) + parseFloat(width));
// console.log(perimeterOfRectangle);

/////////////////#4//////////////////////////

// let radius = prompt("Enter radius");
// const PI = 3.14;
// let areaOfCircle = PI * radius * radius;
// console.log(areaOfCircle);
// let circumference = 2 * PI * radius;
// console.log(circumference);

/////////////////#5//////////////////////////
// y=2x-2
// the slope intercept form is y=mx+b  //the slope is m=2  second cordinates is b=2 so y-intercept(0,2)
let y = 0;
let x;
let m = 2;
let b = 2;
y = m * x + b;
x = 2 / 2;
console.log((y = m * x + b));

/////////////////#6//////////////////////////
// so basically yeah zero clue whats going on here
function xIntercept(a, b) {
  return a[0] - (a[1] * (b[0] - a[0])) / (b[1] - a[1]);
}
console.log(xIntercept([2, 2], [6, 10]));
/////////////////#7//////////////////////////
console.log(y === xIntercept);

/////////////////#9//////////////////////////
//
// let hours = prompt('enter hours');
// let ratePerHours = prompt("enter rate per hours");
// let earnings = hours * ratePerHours;
// console.log(earnings);
function sum(num, num1 = num) {
  console.log(num + num1);
}
sum(10);

/////////////////#10//////////////////////////

function nameCheck(firstName) {
  let message;
  if (firstName.length > 7) {
    message = "firstName is long";
  } else {
    message = "firstName is short";
  }
  return message;
}
console.log(nameCheck("hassana"));

/////////////////#11//////////////////////////
function nameCheck1(firstName, lastName) {
  let message;
  if (firstName.length > lastName.length) {
    message = `your first name ${firstName} is longer than your last name ${lastName}`;
  } else {
    message = `your last name ${lastName} is longer than your first name ${firstName}`;
  }
  return message;
}
console.log(nameCheck1("Hassana", "Abdullahi"));
/////////////////#12//////////////////////////
let myAge = 200;
let yourAge = 150;
let diff = myAge - yourAge;
console.log(`i am ${diff} years older than you`);
/////////////////#13//////////////////////////
// let userYear = prompt("enter year of birth");
// let userAge = date.getFullYear() - userYear;
// let message;
// if (userAge>=18) {
//   message= `you are ${userAge}, you are old enough to drive`
// } else {
//   message =`you are ${userAge} you will be allowed to drive after ${18-userAge} years`
// }
// console.log(message);
/////////////////#14//////////////////////////
// let yearsLived = prompt("enter number of years");
// let yearsLivedInDays = 365 * yearsLived;
// let yearsLivedInHours = yearsLivedInDays*24;
// let yearsLivedInMinutes = yearsLivedInHours*60;
// let yearsLivedInSecond = yearsLivedInMinutes*60;
// console.log(yearsLivedInSecond);

/////////////////#15//////////////////////////
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();

console.log(`${year}-${month}-${day}  ${hours}:${minutes}`);
console.log(`${day}-${month}-${year}  ${hours}:${minutes}`);
console.log(`${day}/${month}/${year}  ${hours}:${minutes}`);

/////////////////////////exercise level three///////////////////////
/////////////////#1//////////////////////////
month = month.toString();
month.length === 1 ? (month = "0" + month) : month;
day = day.toString();
day.length === 1 ? (day = "0" + day) : day;

console.log(`${year}-${month}-${day}  ${hours}:${minutes}`);
