/**
 * 입력
 *
 * 첫째 줄에 자연수 N이 주어진다. (1≤N≤100)
 */
/**
 * 출력
 *
 * N번째 패턴을 출력한다.
 */

/**
 * 예제 입력1
 * 3
 */

/**
 * 예제 출력1
 * *********
 * *       *
 * * ***** *
 * * *   * *
 * * * * * *
 * * *   * *
 * * ***** *
 * *       *
 * *********
 */

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = null;
rl.on("line", function (x) {
  const X = Number(x);
  n = X + (X - 2);
  console.log(n);
  rl.close();
}).on("close", function () {
  for (let i = n; i >= -n; i--) {
    let arr = [];
    for (let j = -n; j <= n; j++) {
      const max = Math.max(Math.abs(i), Math.abs(j));
      if (max % 2 === 0) {
        arr.push("*");
      } else {
        arr.push(" ");
      }
    }

    console.log(arr.join(""));
  }

  process.exit();
});
