const readlineSync = require("readline-sync")

let firstYear = 10.5 // representing the first and second year
let after = 4

let userInput = readlineSync.question("What is your dog's age?: ")
let dogAge = parseInt(userInput);

if(dogAge <= 0){ // if 0 or less (negative)
    console.log("Dog age is 0")
}else if (dogAge <= 2){ // if between 1 and 2
    console.log(`1Dog age is ${dogAge * firstYear}`)
}else{    
    // firstYear * 2 represents the first 2 dog years 
    // before calculating the remaining years
    console.log(`Dog age is ${(firstYear * 2) + ((dogAge - 2) * after)}`)
}
