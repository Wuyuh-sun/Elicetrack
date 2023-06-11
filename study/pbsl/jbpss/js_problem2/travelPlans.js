/**
 * 입력
 *
 * 첫째 줄에 YYYY-MM-DD 형식의 문자열이 주어집니다. (2,000≤YYYY≤2,099)
 */
/**
 * 출력
 *
 * 첫째 줄에 입력받은 날짜가 올바른 날짜라면 1, 아니라면 0을 출력합니다.
 */

/**
 * 예제 입력1
 * 2099-01-01
 */

/**
 * 예제 출력1
 * 1
 */

/**
 * 예제 입력2
 * 2022-13-32
 */

/**
 * 예제 출력2
 * 0
 */

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result;

rl.on("line", function (x) {
  const date = x.split("-");
  const [year, month, day] = date;

  if (2000 <= Number(year) && 2099 >= Number(year)) {
    if (
      // 윤년일 경우
      (Number(year) % 4 === 0 && Number(year) % 100 !== 0) ||
      Number(year) % 400 === 0
    ) {
      if ([1, 3, 5, 7, 8, 10, 12].includes(Number(month))) {
        if (Number(day) <= 31 && Number(day) > 0) {
          result = true;
        } else {
          result = false;
        }
      } else if ([4, 6, 9, 11].includes(Number(month))) {
        if (Number(day) <= 30 && Number(day) > 0) {
          result = true;
        } else {
          result = false;
        }
      } else if (Number(month) === 2) {
        if (Number(day) <= 29 && Number(day) > 0) {
          result = true;
        } else {
          result = false;
        }
      } else {
        result = false;
      }
    } else {
      // 윤년이 아닐 경우
      if ([1, 3, 5, 7, 8, 10, 12].includes(Number(month))) {
        if (Number(day) <= 31 && Number(day) > 0) {
          result = true;
        } else {
          result = false;
        }
      } else if ([4, 6, 9, 11].includes(Number(month))) {
        if (Number(day) <= 30 && Number(day) > 0) {
          result = true;
        } else {
          result = false;
        }
      } else if (Number(month) === 2) {
        if (Number(day) <= 28 && Number(day) > 0) {
          result = true;
        } else {
          result = false;
        }
      } else {
        result = false;
      }
    }
  } else {
    result = false;
  }

  result ? console.log(1) : console.log(0);
  rl.close();
}).on("close", function () {
  process.exit();
});

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let data = '';
// rl.on('line', function (x) {
//   data = x;
//   rl.close();
// }).on('close', function () {
//   const [y, m, d] = data.split('-').map(v => Number(v));
//   const table31 = [1, 3, 5, 7, 8, 10, 12].indexOf(m) !== -1;
//   const table30 = [4, 6, 9, 11].indexOf(m) !== -1;
//   const table29 = y % 4 === 0;
//   const checkDay = (() => {
//     if (table29) return 29;
//     if (table30) return 30;
//     if (table31) return 31;
//     return 28;
//   })();

//   const yearCondition = y >= 2000 && y <= 2099;
//   const monthCondition = m >= 1 && m <= 12;
//   const dayCondition = d >= 1 && d <= checkDay;

//   if (yearCondition && monthCondition && dayCondition) {
//     console.log(1);
//   } else {
//     console.log(0);
//   }

//   process.exit();
// });
