for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 10; i > 0; i --) {
    console.log(i);
}

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

while (i > 0) {
    console.log(i);
    i--;
}

i = 1
do {
    console.log(i);
    i++;
}
while (i <= 10);

do {
    console.log(i);
    i--;
}
while (i > 0);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let x of numbers) {
    console.log(x);
}