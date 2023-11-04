// question 42 - done here
// Great Magicians: Start with a copy of your program from Exercise . Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicians = ["sara", "ali", "khan", "arsalan"];
function show_Magicians(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var magicianNames = names_1[_i];
        console.log(magicianNames);
    }
}
function make_Great(names) {
    var modifiedMagiciansNames = [];
    for (var _i = 0, names_2 = names; _i < names_2.length; _i++) {
        var addName = names_2[_i];
        modifiedMagiciansNames.push(addName + " the Great");
    }
    return modifiedMagiciansNames;
}
var great_Magicians = make_Great(magicians);
show_Magicians(great_Magicians);
