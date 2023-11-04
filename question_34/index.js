// question 34 - done here.
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// part 1
var favouritePizza = ["fagita", "chicken tikka", "malai boti", "bbq"];
var pizza;
for (pizza = 0; pizza < favouritePizza.length; pizza++) {
    console.log(favouritePizza[pizza]);
}
// part 2
for (pizza = 0; pizza < favouritePizza.length; pizza++) {
    var pizzaLike = favouritePizza[pizza];
    console.log(" i like ".concat(pizzaLike, " pizza."));
}
// part 3
console.log("\ni like ".concat(favouritePizza[0], " pizza"));
console.log("i like ".concat(favouritePizza[1], " pizza"));
console.log("i like ".concat(favouritePizza[2], " pizza"));
console.log("i like ".concat(favouritePizza[3], " pizza"));
console.log("i really love pizza!");
