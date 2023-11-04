"use strict";
// question 44 - done here
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function orderSandwich(...items) {
    if (items.length === 0) {
        console.log("Please provide items for your sandwich.");
    }
    else {
        console.log("You ordered a sandwich with:");
        items.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
    console.log("\n--------------");
}
orderSandwich("chicken", "egg", "lettuce");
orderSandwich("egg", "mustardches");
orderSandwich("cucumber", "chicken", "onion", "egg");
