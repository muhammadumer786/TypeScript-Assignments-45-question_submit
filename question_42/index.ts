// question 42 - done here
// Great Magicians: Start with a copy of your program from Exercise . Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.




let magicians: string[] = ["sara", "ali", "khan", "arsalan"];

function show_Magicians(names: string[]): void {
    for (const magicianNames of names) {
        console.log(magicianNames);
    }
}

function make_Great(names: string[]): string[] {
    let modifiedMagiciansNames: string[] = [];
    for (let addName of names) {
        modifiedMagiciansNames.push(addName + " the Great");
    }
    return modifiedMagiciansNames;
}

const great_Magicians = make_Great(magicians);

show_Magicians(great_Magicians);
