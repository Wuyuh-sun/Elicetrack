/**
 * 입력
 *
 * 첫째 줄에 자연수 N이 주어집니다. (1≤N≤100,000)
 */
/**
 * 출력
 *
 * 첫째 줄에 N의 약수의 개수를 출력합니다. 둘째 줄부터 한 줄에 하나씩 N의 양의 약수를 오름차순으로 출력합니다.
 */

/**
 * 예제 입력1
 *
 * 12
 */

/**
 * 예제 출력1
 * 6
 * 1
 * 2
 * 3
 * 4
 * 6
 * 12
 */

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (x) {
  let result = [];
  for (let i = 1; i <= x; i++) {
    if (x % i === 0) {
      result.push(i);
    }
  }
  result.unshift(result.length);
  console.log(result.join("\n"));
  rl.close();
}).on("close", function () {
  process.exit();
});
