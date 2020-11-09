// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Psuedo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// var temp1 = 35
// var temp2 = 350
// var temp3 = 212

// const boiling = (boilPoint) => {
//     if(boilPoint < 212){
//       return `${boilPoint} is below boiling point`
//     } else if(boilPoint > 212) {
//       return `${boilPoint} is above boiling point`
//     } else if(boilPoint === 212) {
//         return `${boilPoint} is at boiling point`
//     } else {
//     return "something went wrong"
// }
// }

// console.log(boiling(temp1));
// console.log(boiling(temp2));
// console.log(boiling(temp3))


// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

// var myNumbers1 = [3, 7, 0, 6, -9]

//     for (let i=0; i<myNumbers1.length; i++) {
//         console.log(myNumbers1[i] * 5)
//     }
// I think I am missing a couple things here. I was able to write this funcion down by looking at our notes in the syllabus. 

// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

// var myNumbers2 = [8, -7, 0, 6, 2]

// const multiplier = myNumbers2.map(value => {
//     return value * 5
// })

// console.log(multiplier)

//Same here. I think I am missing something again. 



// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

// var stringWithVowels1 = "HeyThereLearnStudent"
// var stringWithVowels2 = "ILoveJavaScript"
// let vowels [a, e, i, o, u]

// const vowelRemover = (string) => {
//       string = string.split ("")

// }

//I am so lost! I did try asking my classmates without asking for an answer, but I don't think that help a lot.




// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string"

// var notAString1 = true
// var notAString2 = 42

// var stringWithVowels1 = "HeyThereLearnStudent"
// var stringWithVowels2 = "ILoveJavaScript"
// let vowels [a, e, i, o, u]

//      const vowelRemover = (string) =>


// More lost than before



// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

// var toonAnimals = [ { name: "Itchy", animal: "mouse" }, 
//          { name: "Stimpy", animal: "cat" }, 
//          { name: "Daffy", animal: "duck" }, 
//          { name: "Scratchy", animal: "cat" }, 
//          { name: "Ren", animal: "dog" }, 
//          { name: "Felix", animal: "cat" }]

// var catsOnly = []

// const findToonCats = (array) => {
//     catsOnly= array.filter(value => {
//         return value.animal == "cat"
//     })
//     return catsOnly
// }

// console.log(findToonCats(toonAnimals));


// Even though I had a lot of help for this exercise, I thought it was easier than #4 and #5. 
// Am I missing something?

// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

// var toonAnimals = [ { name: "Itchy", animal: "mouse" }, 
//          { name: "Stimpy", animal: "cat" }, 
//          { name: "Daffy", animal: "duck" }, 
//          { name: "Scratchy", animal: "cat" }, 
//          { name: "Ren", animal: "dog" }, 
//          { name: "Felix", animal: "cat" }]

// var catsOnly = []

// const findToonCats = (array) => {
//     catsOnly= array.filter(value => {
//         return value.animal != "cat"
//      })

// }

// console.log(findToonCats(toonAnimals))

// What am I missing?