// // question 28 - done here.
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
var personStage = 25;
if (personStage < 2) {
    console.log("person is a baby.");
}
else if (personStage >= 2 && personStage < 4) {
    console.log("person is a toddler.");
}
else if (personStage >= 4 && personStage < 13) {
    console.log("person is a kid.");
}
else if (personStage >= 13 && personStage < 20) {
    console.log("person is a teenager.");
}
else if (personStage >= 20 && personStage < 65) {
    console.log("person is an adult.");
}
else if (personStage >= 65) {
    console.log("person is an elder.");
}
