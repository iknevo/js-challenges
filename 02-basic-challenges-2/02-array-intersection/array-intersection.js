function arrayIntersection(arr1, arr2) {
  const intersection = [];
  const set2 = new Set(arr2);
  // if (arr2.includes(el) && !intersection.includes(el)) intersection.push(el);
  // arr1.forEach((el) => {
  // });
  arr1.forEach((el) => {
    if (set2.has(el)) intersection.push(el);
  });

  return intersection;
}

module.exports = arrayIntersection;
