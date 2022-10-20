// a function that takes in users age and determine if he or she is old enough
function determineAge(age) {
  let message;
  if (age >= 18) {
    message = "you are old enough to drive";
  } else {
    message = `you are left with ${18 - age} years to drive`;
  }
  return message;
}
// console.log(determineAge(prompt("enter age")));

// a function that takes two inputs myAge and yourAge  and then determine who is older
function whoIsOlder(myAge, yourAge) {
  let message;
  if (myAge > yourAge) {
    message = `i am ${myAge - yourAge} years older than you`;
  } else {
    message = `you are ${yourAge - myAge} years older than me`;
  }
  return message;
}
// console.log(whoIsOlder(25, prompt("enter your age")));

// a function that takes two inputs and check which is bigger using if else condition
function greaterThanLessThan(a, b) {
  let message;
  if (a > b) {
    message = `${a} is greater than ${b}`;
  } else {
    message = `${a} is less than ${b}`;
  }
  return message;
}
console.log(greaterThanLessThan(16, 13));

// a function that takes two inputs and check which is bigger using tenary condition
function tenaryGreaterThanLessThan(a, b) {
  let message;
  a > b
    ? (message = `${a} is greater than ${b}`)
    : (message = `${a} is less than ${b}`);
  return message;
}
console.log(tenaryGreaterThanLessThan(16, 13));

// a function that takes a number and determine if its even or odd.
function evenNum(num) {
  let message;
  if (num % 2 == 0) {
    message = `${num} is an even number`;
  } else {
    message = `${num} is an odd number`;
  }
  return message;
}
console.log(evenNum(4));

////////////////////////Exercise level 2///////////////////////////////////////
/// a function that takes a score and then displays your grade based on the score  entered
function gradingSystem(score) {
  let grade;
  if (score >= 80 && score <= 100) {
    grade = "A";
  } else if (score >= 70 && score <= 79) {
    grade = "B";
  } else if (score >= 60 && score <= 69) {
    grade = "C";
  } else if (score >= 50 && score <= 59) {
    grade = "D";
  } else if (score >= 0 && score <= 49) {
    grade = "F";
  } else {
    grade = "INVALID INPUT";
  }
  return grade;
}

console.log(gradingSystem(90));

//  a function thats takes in any month and then displays the season based on the month entered
function seasonCheck(month) {
  month = month.toLowerCase();
  let season;
  if (month == "september" || month == "october" || month == "november") {
    season = "Autumn";
  } else if (month == "febuary" || month == "december" || month == "january") {
    season = "Winter";
  } else if (month == "march" || month == "april" || month == "may") {
    season = "Spring";
  } else if (month == "june" || month == "july" || month == "august") {
    season = "Summer";
  } else {
    season = "invalid month";
  }
  return season;
}
console.log(seasonCheck("may"));
/// weekends or workking days checker  checks wether the entered day is a weekeend or  a working day
function weekendOrWorkingDay(day) {
  day = day.toLowerCase();
  let wwd;
  if (
    day == "monday" ||
    day == "tuesday" ||
    day == "wednesday" ||
    day == "thursday" ||
    day == "friday"
  ) {
    wwd = "Working Day";
  } else if (day == "saturday" || day == "sunday") {
    wwd = "Weekends";
  } else {
    wwd = "invalid";
  }
  return wwd;
}
console.log(weekendOrWorkingDay("sunday"));

// takes a month and returns the number of days in it taking leap year into consideration
/// literally sang the song 30days has september april june and november allthe rest has 31 except february alone which has but twenty eight day clear 28 days clear which has but 28 days clear and 29 every leap year ///////
function numOfDaysInMonth(month) {
  month = month.toLowerCase();
  let numOfDays;
  switch (month) {
    case "september":
      numOfDays = `${month} has 30 days`;
      break;
    case "april":
      numOfDays = `${month} has 30 days`;
      break;
    case "june":
      numOfDays = `${month} has 30 days`;
      break;
    case "november":
      numOfDays = `${month} has 30 days`;
      break;

    case "january":
      numOfDays = `${month} has 31 days`;
      break;
    case "march":
      numOfDays = `${month} has 31 days`;
      break;
    case "may":
      numOfDays = `${month} has 31 days`;
      break;
    case "july":
      numOfDays = `${month} has 31 days`;
      break;
    case "august":
      numOfDays = `${month} has 31 days`;
      break;
    case "september":
      numOfDays = `${month} has 31 days`;
      break;
    case "october":
      numOfDays = `${month} has 31 days`;
      break;
    case "december":
      numOfDays = `${month} has 31 days`;
      break;
    case "february":
      numOfDays = `${month} has 28 days clear and 29 every leap year`;
      break;
    default:
      numOfDays = `invalid`;
      break;
  }
  return numOfDays;
}
console.log(numOfDaysInMonth("february"));

//////////////////////////////////////////THE END////////////////////////////////////////
