/**
 *
 * 입력
 * 첫째 줄에 문자열의 길이 N이 주어집니다. (1≤N≤1,000)
 * 둘째 줄에 N글자로 이루어진 문자열 S가 주어집니다.
 * S는 알파벳 대소문자, 숫자로 구성되어 있습니다.
 *
 * 출력
 * 첫째줄에 S의 대문자, 소문자, 숫자의 개수를 공백으로 구분해 출력합니다.
 */

/**
 * 예제 입력
 *
 * 8
 * Rabbit42
 */

/**
 * 예제 출력
 *
 * 1 5 2
 */

// const readline = require("readline");
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0;
const data = [];
let S_cnt = [0, 0, 0];

// 대문자인지 확인하는 함수 작성
function isUpperCase(str) {
  return str === str.toUpperCase();
}

// 소문자인지 확인하는 함수 작성
function isLowerCase(str) {
  return str === str.toLowerCase();
}

rl.on("line", function (x) {
  lineCnt++;
  data.push(x);
  if (lineCnt === 2) {
    rl.close();
  }
}).on("close", function () {
  const [N, S] = data;
  const S_split = S.split("");
  S_split.map((item) => {
    switch (true) {
      case !isNaN(item): // 숫자일때
        S_cnt[2]++;
        break;
      case isUpperCase(item): // 대문자일때
        S_cnt[0]++;
        break;
      case isLowerCase(item): // 소문자일때
        S_cnt[1]++;
        break;
    }
  });
  console.log(S_cnt.join(" "));
  process.exit();
});

/**
 * 해설
 *
 * 입력받은 문자열을 순회하며 각 문자가 대문자, 소문자, 숫자 중 어디에 해당되는지 확인하면 됩니다. 풀이의 시간복잡도는 O(n)입니다.
 */

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let lineCount = 0;
// const data = [];
// rl.on('line', function (x) {
//   data.push(x);
//   lineCount += 1;

//   if (lineCount === 2) {
//     rl.close();
//   }
// }).on('close', function () {
//   const [length, s] = data;
//   let upperCount = 0;
//   let lowerCount = 0;
//   let numberCount = 0;

//   for (let i = 0; i < Number(length); i++) {
//     const unicode = s.charCodeAt(i);

//     if (unicode > 47 && unicode < 58) {
//       numberCount += 1;
//     }
//     if (unicode > 64 && unicode < 91) {
//       upperCount += 1;
//     }
//     if (unicode > 96 && unicode < 123) {
//       lowerCount += 1;
//     }
//   }

//   console.log(upperCount, lowerCount, numberCount);

//   process.exit();
// });
