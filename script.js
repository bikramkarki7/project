// console.log("Project");
// function findAverage(arr) {
//   let total = sumArray(arr); 
//   return total / arr.length;
// }

// let numbers = [3, 1, 4, 1, 5, 9, 2, 6];
// console.log(findAverage(numbers));
// let a = 1;
// let b = a++;
// let c = ++a;

// console.log(a, b, c);
// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("C");
// });

// console.log("D");
//futsatshal rule 
// const futsalRules = {
//   playersPerTeam: 5,
//   matchDuration: {
//     halves: 2,
//     minutesPerHalf: 20
//   },
//   substitutions: "Unlimited (flying subs)",
//   ball: "Size 4",
//   fouls: {
//     maxBeforePenalty: 5,
//     penaltyAfter: "6th foul = 10m penalty"
//   },
//   goalkeeperRules: {
//     ballHoldSeconds: 4,
//     backPassAllowed: false
//   }
// };

// // Example usage
// console.log(`Players per team: ${futsalRules.playersPerTeam}`);
// console.log(`Match time: ${futsalRules.matchDuration.minutesPerHalf} minutes per half`);
// const wait = ms => new Promise(r => setTimeout(r, ms));

// wait(1000).then(() => console.log("Done"));

// let number = Math.floor(Math.random() * 5) + 1;
// let guess = prompt("Guess a number between 1 and 5");

// if (guess == number) {
//   alert(" You win!");
// } else {
//   alert(" You lose! The number was " + number);
// }
// import { add, multiply } from 'mathjs';

// console.log(add(5, 7));        // 12
// console.log(multiply(4, 6));   // 24
// Simple to-do list logic

// const todos = [];

// function addTodo(text) {
//   todos.push(text);
//   showTodos();
// }

// function removeTodo(index) {
//   todos.splice(index, 1);
//   showTodos();
// }

// function showTodos() {
//   console.clear();
//   todos.forEach((todo, i) => {
//     console.log(`${i + 1}. ${todo}`);
//   });
// }

// // Example usage
// addTodo("Learn JavaScript");
// addTodo("Practice coding");
// removeTodo(0);

// function getNumber() {
//   return new Promise((resolve, reject) => {
//     const success = true;

//     if (success) {
//       resolve(42);
//     } else {
//       reject("Something went wrong");
//     }
//   });
// }

// async function showNumber() {
//   try {
//     const num = await getNumber();
//     console.log("Number:", num);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// showNumber();


// Maghe Sankranti Greeting Script

// function magheSankrantiWish(name) {
//   const message = ` Happy Maghe Sankranti, ${name}! 
// May this festival bring health, happiness, and prosperity to your life.`;
  
//   alert(message);
// }
// magheSankrantiWish("Friend");

// console.log(" Happy Maghe Sankranti!  May your life be filled with warmth and happiness.");
// College information
// const collegeName = "Ncit";
// const location = "Kathmandu";
// const totalStudents = 2000;

// function showCollegeDetails() {
//   console.log("College Name:", collegeName);
//   console.log("Location:", location);
//   console.log("Total Students:", totalStudents);
// }

// showCollegeDetails();
// app.js
// function greet(name) {
//   return `Hello, ${name}!`;
// }

// console.log(greet("World"));

//dsap
// Factorial
const factorial = n => (n <= 1 ? 1 : n * factorial(n - 1));

// Fibonacci (nth term)
// const fibonacci = n => (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2));

// // GCD (Euclidean Algorithm)
// const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

// console.log(factorial(5));   // 120
// console.log(fibonacci(7));   // 13
// console.log(gcd(48, 18));    // 6

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("World"));











