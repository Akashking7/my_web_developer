function findMissing(arr) {
  let n = arr.length + 1;

  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((a,b) => a + b, 0);

  return expectedSum - actualSum;
}

console.log(findMissing([1,2,4,5]));