const newArr = new Array(1, 2, 3, 4, 5, 6);

Array.prototype.내가만든필터 = function (cb) {
  const result = [];
  for (let index = 0; index <= this.length - 1; index++) {
    if (cb(this[index])) {
      result.push(this[index]);
    }
  }
  return result;
};

// newArr.__proto__.내가만든필터 = function (cb) {
//   const result = [];
//   for (let index = 0; index <= this.length - 1; index++) {
//     if (cb(this[index])) {
//       result.push(this[index]);
//     }
//   }
//   return result;
// };

const filterArr = newArr.내가만든필터((word) => {
  return word === 5;
});

// console.log(filterArr);

// const tag = (...args) => console.log(args);

// tag("asd", "asdasd")

function array(name) {
  this.name = name;
}

export {array, filterArr}
