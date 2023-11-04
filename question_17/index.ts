// question 17 - done here.

// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


// from question 16 continuee..

let guestInvited:string[]=[ 'jackie', 'aliya', 'salman', 'ali', 'imran', 'alexa' ];
console.log(guestInvited);
// part 1 - (invite only two peoples for a dinner.)

console.log("\ni am inviting only two guests for a dinner\n");

// part 2 - (remove guests one by one using pop() until 2 remains)

// console.log(`${guestInvited[2]}, you’re sorry you can’t invite them to dinner.`);
// console.log(`${guestInvited[3]}, you’re sorry you can’t invite them to dinner.`);
// console.log(`${guestInvited[4]}, you’re sorry you can’t invite them to dinner.`);
// console.log(`${guestInvited[5]}, you’re sorry you can’t invite them to dinner.`);
// guestInvited.pop();
// guestInvited.pop();
// guestInvited.pop();
// guestInvited.pop();

while (guestInvited.length>2){
    let removeGuests = guestInvited.pop();
    console.log(`Dear ${removeGuests}, you are not invited to dinner.`);

}
// part 3 - (still invited message to 2 guests that are remaining.)
guestInvited.map((items)=> console.log(`\n${items}, you are still invited for a dinner.`));

// part 4 - (remove remaining 2 guests)

guestInvited.pop();
guestInvited.pop();


console.log(guestInvited);