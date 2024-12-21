function findMissingNumber(arr) {
  if (!arr || arr.length === 0) {
    return undefined;
  }
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const arrSum = arr.reduce((sum, el) => sum + el, 0);
  return expectedSum - arrSum;
}

module.exports = findMissingNumber;
