const isValidIPv4 = (string) => {
  const splits = string.split(".");
  if (splits.length !== 4) return false;

  return splits.every((item) => {
    const num = parseInt(item);
    return num > 0 && num < 255 && item === num.toString();
  });
};

module.exports = isValidIPv4;
