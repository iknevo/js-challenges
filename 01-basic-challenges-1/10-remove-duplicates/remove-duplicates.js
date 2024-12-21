function removeDuplicates(arr) {
  // const unique = [];
  // arr.forEach((el) => {
  //   if (!unique.includes(el)) unique.push(el);
  // });
  // return unique;
  return [...new Set(arr)];
}

module.exports = removeDuplicates;
