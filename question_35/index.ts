// question 35 - done here.
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

// part 1
let animalNames:string[] = ["rabbit", "cat","dog"];

for (let i=0; i < animalNames.length; i++){
    console.log(`${i+1}- ${animalNames[i]}`)
}


// part 2

for (let i = 0; i < animalNames.length; i++) {
    }
    console.log("\n");
    console.log(`${animalNames[0]} run fast.`);
    console.log(`${animalNames[1]} is good pet.`);
    console.log(`${animalNames[2]} is loyal animal.`);

// // part 3
console.log("\n these animals are good pet in homes");
