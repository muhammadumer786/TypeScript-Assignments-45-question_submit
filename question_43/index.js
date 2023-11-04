// question 43 - done here.
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ["sara", "ali", "khan", "arsalan"];
function show_Magicians(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var magicianName = names_1[_i];
        console.log(magicianName);
    }
}
function make_Great(names) {
    var modified_Magicians = [];
    for (var _i = 0, names_2 = names; _i < names_2.length; _i++) {
        var magicianName = names_2[_i];
        modified_Magicians.push(magicianName + " the Great");
    }
    return modified_Magicians;
}
var originalMagicians = __spreadArray([], magicians, true);
// Call the makeGreat function with the copied array to modify it
var greatMagicians = makeGreat(__spreadArray([], magicians, true));
// Call showMagicians with the original and modified arrays to compare
console.log("Original Magicians:");
showMagicians(originalMagicians);
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
