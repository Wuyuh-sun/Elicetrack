function solution(arr) {
  const n = (arr.length + 1) / 2; // 숫자의 개수

  const dpMax = Array.from(Array(n), () => Array(n).fill(-Infinity)); // 최댓값을 저장하는 DP 배열
  const dpMin = Array.from(Array(n), () => Array(n).fill(Infinity)); // 최솟값을 저장하는 DP 배열

  // 숫자들을 초기화
  const numbers = [];
  for (let i = 0; i < arr.length; i += 2) {
    numbers.push(Number(arr[i]));
  }

  // 초기값 설정
  for (let i = 0; i < n; i++) {
    dpMax[i][i] = numbers[i];
    dpMin[i][i] = numbers[i];
  }

  // DP 계산
  for (let d = 1; d < n; d++) {
    for (let i = 0; i < n - d; i++) {
      const j = i + d;

      for (let k = i; k < j; k++) {
        if (arr[k * 2 + 1] === "+") {
          dpMax[i][j] = Math.max(dpMax[i][j], dpMax[i][k] + dpMax[k + 1][j]);
          dpMin[i][j] = Math.min(dpMin[i][j], dpMin[i][k] + dpMin[k + 1][j]);
        } else if (arr[k * 2 + 1] === "-") {
          dpMax[i][j] = Math.max(dpMax[i][j], dpMax[i][k] - dpMin[k + 1][j]);
          dpMin[i][j] = Math.min(dpMin[i][j], dpMin[i][k] - dpMax[k + 1][j]);
        }
      }
    }
  }

  return dpMax[0][n - 1]; // 최댓값 반환
}
console.log(solution(["1", "-", "3", "+", "5", "-", "8"])); // 1
console.log(solution(["5", "-", "3", "+", "1", "+", "2", "-", "4"])); // 3

