// question 15 - done here.
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var guestsInvited = ["aliya", "ali", "sara", "maria"];
console.log("\nthese are guests that already invited.");
console.log("".concat(guestsInvited, "\n"));
guestsInvited.map(function (items) { return console.log("".concat(items, ", i would like to invite you for a dinner tonight.")); });
var notAttend = "sara";
console.log("\n");
console.log("".concat(notAttend, " replied, not possible to come tonight."));
console.log("\nok sara! no problem, let invited to new guest name imran");
var newGuest = "imran";
guestsInvited[guestsInvited.indexOf(notAttend)] = newGuest; // replacing guest
console.log("\n");
guestsInvited.map(function (items) { return console.log("".concat(items, ", i would like to invite you for a dinner tonight.")); });
