//challenge at: https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true

const alice = [17, 28, 30];
const bob = [99, 16, 8];

let a = 0;
let b = 0;

function winner(alice, bob) {
    calculatePoints(alice[0], bob[0]);
    calculatePoints(alice[1], bob[1]);
    calculatePoints(alice[2], bob[2]);

    return console.log(a, b);
}

function calculatePoints(valueA, valueB) {
    if (valueA < valueB) {
        b = b + 1;
    } else if (valueA > valueB) {
        a = a + 1;
    } else if (valueA == valueB) {
        console.log(`iguais`);
    }
    return;
}

winner(alice, bob);