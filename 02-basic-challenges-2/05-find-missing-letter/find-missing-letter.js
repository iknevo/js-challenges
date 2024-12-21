function findMissingLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (!str || str.length === 0) {
    return "";
  }
  const startIndex = alphabet.indexOf(str[0]);
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== alphabet[startIndex + i]) return alphabet[startIndex + i];
  }
}

module.exports = findMissingLetter;
