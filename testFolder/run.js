import arrayFunctions from "./components.js";

const numArr = [1, 2, 3, 4, 5];

// const newMap = arrayFunctions.map(numArr, (item) => {
//   // if (item === 1) {
//   //   return item + 1;
//   // }
// });
const newMap = numArr.map((item) => {
  if (item === 1) {
    return item + 1;
  }
});

console.log(newMap);

// const filter = arrayFunctions.filter(numArr, (word)=>word !== 2 )

// console.log(filter)

// const reduce = numArr.reduce((acc, cur, idx, arr) => {
//   console.log(idx + "번째 인덱스 순환")
//   console.log("acc", acc);
//   console.log("cur", cur);
//   console.log("idx", idx);
//   console.log("arr", arr);
//   return acc + cur;
// },10);

// const reduce = arrayFunctions.reduce(
//   numArr,
//   (acc, cur, idx, arr) => {
//     console.log(idx + "번째 인덱스 순환");
//     console.log("acc", acc);
//     console.log("cur", cur);
//     console.log("idx", idx);
//     console.log("arr", arr);
//     return acc + cur;
//   },
//   10
// );

// console.log(reduce);
// const result = numArr.slice(1)
// console.log(result)
