
// reduce 예시
const array = ["ㅁㄴㅇ", [2, 3], 4, [5, 6]];
const result = array.reduce((previousValue, currValue) => {
  // return previousValue.concat(currValue);
  return Array.isArray(currValue)
    ? [...previousValue, ...currValue]
    : [...previousValue, currValue];
}, []);

console.log(result);