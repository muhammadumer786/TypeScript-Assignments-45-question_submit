// //question 41 - done here.
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


let magicians: string[] = ["sara", "ali", "khan", "arsalan"];

function showMagicians(names: string[]): void {
    for (let magiciansNames of names) {
        console.log(magiciansNames);
    }
}

showMagicians(magicians);
