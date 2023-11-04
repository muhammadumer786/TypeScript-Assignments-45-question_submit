// question 37 - done here
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

//set default values.
function make_Shirt(size: string = "Large" , message: string = "I love TypeScript"): void {
    console.log(`Size selected : ${size}.`);
    console.log(`Shirt printed message: "${message}".`);
}

make_Shirt();

make_Shirt("Medium");

make_Shirt("Small", "have a Good Day!");

make_Shirt("Extra Large", "Pratice makes perfect.");
