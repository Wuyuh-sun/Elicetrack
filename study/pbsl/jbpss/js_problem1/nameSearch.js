/**
 *
 * 입력
 * 첫째 줄에 명단에 적힌 단어의 개수 N이 주어집니다. (1≤N≤1,000)
 * 둘째 줄부터N개의 줄에 걸쳐, 각 줄마다 사람들의 성과 이름으로 이루어진 문자열이 주어집니다. 입력되는 문자열의 길이는 10을 넘지 않습니다.
 *
 * 출력
 * N개의 줄에 걸쳐서, 사람들의 이름을 입력된 순서대로 출력합니다.
 */

/**
 * 예제 입력
 *
 * 2
 * WhiteRabbit
 * EliceAlgo
 */

/**
 * 예제 출력
 *
 * Rabbit
 * Algo
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0;
let N = 1;
let data = [];

// 대문자인지 확인하는 함수 작성
function isUpperCase(str) {
  return str === str.toUpperCase();
}

rl.on("line", function (x) {
  lineCnt++;
  if (N === 1) {
    N += Number(x);
  } else {
    data.push(x.split(""));
  }
  if (lineCnt === N) {
    rl.close();
  }
}).on("close", function () {
  let type = true; // false가 성 true가 이름

  const newData = [];

  data.map((item, i) => {
    newData.push([[], []]);
    item.map((item2) => {
      if (isUpperCase(item2)) {
        type = !type;
      }
      if (type) {
        newData[i][1].push(item2);
      } else {
        newData[i][0].push(item2);
      }
    });
  });

  newData.map((item) => {
    console.log(item[1].join(""));
  });

  process.exit();
});

/**
 * 해설
 *
 * 입력받은 문자열에서 두 번째로 등장하는 대문자를 찾은 뒤, 해당 글자부터 마지막 글자까지를 저장해주면 됩니다.
 */

//  const readline = require('readline');

//  const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout,
//  });

//  let count = 0;
//  const data = [];
//  rl.on('line', function (x) {
//    count += 1;
//    data.push(x);
//    if (count === Number(data[0]) + 1) {
//      rl.close();
//    }
//  }).on('close', function () {
//    for (let i = 1; i < data.length; i++) {
//      let startIndex = 0;
//      data[i].split("").forEach((s, index) => {
//        if (s.charCodeAt() > 64 && s.charCodeAt() < 91) {
//          startIndex = index;
//        }
//      });
//      console.log(data[i].slice(startIndex));
//    }

//    process.exit();
//  });
