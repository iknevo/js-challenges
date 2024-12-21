function areAllCharactersUnique(str) {
  const uniqueChars = new Set();
  for (let i = 0; i < str.length; i++) {
    if (uniqueChars.has(str[i])) {
      return false;
    }
    uniqueChars.add(str[i]);
  }
  return true;
}
module.exports = areAllCharactersUnique;
