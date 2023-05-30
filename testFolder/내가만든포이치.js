// const numArr = ["a", "b", "c", "d", "e", "f"];

// numArr.__proto__.내가만든포이치 = function (cb) {
//   for (let index = 0; index <= this.length - 1; index++) {
//     cb(this[index], index, this);
//   }
// };

// function handler(item, i, arr) {
//   console.log(item);
//   console.log(i);
//   console.log(arr);
// }

// numArr.내가만든포이치(handler);

// numArr.forEach
const newArr = new Array(1, 2, 3, 4, 5, 6);

Array.prototype.내가만든포이치 = function (cb) {
  for (let index = 0; index <= this.length - 1; index++) {
    cb(this[index], index, this);
  }
};

newArr.__proto__.내가만든포이치 = function (cb) {
  for (let index = 0; index <= this.length - 1; index++) {
    cb(this[index], index, this);
  }
};


newArr.내가만든포이치((item, i, arr) => {
  console.log(item);
  console.log(i);
  console.log(arr);
});

// const newArr1 = new Array(1,2,3,4,5);
// const newArr2 = [1,2,3,4,5];

// console.log(typeof newArr1);
// console.log(typeof newArr2);
