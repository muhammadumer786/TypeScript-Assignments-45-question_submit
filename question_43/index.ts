// question 43 - done here.
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.




let magicians: string[] = ["sara", "ali", "khan", "arsalan"];

function show_Magicians(names: string[]): void {
    for (let magicianName of names) {
        console.log(magicianName);
    }
}

function make_Great(names: string[]): string[] {
    let modified_Magicians: string[] = [];
    for (let magicianName of names) {
        modified_Magicians.push(magicianName + " the Great");
    }
    return modified_Magicians;
}

let originalMagicians: string[] = [...magicians];

// Call the makeGreat function with the copied array to modify it
const greatMagicians: string[] = makeGreat([...magicians]);

// Call showMagicians with the original and modified arrays to compare
console.log("Original Magicians:");
showMagicians(originalMagicians);

console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
