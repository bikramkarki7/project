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

let number = Math.floor(Math.random() * 5) + 1;
let guess = prompt("Guess a number between 1 and 5");

if (guess == number) {
  alert(" You win!");
} else {
  alert(" You lose! The number was " + number);
}





