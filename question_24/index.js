// question 24 - done here
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
var a = "car";
var b = "bike";
var c = "blue";
var d = "red";
// part 1
// Tests for equality and inequality with strings
console.log("\n");
console.log(a === b); //false
console.log(a !== b); // true
console.log(c === d); //false.
console.log(c !== d); //true.
// part 2
// Tests using the lower case function
console.log("\n");
var nameOne = "Ali";
var nameTwo = "ali";
console.log(nameOne.toLowerCase() === nameTwo.toLowerCase());
console.log(nameOne.toLowerCase() !== nameTwo.toLowerCase());
// part 3
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\n");
var num1 = 5;
var num2 = 20;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
// part 4
// Tests using "and" and "or" operators
console.log("\n");
var usbOne = true;
var usbTwo = false;
console.log(usbOne && usbTwo);
console.log(usbTwo && usbOne);
console.log(usbOne && usbOne);
console.log(usbTwo && usbTwo);
console.log(usbOne || usbTwo);
console.log(usbTwo || usbOne);
console.log(usbOne || usbOne);
console.log(usbTwo || usbTwo);
// part 5
// Test whether an item is in a array
console.log("\n");
var fruitsArray = ["banana", "mango", "oranges"];
var fruitFind = "oranges";
if (fruitsArray.indexOf(fruitFind)) {
    console.log("".concat(fruitFind, " is in array."));
}
else {
    console.log("not in array.");
}
// part 6
// Test whether an item is not in a array
console.log("\n");
var fruitfind2Array = ["banana", "mango", "oranges"];
console.log(fruitfind2Array);
var fruitFind2 = "apple";
if (fruitFind2 == "banana" || fruitFind2 == "mango" || fruitFind2 == "oranges") {
    console.log("".concat(fruitFind2, " is in array."));
}
else {
    console.log("".concat(fruitFind2, " is not in array."));
}
