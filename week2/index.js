//coders den week2 exercise part1//

//#1  declaring a variable named challenge and assigning it to a value
let challenge = "30 Days Of JavaScript";
console.log(challenge); //prints the  value of challenge to the conosle
console.log(challenge.length); //prints the length of the values in challenge
console.log(challenge.toUpperCase()); //prints the values of challenge in capital letters
console.log(challenge.toLowerCase()); //prints the values of challenge in lowerCase letters
console.log(challenge.substring(0, 2)); //slice ou 30
console.log(challenge.slice(2)); //slice out "days of javascript"
console.log(challenge.includes("Script")); // checks if the main string contiains the substring Script
console.log(challenge.split()); //splitting the value of challenge into an array
console.log(challenge.split(" ")); // splittng it at the space

let socials = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(socials.split(",")); //splitting socialsby the comma

console.log(challenge.replace("JavaScript", "Python")); // using the replace method i am replacing the substing "javaScript" with "pythn"
console.log(challenge.charAt(15)); //displaying the character at index 15 in "30 Days Of JavaScript"
console.log(challenge.charCodeAt("j")); // displaying the ASCII number of j i
console.log(challenge.indexOf("a")); //displying the position of the first occurrence of a in "30 Days Of JavaScript"
console.log(challenge.lastIndexOf("a")); //displying the position of the last occurrence of a in "30 Days Of JavaScript"

let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because")); // getting the index of the first occurrence of "because"  in the sentence
console.log(sentence.lastIndexOf("because")); // getting the index of the last occurrence of "because"  in the sentence;
console.log(sentence.search("because")); // getting the index of the first occurrence of "because"  in the sentence;

let spacedChallenge = " 30 Days Of JavaScript ";
console.log(spacedChallenge.trim()); //clenning out unnecessary whitespace

console.log(challenge.startsWith(3)); //checking if the string start with 3
console.log(challenge.endsWith("t")); //checking if the string ends with t
let pattern = /a/gi;
console.log(challenge.match(pattern)); // displays all the a's in the string "30 Days Of JavaScript"

let firstPart = "30 Days Of";
let secondPart = "JavaScript";
console.log(firstPart.concat(" ", secondPart)); // merging two seperate string together (adding the value of secondPrt to firstPart)

console.log(challenge.repeat(2)); //printing the value of challenge twice

//coders den week2 exercise part2//

let quote1 =
  "There is no exercise better for the heart than reaching down and lifting people up.";
console.log(quote1); // displaying the value in quote1

let quote2 =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(quote2); // displayin the value in quote2

let stringNum = "10";
console.log(typeof stringNum); //checking for the data type of strinNum
let intNum = 10;
console.log(typeof intNum); //checking for the data type of intNum
let floatNum = "9.8";
console.log(typeof floatNum);

// we want the data types  to be same but cleary the re not so we have to typeCast

console.log(intNum === parseInt(stringNum)); // maaking it eaxactly equal
console.log(intNum === Math.round(floatNum)); // maaking it eaxactly equal
// checking if word and word2  both has "on" inside them
let word = "jargon";
console.log(word.includes("on")); // contains  on
let word2 = "python";
console.log(word2.includes("on")); // also contains  on
// checking if shortSentence has the word "jargon in it"
let shortSentence = "I hope this course is not full of jagonn.";
console.log(shortSentence.includes("jargon")); //it does

let randNumBtwzeroToHundred = Math.random() * 101; // rndom number btw zero to hundred inclusively
console.log(Math.floor(randNumBtwzeroToHundred));

let randNumBtwFiftyToHundred = Math.random() * 51 + 50; // rndom number btw fifty to hundred inclusively
console.log(Math.floor(randNumBtwFiftyToHundred));

let randNumBtw0To225 = Math.random() * 256;
console.log(Math.floor(randNumBtw0To225)); // raandom num btw 0 to 255

let pattern1 =
  "1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125"; // using escape characters to creaate a pattern

console.log(pattern1);
//using random number method to access the string "javaScript"
let language = "javaScript";
language = language.split(""); // changing the string to an array
let randLanguage = Math.floor(language.length * Math.random()); // multiplying by the length of the array
console.log(language[randLanguage]); // displaying the letteers in the array at random
let sentence1 =
  "You cannot end a sentence with because because because is a conjunction";
let sentence2 = "is a conjunction";
sentence1 = sentence1.substr(0, 31);
sentence1 = sentence1.concat(sentence2);
console.log(sentence1);

//coders den week2 exercise part3//
let lovePattern = /love/gi; //using a regex pattern to identify the string "love"
let loveQuote =
  "love is the best thing in this world. Some found their love and some are still looking for their love.";
let numOfLove = loveQuote.match(lovePattern); // using match to get all the occurence of the  string "love" in the quote
console.log(numOfLove);
console.log(numOfLove.length); // displaying the how many times the string "love appeared in the quoute"

let conjuctionSentence =
  "You cannot end a sentence with because because because is a conjunction";
let becausePaattern = /because/gi; //using a regex pattern to identify the string "because"
let numOfBecause = conjuctionSentence.match(becausePaattern); // using match to get all the occurence of the  string "becuase"
console.log(numOfBecause);
console.log(numOfBecause.length); // displaying the how many times the string "because" appeared in the quoute"
let patternM = /%/gi;
let patternA = /@/gi;
let patternH = /#/gi;
let patternD = /&/gi;
let patternS = /;/gi;

let sentence3 =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
//cleaning the sentence getting rid of unnecessary signs
sentence3 = sentence3.replace(patternM, "");
sentence3 = sentence3.replace(patternH, "");
sentence3 = sentence3.replace(patternD, "");
sentence3 = sentence3.replace(patternA, "");
sentence3 = sentence3.replace(patternS, "");
sentence3 = sentence3.replace("$", "");
sentence3 = sentence3.replace("$", "");
sentence3 = sentence3.replace("$", "");
sentence3 = sentence3.replace("$", "");

// searching for the most frequent word in the sentencece
let teachingPattern = /teaching/gi;
let teacherPattern = /teacher/gi;
let lPattern = /love/gi;

console.log(sentence3.match(teacherPattern));
console.log(sentence3.match(lPattern));
console.log(sentence3.match(teachingPattern)); //teaching is the most frequent woord it appeared 3 times

//trying to extract the incomes from the strings
let annualIncome =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

console.log(annualIncome.indexOf(5000));
console.log(annualIncome.indexOf(10000));
console.log(annualIncome.indexOf(15000));
let salaryPerMonth = annualIncome.slice(9, 13); // extracting Monthlysalary
let salaryPerYear = annualIncome.slice(42, 47); // extracting yearlysalary
let onlineSalaryPerYear = annualIncome.slice(67, 72); // extracting online yearlysalary

console.log(
  parseInt(salaryPerMonth * 12) +
    parseInt(salaryPerYear) +
    parseInt(onlineSalaryPerYear * 12)
); //calculating total annual salary;
