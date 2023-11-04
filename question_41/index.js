// //question 41 - done here.
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicians = ["sara", "ali", "khan", "arsalan"];
function showMagicians(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var magiciansNames = names_1[_i];
        console.log(magiciansNames);
    }
}
showMagicians(magicians);
