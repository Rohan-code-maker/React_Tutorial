const arr = [1, 0, 3];

const n = arr.length;

const expectedSum = (n * (n + 1)) / 2

let actualSum = 0;
for (let index = 0; index < arr.length; index++) {
    actualSum += arr[index];
}

const final = expectedSum - actualSum
console.log(final);
