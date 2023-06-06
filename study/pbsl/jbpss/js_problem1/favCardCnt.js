/**
 * 입력
 *
 * 첫째 줄에 엘리스가 가지고 있는 카드의 수인 N이 입력됩니다. (1≤N≤1000)
 * 둘째 줄에는 카드에 적힌 숫자 N개가 공백을 기준으로 입력됩니다.
 * 각각의 카드에는 1부터 1000사이의 정수가 적혀있습니다.
 * 마지막 줄에는 엘리스가 좋아하는 숫자인 M이 입력됩니다. (1≤M≤1000)
 */

/**
 * 출력
 *
 * 첫째 줄에 엘리스가 가지고 있는 N개의 카드 중에서 엘리스가 좋아하는 숫자가 적힌 카드의 수를 출력합니다.
 */

/**
 * 예제 입력
 * 10
 * 937 939 437 437 437 981 437 437 437 437
 * 437
 */

/**
 * 예제 출력
 * 7
 */

// const readline = require("readline");
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cnt = 0;
const input = [];
let inputCnt = 0;

rl.on("line", function (x) {
  cnt += 1;
  input.push(x.split(" "));

  if (cnt >= 3) {
    const N = input[0][0]; // 10
    const M = input[2][0]; // 437
    input[1].map((item) => {
      if (item === M) {
        inputCnt++;
      }
    });
    console.log(inputCnt);
    rl.close();
  }
}).on("close", function () {
  process.exit();
});

/**
 * 해설
 *
 * 입력받은 수를 배열에 저장한 뒤, 배열을 순회하며 A¡=k인 i의 개수를 구하면 됩니다. 풀이의 시간복잡도는 O(n)입니다.
 */

//  const readline = require('readline');

//  const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout,
//  });

//  let lineCount = 0;
//  let data = [];
//  let cardCount = 0;

//  rl.on('line', function (x) {
//    lineCount++;
//    data.push(x);

//    if (lineCount === 3) {
//      rl.close();
//    }
//  }).on('close', function () {
//    const [line, cardSet, favor] = data;
//    const cardSetArray = cardSet.split(' ');

//    for (let i = 0; i < Number(line); i++) {
//      if (String(cardSetArray[i]) === String(favor)) {
//        cardCount++;
//      }
//    }

//    console.log(String(cardCount));
//    process.exit();
//  });
