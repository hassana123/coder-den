///weeek five

////exerciselevel 1

//declaring an emtpy array
// 1
const arr = Array();
//or
const arr1 = [];

// declaring an array with items in it
// 2
const webTech = [
  "html",
  "css",
  "javascript",
  "react",
  "node",
  "mangodb",
  "express",
];

//getting the lenght of the array above
// 3
console.log(webTech.length);

//geting the first last and middle items in the array
//last item
// 4
let lastIndex = webTech.length - 1;
console.log(webTech[lastIndex]);

//first item
console.log(webTech[0]);

//middle item
console.log(webTech[3]);

//declaring an array with mixed data types
// 5
const mixedDataTypes = [
  "hassana",
  18,
  "Abdullahi",
  { single: true, isMarried: false, country: "nigeria", height: 6.5 },
];
console.log(mixedDataTypes);

//declaring arr for companies
// 6
const companies = [
  "facebook",
  "google",
  "microsoft",
  "apple",
  "ibm",
  "oracle",
  "amazon",
];
//displaying the array
// 7
console.log(companies);

//displaying the lenght of the array
// 8
console.log(companies.length);

//geting the first last and middle items in the company array
//last item
// 9
let lastComIndex = webTech.length - 1;
console.log(companies[lastIndex]);

//first item
console.log(companies[0]);

//middle item
console.log(companies[3]);

//printing out each company inside the ARRay
// 10
console.log(companies[0]);
console.log(companies[1]);
console.log(companies[2]);
console.log(companies[3]);
console.log(companies[4]);
console.log(companies[5]);
console.log(companies[6]);

// changing each company name to uppercase and displaying it
// 11
console.log(companies[0].toLocaleUpperCase());
console.log(companies[1].toLocaleUpperCase());
console.log(companies[2].toLocaleUpperCase());
console.log(companies[3].toLocaleUpperCase());
console.log(companies[4].toLocaleUpperCase());
console.log(companies[5].toLocaleUpperCase());
console.log(companies[6].toLocaleUpperCase());

// changing the company array to sentence string
// 12
const companies2 = [
  "facebook",
  "google",
  "microsoft",
  "apple",
  "ibm",
  "oracle",
  "amazon",
];
let sentence = "are, big, IT, companines";
companies2.push(sentence);

console.log(companies2.join(", "));
//checking if a company exists
// 13
let message;
if (companies.includes("facebook")) {
  message = "company found";
} else {
  message = "company not found";
}
console.log(message);
//filtering ou companys with more han one o
// 14

// let newCompany =[]
// for (let i = 0; i < companies.length; i++) {
//   if (companies[i].includes("oo")) {
//     newCompany.push(companies[i])
//   }
// }
// console.log(newCompany);

//sorting the companies Array
// 15
console.log(companies.sort());
// reversing the array
// 16
console.log(companies.reverse());

//slicing the array
// 17
console.log(companies.slice(0, 3));
// 18
console.log(companies.slice(-3));
// 19
console.log(companies.slice(3, -3));
// removing the first item from the array
// 20
console.log(companies.shift());
console.log(companies);
// 21
console.log(companies.pop());

console.log(companies);
// 22
console.log(companies.pop());
//removing all compnies
// 23
console.log((companies.length = 0));
console.log(companies);

/////// exercise paart 2

// import { countryNames } from "./countries";
// import {webTechNames} from "./webTechs"

let text =
  "i love teaching and empowering people. i teach html, css, js, react, python.";
text = text.replace(/,/gi, "");
text = text.replace(".", "");
text = text.replace(".", "");
console.log(text);
text = text.split(" ");
console.log(text.length);

let shoppingCart = ["tea", "milk", "coffee", "honey"];
console.log(shoppingCart.unshift("meat"));
console.log(shoppingCart.push("sugar"));

console.log(delete shoppingCart[4]);
console.log((shoppingCart[1] = "Green Tea"));

const frontEnd = ["html", "css", "js", "react", "redux"];
const backEnd = ["node", "express", "mongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//exercise part 3

const age = [19, 22, 19, 24, 20, 26, 24, 25, 24];
console.log(age.sort());

let max = Math.max(...age);
console.log(max);
let min = Math.min(...age);
console.log(min);
