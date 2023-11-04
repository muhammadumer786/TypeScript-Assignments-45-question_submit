// question 18 - done here.

// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// part 1
console.log("an array having different locations\n")
let countryArray:string[]=["dubai","california","london","japan","saudi arabia"];

// part 2
console.log("original array\n",countryArray); 

// part 3
console.log("alphabetical order\n",countryArray.sort());

// part 4
console.log("array original order\n",countryArray);

// part 5
console.log("reverse order array\n",countryArray.reverse());

// part 6
console.log("array is still in original order\n",countryArray);

// part 7, 8, 9, 10 -
let reversedArray:string[]=['california', 'dubai', 'japan', 'london', 'saudi arabia'];
console.log(reversedArray);
console.log(reversedArray.sort());
reversedArray.reverse();
console.log(reversedArray);