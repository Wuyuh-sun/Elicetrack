/**
 * 
 * **steps** 수만큼 높이의 계단에 개구리가 앉아 있다.
 * 
 * 개구리는 계단을 뛰어넘을려고 하는데 한번의 점프를 통해 1에서 **maxJumpLength**만큼 계단을 오를 수 있다.
 * 
 * 개구리가 계단을 넘는데 가능한 모든 방법의 총량을 계산하세요.
 * 
 * ---
 * 
 * 예시) steps=3, maxJumpLength=3 일때
 * 
 * 1. 1칸 3번
 * 
 * 2. 1칸 1번, 2칸 1번
 * 
 * 3. 2칸 1번, 1칸 1번
 * 
 * 4. 3칸 1번
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
const getNumberOfWays = (steps, maxJumpLength) => {
  
  return 0
}

console.log(getNumberOfWays(3,3)) // 4
console.log(getNumberOfWays(6,4)) // 29
console.log(getNumberOfWays(96,57)) // 39614081257132163299213836288n
