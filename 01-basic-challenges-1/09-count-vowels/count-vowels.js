function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  str
    .toLowerCase()
    .split("")
    .forEach((c) => {
      vowels.indexOf(c) !== -1 ? count++ : count;
    });
  return count;
}

module.exports = countVowels;
