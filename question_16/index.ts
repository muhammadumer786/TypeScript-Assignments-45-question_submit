// question 16 - done here.
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.



// (continue.. from question 15.)
let guestsInvited:string[]=["aliya","ali","sara"];
let notAttend:string = "sara";
let newGuest:string = "imran";
guestsInvited[guestsInvited.indexOf(notAttend)]=newGuest; // replacing guest
console.log(guestsInvited + "\n");

// part one - (to inform bigger dinner table.)
guestsInvited.map((items) => console.log(`${items}, i found bigger dinner table, so i like invited three more new guests at dinner`));

// part two.- (to invite first guest here in first index of an array.)
guestsInvited.unshift("jackie");
console.log(guestsInvited);


// part three - (to invite second guest here in middle index of an array.)
let mid_NewGuest:string = "salman";
let mid_Index=guestsInvited.length /2;

guestsInvited.splice(mid_Index,0,mid_NewGuest);
console.log(guestsInvited);

// part four - (to invite third guest here in last index of an array.)
guestsInvited.push("alexa");
console.log(guestsInvited);

// part five - (print all guests invited at dinner.)
guestsInvited.map((items)=> console.log(`${items}, i am inviting you to dinner.`));










