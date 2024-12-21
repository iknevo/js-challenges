function findMaxNumber(arr) {
  let maxNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    maxNumber = arr[i] > maxNumber ? arr[i] : maxNumber;
  }
  return maxNumber;
}

module.exports = findMaxNumber;
