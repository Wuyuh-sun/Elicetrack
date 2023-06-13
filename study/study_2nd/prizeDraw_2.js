/**
 *
 * 입력 조건
 *
 * 영어 알파벳으로 된 사람 이름이 담겨있는  ,로 구분된 문자열
 * 각 사람의 순서대로 임의의 가중치가 담겨있는 숫자 배열
 * 순위
 *
 * 출력 조건
 *
 *
 * 각 사람의 이름의 알파벳의 순위에 값이 있음
 * 예시)
 * A,a = 1,
 * B,b = 2,
 * C,c = 3 ...
 * 이름의 순위 값들을 전부 합치고 이름의 길이를 더함
 * 예시) Paul 일 경우
 * 이름의 길이 === 4,
 * P === 16,
 * a === 1,
 * u === 21,
 * L === 12
 * 4 + 16 + 1 + 21 + 12 === 54
 * 위 예시에서 더한 값에 가중치를 곱함(Paul의 경우 2) 이 값이 winning number임
 * 54 * 2 === 108
 * 각 사람의 winning number를 내림차순으로 정렬함
 * 단, 두 사람이 같은 이름을 가지고 있을 경우 이름의 알파벳 순으로 정렬함
 * 정렬된 배열에서 순위를 나타내는 매개변수n의 인덱스에 일치하는 번호가 경품에 당첨
 * 단, n은 1부터 번호를 매김 ex) [a,b]에서 a는 1번째
 * 만약, 참가 사람이 없을 경우 "No participants" 을 반환
 * n이 참가자 수보다 크면 "Not enough participants"을 반환
 *
 * 입력 예시
 *
 * st : "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
 * we : [1, 4, 4, 5, 2, 1]
 * n : 4
 *
 * 출력 예시
 * "Paul"
 *
 * @param {string} st 사람 이름이 들어가있는 문자열
 * @param {number[]} we 가충치
 * @param {number} n 순위
 * @returns
 */
function rank(st, we, n) {
  // 만약, 참가 사람이 없을 경우 "No participants" 을 반환
  if (st.length === 0) return "No participants";
  // n이 참가자 수보다 크면 "Not enough participants"을 반환
  if (we.length < n) return "Not enough participants";

  const split = st.split(","); // 사람 이름이 담긴 문자열 ,로 구분지은 배열

  // 참가자의 winning number와 이름을 객체에 담아 배열로 반환
  const splitMap = split.map((name, i) => {
    const nameLength = name.length; // 이름 길이
    const alphaNum = name.split("").reduce((acc, alphabet) => {
      // 이름의 각 알파벳의 순위를 더해 반환
      return acc + getAlphabetOrder(alphabet);
    }, 0);
    const som = nameLength + alphaNum; // 길이와 이름 순위의 합
    const winningNum = som * we[i]; // 가중치를 곱한 winning number
    return {
      name,
      winningNum,
    };
  });

  // winning number를 기준으로 내림차순 정렬
  // 두 사람이상이 같은 번호를 가지고 있을 경우 알파벳 순으로 정렬
  const sort = sortArray(splitMap);

  return sort[n - 1].name; // n이 1부터 순위를 매기므로 -1을 한 인덱스를 찾아서 이름을 반환
}

/**
 * 퀵 정렬 및 
 * 
 * @param {*} arr 
 * @returns 
 */
function sortArray(arr) {
  // 재귀 종료
  if (arr.length <= 1) {
    return arr;
  }
  // 중간 인덱스
  const pivotIndex = Math.floor(arr.length / 2);
  // 중간값
  const pivot = arr[pivotIndex].winningNum;

  const left = []; // 중간 값 보다 작은 값을 담을 배열
  const equal = []; // 중간 값과 같은 값을 담을 배열
  const right = []; // 중간 값 보다 큰 값을 담을 배열

  // 매개변수 배열의 길이만큼 반복하면서 배열의 요소를 중간 값을 기준으로 정렬
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (current.winningNum > pivot) {
      left.push(current);
    } else if (current.winningNum < pivot) {
      right.push(current);
    } else {
      equal.push(current);
    }
  }

  // 배열 합치기
  return sortArray(left) // 현재 중간 값보다 작게 정렬된 배열을 다시 퀵 정렬
    .concat(equal.sort((a, b) => a.name.localeCompare(b.name))) // 중간 값과 같은 배열을 알파벳 순으로 정렬
    .concat(sortArray(right)); // 현재 중간 값보다 크게 정렬된 배열을 다시 퀵 정렬
}

/**
 * 아스키코드 알파벳
 * A ~ Z 는 65 ~ 90까지이다.
 * 소문자 a ~ z 는 97 ~ 122까지인데 A,a 가 모두 같은 순서를 가진걸로 계산하는 문제이기 때문에
 * 전부 대문자로 변환하여 순서를 구한다.
 * @param {string} alphabet
 * @returns alphabet number
 */
function getAlphabetOrder(alphabet) {
  const uppercaseChar = alphabet.toUpperCase(); // 알파벳을 대문자로 변환
  const charCode = uppercaseChar.charCodeAt(0); // 알파벳문자열의 매개변수로 받은 인덱스의 아스키코드 값 반환
  const alphabetOrder = charCode - 64; // ex) A의 경우 아스키코드 65이면서 순서는 1번째이기 때문에 64를 뺀다
  return alphabetOrder;
}

console.log(
  rank("COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH", [1, 4, 4, 5, 2, 1], 4)
); // PauL

// console.log(
//   rank(
//     "Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin",
//     [4, 2, 1, 4, 3, 1, 2],
//     4
//   )
// ); // Benjamin
// console.log(rank("Lagon,Lily", [1, 5], 2)); // Lagon
// console.log(
//   rank(
//     "Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin",
//     [4, 2, 1, 4, 3, 1, 2],
//     8
//   )
// ); // Not enough participants
// console.log(rank("", [4, 2, 1, 4, 3, 1, 2], 6)); // No participants

// console.log(
//   rank(
//     "Aubrey,Jayden,William,Lyli,Aiden,Benjamin,Samantha,Isabella,Elijah,Joshua,Andrew,Abigail,Ella,Addison,Elizabeth,Sofia,Sophia,Liam,Avery,James,Noah,Lagon,Ethan,Willaim,Emma,Ava",
//     [
//       5, 6, 5, 5, 6, 6, 4, 6, 2, 2, 4, 1, 2, 2, 3, 2, 2, 3, 6, 5, 2, 5, 6, 5, 4,
//       1,
//     ],
//     3
//   )
// );

// console.log(["William", "Willaim"].sort());
