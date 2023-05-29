/**
 *
 * 입력
 * 첫째 줄에 파일의 개수 N이 주어집니다. (1 ≤ N ≤ 1,000)
 * 둘째 줄부터N개의 줄에 걸쳐, 각 줄마다 문자열 S가 주어집니다. S는 알파벳 대소문자로 구성되어 있습니다. (1 ≤ ∣S∣ ≤ 100)
 *
 * 출력
 * N개의 줄에 걸쳐서 S를 첫 글자는 대문자, 나머지 글자는 소문자로 바꾼 문자열을 출력합니다.
 */

/**
 * 예제 입력
 *
 * 3
 * abc
 * helloWORLD
 * qWeRtY
 */

/**
 * 예제 출력
 *
 * Abc
 * Helloworld
 * Qwerty
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0;
let N = 1;
let data = [];

rl.on("line", function (x) {
  lineCnt++;
  if (N === 1) {
    N += Number(x);
  } else {
    data.push(x);
  }
  if (lineCnt === N) {
    rl.close();
  }
}).on("close", function () {
  const newData = data.map((item) => {
    const firstStr = item.charAt(0);
    const other = item.slice(1);
    return firstStr.toUpperCase() + other.toLowerCase();
  });

  newData.map((item) => {
    console.log(item);
  });

  process.exit();
});

/**
 * 해설
 *
 * 입력받은 문자열을 순회하며 첫 문자는 대문자로, 나머지 문자는 소문자로 변환하면 됩니다. 풀이의 시간복잡도는 O(∣S∣)입니다.
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
//    if (count === Number(data[0]) + 1) {
//      rl.close();
//    }
//  }).on('close', function () {
//    for (let i = 1; i < data.length; i++) {
//      data[i] = data[i].toLowerCase();
//      const firstChar = data[i].charAt(0).toUpperCase();
//      const rest = data[i].slice(1);
//      console.log(firstChar + rest);
//    }

//    process.exit();
//  });
