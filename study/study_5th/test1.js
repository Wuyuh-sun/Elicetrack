/**
 *
 * @param {Array} v 배열
 * @returns
 */
function test1(location, s, e) {
  var answer = [];

  var x = []; // low, high
  var y = []; // low, high

  s[0] < e[0] ? ((x[0] = s[0]), (x[1] = e[0])) : ((x[0] = e[0]), (x[1] = s[0]));
  s[1] < e[1] ? ((y[0] = s[1]), (y[1] = e[1])) : ((y[0] = e[1]), (y[1] = s[1]));

  // console.log('x',x);
  // console.log('y',y);

  location.map((item, i) => {
    // console.log('item',item)
    item[0] >= x[0] && item[0] <= x[1] && item[1] >= y[0] && item[1] <= y[1]
      ? answer.push(item)
      : false;
    // item[1] >= y[0] && item[1] <= y[1] ? answer
  });

  // console.log('answer',answer.length)

  return answer.length;
}
console.log("예시 테스트 케이스");

console.log(
  test1(
    [
      [0, 3],
      [1, 1],
      [1, 5],
      [2, 2],
      [3, 3],
      [4, 0],
    ],
    [1, 4],
    [4, 1]
  )
); // 3
console.log(
  test1(
    [
      [0, 3],
      [1, 1],
      [1, 5],
      [2, 2],
      [3, 3],
      [4, 0],
    ],
    [3, 4],
    [0, 0]
  )
); // 4
console.log("chatGPT 생성 테스트 케이스");
//1
console.log(
  test1(
    [
      [4, 5],
      [7, 4],
      [5, 2],
      [3, 7],
    ],
    [2, 6],
    [8, 3]
  )
); // 2

//2 v
console.log(
  test1(
    [
      [2, 4],
      [5, 1],
      [3, 3],
      [7, 2],
    ],
    [1, 3],
    [6, 2]
  )
); // 1

//3 v
console.log(
  test1(
    [
      [6, 6],
      [3, 1],
      [7, 4],
      [2, 3],
    ],
    [1, 4],
    [5, 2]
  )
); // 1

//4 v
console.log(
  test1(
    [
      [0, 0],
      [5, 5],
      [2, 3],
      [1, 4],
    ],
    [0, 0],
    [5, 5]
  )
); // 4

//5 v
console.log(
  test1(
    [
      [3, 3],
      [4, 4],
      [2, 2],
      [5, 5],
    ],
    [2, 2],
    [5, 5]
  )
); // 4

//6 v
console.log(
  test1(
    [
      [4, 5],
      [6, 6],
      [2, 4],
      [3, 3],
    ],
    [2, 2],
    [5, 5]
  )
); // 3

//7 v
console.log(
  test1(
    [
      [1500000000, 1500000000],
      [2500000000, 2500000000],
      [1700000000, 1300000000],
      [1900000000, 1700000000],
    ],
    [1000000000, 1000000000],
    [2000000000, 2000000000]
  )
); // 3

//8 v
console.log(
  test1(
    [
      [2, 2],
      [5, 5],
      [8, 8],
      [3, 3],
    ],
    [0, 0],
    [10, 10]
  )
); // 4
