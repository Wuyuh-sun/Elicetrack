/**
 * 입력
 *
 * 첫째 줄에 자연수 N이 주어집니다. (1≤N≤1,000) 둘째 줄부터 N개의 줄에 걸쳐, 각 줄마다 이상한 나라의 표기법으로 쓰여진 자연수 A, B가 공백으로 구분되어 주어집니다.
 * A, B를 일반적인 표기법으로 고친 값은 0보다 크거나 같고, 1,000,000,000보다 작거나 같은 자연수입니다.
 */
/**
 * 출력
 *
 * N개의 줄에 걸쳐, 각 줄마다 A, B를 더한 결과를 이상한 나라의 표기법으로 출력합니다.
 */

/**
 * 예제 입력1
 * 3
 * 13 47
 * 194 992
 * 0000000001 0000000001
 */

/**
 * 예제 출력1
 * 501
 * 097
 * 0000000002
 */

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0;
let N;
const data = [];
rl.on("line", function (x) {
  lineCnt++;
  if (!N) {
    N = Number(x);
  } else {
    const split = x.split(" ");
    const mapReverse = split.map((item) => {
      return item.split("").reverse();
    });
    data.push(mapReverse);
  }
  if (lineCnt === N + 1) {
    rl.close();
  }
}).on("close", function () {
  const result = data.map((item) => {
    const num = item.reduce((acc, curr) => {
      return acc + Number(curr.join(""));
    }, 0);
    const reversedNum = String(num).split("").reverse().join("");
    return reversedNum;
  });
  console.log(result.join("\n"));
  process.exit();
});
