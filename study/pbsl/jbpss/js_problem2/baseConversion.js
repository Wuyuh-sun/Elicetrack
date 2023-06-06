/**
 * 입력
 *
 * 첫째 줄에 자연수 N,B가 공백으로 구분되어 주어집니다. (0 ≤ N ≤ 1,000,000,000, 2 ≤B ≤9)
 */
/**
 * 출력
 *
 * 첫째 줄에 N을 B진법으로 출력합니다.
 */

/**
 * 예제 입력1
 * 42 2
 */

/**
 * 예제 출력1
 * 101010
 */

/**
 * 예제 입력2
 * 42 7
 */

/**
 * 예제 출력2
 * 60
 */

// const readline = require("readline");
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (x) {
  const [num, parseBase] = x.split(" ");
  const result = Number(num).toString(parseBase);
  console.log(result);
  rl.close();
}).on("close", function () {
  process.exit();
});
