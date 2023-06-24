/**
 *
 * **steps** 수만큼 높이의 계단에 개구리가 앉아 있다.
 *
 * 개구리는 계단을 뛰어넘을려고 하는데 한번의 점프를 통해 1에서 **maxJumpLength**만큼 계단을 오를 수 있다.
 *
 * 개구리가 계단을 넘는데 가능한 모든 방법의 총량을 계산하세요.
 *
 * 단, 계단을 넘는 방법의 수가 매우 큰 경우 BigInt로 구하세요.
 *
 * ---
 *
 * 예시) steps=3, maxJumpLength=3 일때
 *
 * 1. 1칸 3번 (1-1-1)
 *
 * 2. 1칸 1번, 2칸 1번(1-2)
 *
 * 3. 2칸 1번, 1칸 1번 (2-1)
 *
 * 4. 3칸 1번 (3)
 *
 * 총 4가지 방법의 점프 방법이 있습니다.
 *
 *
 * ![frog](https://t4.ftcdn.net/jpg/05/63/41/31/360_F_563413161_oGBZ26aTsBgWVI7kvnBTXOWrvXP0Q8AY.jpg)
 *
 * @param {number} steps 계단높이
 * @param {number} maxJumpLength 최대 점프 수
 * @returns {number}
 */
const frogStep = (steps, maxJumpLength) => {
  // dp 배열은 합이 i가 되도록 만들 수 있는 방법의 가지 수를 저장합니다.
  const dp = new Array(steps + 1).fill(0n);
  // 초기값 설정: 합이 0이 되는 방법은 아무 것도 선택하지 않는 것 1가지 방법입니다.
  dp[0] = 1n;

  // 1부터 steps 합에 대해 방법의 가지 수를 계산합니다.
  for (let i = 1; i <= steps; i++) {
    // console.log(dp);
    // 1부터 maxJumpLength까지의 숫자를 하나씩 선택하여 합을 만들어나갑니다.
    for (let j = 1; j <= Math.min(maxJumpLength, i); j++) {
      dp[i] += dp[i - j];
      // console.log(`${i}: ${dp[i]}, ${j}: ${dp[j]} => ${dp}`);
    }
  }
  // console.log(dp);

  // steps에 대한 방법의 가지 수를 반환합니다.
  return dp[steps];
};
// console.log(frogStep(2, 1)); // 1
// console.log(frogStep(2, 2)); // 2
// console.log(frogStep(3, 2)); // 3
// console.log(frogStep(4, 2)); // 5
// console.log(frogStep(4, 3)); // 7
// console.log(frogStep(4, 4)); // 8
console.log(frogStep(5, 5)); // 16

/**
 * 0까지의합    1까지의합    2까지의합    3까지의합    4까지의 합
 * [1,          1,           2,           4,          8]
 *
 * 0을 구하는 방법은 아무것도 안 더하는 방법                               | 1가지
 *
 * 1까지의 구하는 방법은 | 1                                               | 1가지
 * -----------------------------------------------------------------------------
 * 2까지..               | 1-1,
 *                       | 2                                               | 2가지
 * -----------------------------------------------------------------------------
 * 3까지..               | 1-1-1, 1-2,
 *                       | 2-1,
 *                       | 3                                               | 4가지
 * -----------------------------------------------------------------------------
 * 4까지..               | 1-1-1-1, 1-1-2, 1-2-1, 1-3,
 *                       | 2-1-1, 2-2,
 *                       | 3-1,
 *                       | 4                                               | 8가지
 * -----------------------------------------------------------------------------
 * 5까지..               | 1-1-1-1-1, 1-1-1-2, 1-1-2-1, 1-2-1-1, 1-2-2, 1-1-3, 1-3-1, 1-4,
 *                       | 2-1-1-1, 2-1-2, 2-2-1, 2-3,
 *                       | 3-1-1, 3-2,
 *                       | 4-1,
 *                       | 5                                               | 16가지
 * -----------------------------------------------------------------------------
 */

// console.log(frogStep(3, 3)); // 4
// console.log(frogStep(6, 4)); // 29
// console.log(frogStep(96, 57)); // 39614081257132163299213836288n