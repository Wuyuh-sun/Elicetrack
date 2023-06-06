/**
 *
 * 입력
 * 첫째 줄에 자연수 M이 공백으로 구분되어 주어집니다. (1≤N≤M≤1,000)
 * 둘째 줄에 알파벳 대문자 N글자로 이루어진 문자열 A가 주어집니다.
 * 셋째 줄에 알파벳 대문자 M글자로 이루어진 문자열 B가 주어집니다.
 *
 * 출력
 * 첫째 줄에 A가 B의 부분 문자열이라면 1을, 아니라면 0을 출력합니다.
 */

/**
 * 예제 입력1
 *
 * 2 6
 * AB
 * AAABAA
 */
/**
 * 예제 출력1
 *
 * 1
 */

/**
 * 예제 입력2
 *
 * 3 6
 * ABC
 * AAABAC
 */
/**
 * 예제 출력2
 *
 * 0
 */

// const readline = require("readline");
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0;
let data = [];

rl.on("line", function (x) {
  lineCnt++;
  data.push(x);
  if (lineCnt === 3) {
    rl.close();
  }
}).on("close", function () {
  const filter = data[2].split(data[1]);
  if (filter.join("") === data[2]) {
    console.log(0);
  } else {
    console.log(1);
  }
  process.exit();
});

/**
 * 해설
 *
 * A, B를 문자열 자료구조에 저장한 뒤, B의 모든 길이가 N인 substring을 확인하며 A와 같은 경우가 있는지 보면 됩니다. 풀이의 시간복잡도는 O(nm)입니다.
 */

//  const readline = require('readline');

//  const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout,
//  });

//  let count = 0;
//  const data = [];
//  rl.on('line', function (x) {
//    data.push(x);
//    count += 1;
//    if (count === 3) {
//      rl.close();
//    }
//  }).on('close', function () {
//    const [_, a, b] = data;

//    if (b.includes(a)) {
//      console.log(1);
//    } else {
//      console.log(0);
//    }
//    process.exit();
//  });
