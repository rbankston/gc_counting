// Use a for loop to log numbers from 1 to 10, then another for loop to count down, logging numbers from 10 to 1.

for (let i = 1; i < 11;  i++){
    console.log(i);
}

for (let i = 10; i > 0;  i--){
    console.log(i);
}

console.log("for loop");

// Repeat the exercise with a while loop.

let x = 1;
while (x < 11) {
    console.log(x);
    x++;
  }

let y = 10;
while (y > 0) {
    console.log(y);
    y--;
  }

  console.log("while loop");
// Repeat with a do while loop.

let z = 1;
do {
    console.log(z);
    z++;
  } while (z < 11);

let zz = 10;
do {
    console.log(zz);
    zz--;
} while (zz > 0);

console.log("do while loop");
// Create this array: const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use a for…of loop to loop through the array and log all the numbers. (Note: we’re not asking you to also count down on this one.)

for (const number of numbers) {
    console.log(number);
  }


console.log("for of loop");