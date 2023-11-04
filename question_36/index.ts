// // question 36 - done here.
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


function make_Shirt(size: string, message: string): void {
    console.log(`the size of shirt is : ${size}`);
    console.log(`message printed on shirt is : ${message}`);
}

make_Shirt("small","have a good day");

make_Shirt("medium","coding is good");

make_Shirt("large","just practice");

make_Shirt("extra large","books are good to read daily.");