// question 13 - done here
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favouriteMode=["honda civic","iphone 14 pro","online business","house"];

// first method
console.log(`I would like to own ${favouriteMode[0]}.`);
console.log(`I would like to own ${favouriteMode[1]}.`);
console.log(`I would like to own ${favouriteMode[2]}.`);
console.log(`I would like to own ${favouriteMode[3]}.`);
 
//second method
favouriteMode.map((items)=> console.log(`I would like to own ${items}.`));
