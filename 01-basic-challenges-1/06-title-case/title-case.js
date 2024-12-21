function titleCase(str) {
  const words = str.toLowerCase().split(" ");
  const newWords = words
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  return newWords;
}

module.exports = titleCase;
