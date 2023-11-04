// question 37 - done here
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
//set default values.
function make_Shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Size selected : ".concat(size, "."));
    console.log("Shirt printed message: \"".concat(message, "\"."));
}
make_Shirt();
make_Shirt("Medium");
make_Shirt("Small", "have a Good Day!");
make_Shirt("Extra Large", "Pratice makes perfect.");
