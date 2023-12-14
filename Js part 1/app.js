// // Qs 1

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];

// let num = 2;

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] == num ) {
//         arr.splice(i, 1);
//     }
// }

// // Qs 2

// let number = 287152;

// let count = 0;

// let copy = number;

// while (copy > 0) {
//     count++;
//     copy = Math.floor(copy / 10);
// }
// console.log(count);

// // Qs 3


// let number = 287152;
// let sum = 0;
// let copy = number;

// while (copy > 0) {
//     sum += copy % 10;
//     copy = Math.floor(copy / 10);
// }
// console.log(sum);



// // Qs 4

// let num = prompt("Enter a number to calculate the factorial.");
// let factorial = 1;

// if (num == 0) {
//     console.log(`the factorial of ${num} is 1`);
// } else if (num < 0) {
//     console.log(`this number is a -ive number`);
// } else {
//     for (let i = 1; i <= num; i++) {
//         factorial = factorial * i;
//         console.log(`the factorial of ${num} is ${factorial}`);
//     }
// }

// // Qs 5

// const arr = [46, 78, 85, 107, 6, 9];

// let maxValue = Math.max(...arr);

// console.log(`the maximum value of the arr is ${maxValue}`);