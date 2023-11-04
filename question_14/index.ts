// question 14 - done here
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


let guestsInvited=["khan","ali","sara","maria"];

console.log(`${guestsInvited}\n`);
// first way
console.log(`${guestsInvited[0]},"i would like to invite you for a dinner tonight."`);
console.log(`${guestsInvited[1]},"i would like to invite you for a dinner tonight."`);
console.log(`${guestsInvited[2]},"i would like to invite you for a dinner tonight."`);
console.log(`${guestsInvited[3]},"i would like to invite you for a dinner tonight."`);

// second way
guestsInvited.map((items) => console.log(`${items}, i would like to invite you for a dinner tonight.`));