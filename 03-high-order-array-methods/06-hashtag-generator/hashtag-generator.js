function generateHashtag(str) {
  const hashtag = str.split(" ").reduce((tag, word) => {
    return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, "#");
  return hashtag.length > 140 || str === "" ? false : hashtag;
}

module.exports = generateHashtag;
