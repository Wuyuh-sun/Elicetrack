const newArr = new Array(1, 2, 3, 4, 5, 6);

Array.prototype.내가만든맵 = function (cb) {
  for (let index = 0; index <= this.length - 1; index++) {
    this[index] = cb(this[index], index, this);
  }
  return this
};

// newArr.__proto__.내가만든맵 = function (cb) {
//   for (let index = 0; index <= this.length - 1; index++) {
//     this[index] = cb(this[index], index, this);
//   }
//   return this
// };


newArr.내가만든맵((item, i, arr) => {
  // console.log(item);
  // console.log(i);
  // console.log(arr);
  return item + 1
});

console.log(newArr)
