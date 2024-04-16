const readlineSync = require("readline-sync")

let input = readlineSync.question("Shall I loop? Y/N: ")

while ("2" == 2){
    console.log("We have looped")
    input = readlineSync.question("Shall I continue the loop? Y/N: ")
}

console.log("We have finished the loop")