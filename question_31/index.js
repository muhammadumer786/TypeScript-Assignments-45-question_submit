// question 31 - done here
//  No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// part 1
// If the list is empty, print the message We need to find some users
var userNames = ["ali", "sara", "khan", "admin", "mick"];
if (userNames.length > 0) {
    for (var i = 0; i < userNames.length; i++) {
        var user = userNames[i];
        if (user === "admin") {
            console.log("Hello ".concat(user, ", would you like to see a status report."));
        }
        else {
            console.log("Hello ".concat(user, ", thank you for logging in again."));
        }
    }
}
else {
    console.log("We need to find some users!");
}
// part 2
// Remove all of the usernames from your array, and make sure the correct message is printed.
var userNames2 = [];
if (userNames2.length === 0) {
    console.log("\n\nThe list of users is empty now.");
}
