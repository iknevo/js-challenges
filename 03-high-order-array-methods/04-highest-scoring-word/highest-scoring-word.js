// highestScoringWord("what time are we climbing up the volcano"); // 'volcano'

function highestScoringWord(string) {
  const words = string.split(" ");
  const scores = words.map((word) =>
    word.split("").reduce((sum, char) => sum + char.charCodeAt(0) - 96, 0)
  );
  const highestScore = Math.max(...scores);
  const highestIndex = scores.indexOf(highestScore);
  return words[highestIndex];
}

module.exports = highestScoringWord;
