
// Array Questions
console.log(`Array Exercises`)

//Arrays Exercise 1:
const breakfast = ["egg", "bacon", "sasauge", "toast", "mushroom"];
breakfast.push("hash brown");
breakfast.unshift("tomato");
console.log(`Question 1.1: The array for my breakfast is ----> ${breakfast}`);
console.log(`Question 1.2: The length of my breakfast array is ----> ${breakfast.length}`);
console.log(`Question 1.3: Is breakfast an array? ----> ${Array.isArray(breakfast)}`)

////Arrays Exercise 2 Version 1:
let hillbillies = ["cleetus", "rufus", "tobey", "bobert"];
let lastElement = hillbillies.slice(-1);
console.log(`Question 2.1: the last item in the array is ----> ${lastElement}`);

//Arrays Exercise 2 Version 2:
const transport = ["car", "train", "boat"];
function arrayLength(transport) {
  const len = transport.slice(- 1);
  return console.log(`Question 2.2: the last item in this array is ----> ${len}`);
}
arrayLength(transport);

//Arrays Exercise 3:
const musicGenres = ["Rock", "Rap"];
const mid = ((musicGenres.length)/2);
musicGenres.push("Jazz");
musicGenres.splice(mid, 0, "Classical");
musicGenres.unshift("Blues", "Reggage");
console.log(`Question 3: The array for my music is ----> ${musicGenres}`);

//Arrays Exercise 4:
//Using breakfast array as code from Exercise 1
function Alphabet(breakfast) {
  return `Question 4: the alphabetised array for the selected constant is ----> ${breakfast.sort()}`
}
console.log(Alphabet(breakfast))

//Loop Exercises
console.log(`Loop Exercises`)
//Loops Exercise 1:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

//This loop counted from 1-10
for (let idx = 1; idx < numbers.length; idx++) {
  console.log(`Question 1.${idx}: Numbers 1-10 ----> ${idx}`);
}
for (let idx = 10; idx > 0; idx--) {
  console.log(`Question 1.11-1.20: Numbers 10-1 ----> ${idx}`);
}

//Loops Exercise 2:
const tasks = ["dishes", "hoover", "dust"]
for (let idx = 0; idx < tasks.length; idx++) {
  console.log(`Question 2.${idx+1}: ----> Task ${idx+1}: ${tasks[idx]}`);
}

//Loop Exercise 3:
let numeros = [1, 2, 3, 4];

 for (let idx = 3; idx > 0; idx--){
    console.log(`Question 3: Numbers 4-1 ----> ${idx}`);
 }
//2 is the last to be altered.

//Loop Exercise 4:
let nums = [1, 2, 3, 4, 5];
let newNums =[];
for (let i = 0; i < nums.length; i++) {
  newNums.push(nums[i] + nums[i]);
}
console.log(`Question 4: ----> ${newNums}`);

//Loop Exercise 5:
//For loop
for (let x = 0; x < 3; x++ ){
  console.log(`Question 5: For loop ----> number${x}!`);
}
//While loop
let text = "";
let x = 0;
while (x < 3) {
  x++;
  console.log(`Question 5: While loop ----> number${x-1}!`);
}

//Loop Exercise 6:
const sumArray = [1, 2, 3, 4, 5];
const average = sumArray.reduce((a,b) => a + b, 0) / sumArray.length;
console.log(`Question 6: ----> ` + average);