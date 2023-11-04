// question 32 - done here.
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var currentUsersNames = ["ali", "sara", "khan", "ahmad", "mick"];
var newUsersNames = ["arsalan", "ahmad", "sana", "jackie", "sara"];
for (var i = 0; i < newUsersNames.length; i++) {
    var newUser = newUsersNames[i].toLowerCase();
    if (currentUsersNames.map(function (items) { return items.toLowerCase(); }).includes(newUser)) {
        console.log("Username '".concat(newUsersNames[i], "' is not available. Please choose a different one."));
    }
    else {
        console.log("Username '".concat(newUsersNames[i], "' is available."));
    }
}
