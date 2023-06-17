# 탐색 알고리즘 학습

## 탐색 종류

- 선형 탐색 (Linear Search)
- 이진 탐색 (Binary Search)
- 깊이 우선 탐색 (Depth-First Search, DFS)
- 너비 우선 탐색 (Breadth-First Search, BFS)
- 해시 탐색 (Hashing Search)
- 등...

---

## 탐색 특징

### 선형 탐색 (Linear Search)

> **리스트** 또는 **배열**에서 원하는 요소를 순차적으로 탐색하는 방법이다.

> 처음부터 끝까지 순서대로 요소를 비교하여 찾고자 하는 값을 찾을 때까지 반복한다.

![Linear Search](./img/linear.png)

```javascript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // 탐색 성공, 해당 요소의 인덱스 반환
    }
  }
  return -1; // 탐색 실패, -1 반환
}

// 예시 배열과 탐색 대상
const array = [4, 2, 9, 5, 1, 7, 6, 3, 8];
const target = 5;

const result = linearSearch(array, target);

if (result !== -1) {
  console.log(`탐색 성공! 인덱스 ${result}에서 발견되었습니다.`);
} else {
  console.log("탐색 실패! 대상을 찾을 수 없습니다.");
}
```

### 이진 탐색( = 이분 탐색) (Binary Search)

> **정렬된 리스트** 또는 **배열**에서 원하는 요소를 찾기 위해 중간 요소를 비교하고 탐색 범위를 반씩 줄여가는 방법이다.

> 이진 탐색은 탐색 범위를 빠르게 축소하여 빠른 검색을 가능하게 한다.

![Binary Search](./img/BinarySearch.png)

```javascript
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let midValue = arr[mid];

    if (midValue === target) {
      return mid; // 탐색 성공, 해당 요소의 인덱스 반환
    } else if (midValue < target) {
      low = mid + 1; // 중간값이 타겟보다 작으면 오른쪽 절반 탐색
    } else {
      high = mid - 1; // 중간값이 타겟보다 크면 왼쪽 절반 탐색
    }
  }

  return -1; // 탐색 실패, -1 반환
}

// 예시 배열과 탐색 대상
const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 11;

const result = binarySearch(array, target);

if (result !== -1) {
  console.log(`탐색 성공! 인덱스 ${result}에서 발견되었습니다.`);
} else {
  console.log("탐색 실패! 대상을 찾을 수 없습니다.");
}
```

### 깊이 우선 탐색 (Depth-First Search, DFS)

> **그래프**나 **트리**에서 깊이 방향으로 탐색을 수행하는 알고리즘이다.

> 한 경로를 따라 끝까지 탐색한 후 다른 경로를 탐색한다.

![DFS](./img/dfs.png)

```javascript
// 트리 노드 구조체
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// DFS 함수
function dfs(root) {
  if (root === null) return; // 기저 조건: 노드가 null이면 종료

  console.log(root.val); // 현재 노드 값 출력

  dfs(root.left); // 왼쪽 서브트리 DFS 호출
  dfs(root.right); // 오른쪽 서브트리 DFS 호출
}

// 트리 생성
const root = new TreeNode('A');
root.left = new TreeNode('B');
root.right = new TreeNode('C');
root.left.left = new TreeNode('D');
root.left.right = new TreeNode('E');
root.right.left = new TreeNode('F');
root.right.right = new TreeNode('G');

// DFS 호출
dfs(root);
```
```
트리구조

      A
     / \
    B   C
   / \ / \
  D  E F  G
```
```
출력결과 

A B D E C F G
```

### 너비 우선 탐색 (Breadth-First Search, BFS)

> 그래프나 트리에서 레벨 순서로 탐색을 수행하는 알고리즘이다.

> 한 레벨씩 넓게 탐색하며 같은 레벨의 노드를 모두 탐색한 후 다음 레벨로 넘어간다.

![BFS](./img/bfs.png)

```javascript
// 트리 노드 구조체
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// BFS 함수
function bfs(root) {
  if (root === null) return; // 기저 조건: 노드가 null이면 종료

  const queue = []; // 큐 생성
  queue.push(root); // 루트 노드를 큐에 추가

  while (queue.length > 0) {
    const node = queue.shift(); // 큐에서 노드를 꺼냄

    console.log(node.val); // 현재 노드 값 출력

    if (node.left !== null) {
      queue.push(node.left); // 왼쪽 자식 노드를 큐에 추가
    }
    if (node.right !== null) {
      queue.push(node.right); // 오른쪽 자식 노드를 큐에 추가
    }
  }
}

// 트리 생성
const root = new TreeNode('A');
root.left = new TreeNode('B');
root.right = new TreeNode('C');
root.left.left = new TreeNode('D');
root.left.right = new TreeNode('E');
root.right.left = new TreeNode('F');
root.right.right = new TreeNode('G');

// BFS 호출
bfs(root);
```
```
트리구조

      A
     / \
    B   C
   / \ / \
  D  E F  G
```
```
출력결과 

A B C D E F G
```

### 해시 탐색 (Hashing Search)

> 해시 함수를 사용하여 값을 해시 테이블에 매핑한 후, 해시 충돌을 처리하면서 값을 찾는 방법이다.

> 해시 탐색은 상수 시간에 가까운 빠른 검색을 제공한다.

![Hashing Search](./img/hash.png)

```javascript
// 해시 탐색 함수
function hashSearch(hashTable, key) {
  if (key in hashTable) {
    return hashTable[key];
  } else {
    return null; // 키에 대응하는 값이 없을 경우 null 반환
  }
}

// 해시 테이블 생성
const hashTable = {
  apple: "사과",
  banana: "바나나",
  cherry: "체리",
  date: "데이트",
};

// 해시 탐색
console.log(hashSearch(hashTable, "apple")); // 출력: 사과
console.log(hashSearch(hashTable, "banana")); // 출력: 바나나
console.log(hashSearch(hashTable, "grape")); // 출력: null (해당 키가 없음)
```

---
