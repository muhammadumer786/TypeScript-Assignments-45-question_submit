//  question 20 - done here.
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var fruits = ["Apple", "Banana", "Orange", "Grapes", "Strawberry", "Pineapple", "Mango", "Cherry"];
// first way.
// console.log(fruits)
// second way.
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);
// console.log(fruits[5]);
// console.log(fruits[6]);
// console.log(fruits[7]);
// third way
fruits.map(function (items) { return console.log("".concat(items)); });
