# 탐욕법(Greedy) & 동적 계획법(Dynamic Programming - DP) 학습

## 탐욕법(Greedy)

- 최적해를 구하는 문제를 해결하기 위한 알고리즘 설계 기법 중 하나

### 특징

> 각 단계에서 최선의 선택을 하는 방식으로 문제를 해결하는 접근법이다.

> 각 선택이 현재 단계에서는 최적이어도 전체적으로는 최적해를 보장하지 않는다.

> 선택한 옵션을 해결에 반영 후, 다음 단계로 넘어간다.

> 모든 단계가 완료될 때까지 반복한다.

### 장점

- 간단하고 직관적이다.
- 실행 속도가 빠르다.
- 실용적인 문제에서 유용하게 사용된다.

### 단점

- 최적해를 보장하지 않는다.

### 예시

- 가장 큰값을 구하라.
  ![greedy](./img/greedy.png)
- 위의 그림에서 가장 큰 값을 구하면 100이다.
- 하지만 탐욕법을 적용하면 각 단계에서 가장 큰 값을 찾아가므로 첫 번째에서는 10을 두번째에서 8을 선택한다.

### 거스름돈 문제

- 가장 적은 개수의 동전을 사용하여 지불해야 하는 금액을 거슬러 주자.
- 동전 종류 `[500, 100, 50, 10]`
- 거스름 돈 `1260`
- 정답 `[500, 500, 100, 100, 50, 10]`
- 코드
```javascript
function greedyCoinChange(coins, target) {
  coins.sort((a, b) => b - a);  // 동전을 큰 순서대로 정렬
  const change = [];  // 거스름돈 동전들을 담을 배열

  for (let coin of coins) {
    while (coin <= target) {  // 현재 동전으로 거스름돈을 계속 만들 수 있을 때까지 반복
      change.push(coin);  // 동전을 거스름돈 배열에 추가
      target -= coin;  // 거스름돈에서 현재 동전의 가치만큼 빼기
    }
  }

  return change;
}

// 거스름돈 동전의 종류와 지불해야 할 금액
const coins = [500, 100, 50, 10];
const target = 1260;

const result = greedyCoinChange(coins, target);
console.log(result);  // [500, 500, 100, 100, 50, 10]
```

---

## 동적 계획법(Dynamic Programming - DP)
