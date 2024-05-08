console.log("Завдання на змінні");

console.log("// #1");
const a = 12;
const b = 12;
console.log("The result of multiplication (a * b): " + a * b);

console.log("// #2");
const c = 63;
const d = 7;
console.log("Result of division (c / d): " + c / d);

console.log("// #3");
const e = 166;
const f = 456;
console.log("Result add (e + f): " + +(e + f));

console.log("// #4");
const someNumber = 11;
const someMeaningOfTheTruth = true;
const someText = "java script";
const someNumberInTextFormat = "100";
let someUndefined;
const someNullMeaning = null;
const someBigNumber = 12345678901234567890123456789n;
const someSymbol = Symbol("id");

console.log("Some number: " + someNumber + " - " + typeof someNumber);
console.log(
  "Some meaning of the truth: " +
    someMeaningOfTheTruth +
    " - " +
    typeof someMeaningOfTheTruth
);
console.log("Some text: " + someText + " - " + typeof someText);
console.log(
  "Some number in text format: " +
    someNumberInTextFormat +
    " - " +
    typeof someNumberInTextFormat
);
console.log("Some undefined: " + someUndefined + " - " + typeof someUndefined);
console.log(
  "Some null meaning: " + someNullMeaning + " - " + typeof someNullMeaning
);
console.log("Some big number: " + someBigNumber + " - " + typeof someBigNumber);
console.log("Type of some symbol: " + typeof someSymbol);

console.log("// #5");
let num = 1;
console.log("Meaning of num: " + num);

num += 11;
console.log("Meaning of num (+=): " + num);

num -= 11;
console.log("Meaning of num (-=): " + num);

num *= 11;
console.log("Meaning of num (*=): " + num);

num /= 11;
console.log("Meaning of num (/=): " + num);

++num; // Постфіксна форма
console.log("Meaning of num (++num): " + num);

let num1 = num++; // Префіксна форма
console.log("Meaning of num (num++): " + num1);

--num; // Постфіксна форма
console.log("Meaning of num (--num): " + num);

let num12 = num--; // Префіксна форма
console.log("Meaning of num (num--): " + num12);

console.log("Meaning of num: " + num);

// =============================================================================
console.log("\nЗавдання на введення/виведення");

console.log("// #1");
// const someNumberFromTheUser = Number(prompt("Input some number: ", "50"));
// const squareOfNumber = someNumberFromTheUser ** 2;
// console.log("Squared number from user: " + squareOfNumber);

console.log("// #2");
// const someNumberFromUser1 = +prompt("Input first number: ", "1");
// const someNumberFromUser2 = +prompt("Input second number: ", "10");
// const average = (someNumberFromUser1 + someNumberFromUser2) / 2;
// alert("Average value of numbers: " + average);
// console.log("Average value of numbers: " + average);

console.log("// #3");
const numberOfMinutesFromUser = prompt("Input the number of minutes: ", "50");
const numberOfSeconds = +numberOfMinutesFromUser * 60;
console.log("Number of seconds: " + numberOfSeconds);
