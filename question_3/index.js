// question 3 - done here
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var firstName = "mark zuckerberg khan";
// for lower case
console.log(firstName.toLowerCase());
// for uppercase
console.log(firstName.toUpperCase());
// for title case
console.log(firstName.charAt(0).toUpperCase() + firstName.slice(1, 5) + firstName.charAt(5).toUpperCase() + firstName.slice(6, 15));
