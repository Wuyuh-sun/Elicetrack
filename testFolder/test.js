// // 연결 리스트의 노드 정의
// class Node {
//   constructor(data) {
//     this.data = data; // 데이터
//     this.next = null; // 다음 노드를 가리키는 포인터
//   }
// }

// // 연결 리스트 정의
// class LinkedList {
//   constructor() {
//     this.head = null; // 헤드 포인터
//     this.tail = null; // 꼬리 포인터
//   }

//   // 노드를 연결 리스트의 끝에 추가하는 메서드
//   append(data) {
//     const newNode = new Node(data);

//     // 연결 리스트가 비어있는 경우
//     if (this.head === null) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       // 연결 리스트에 이미 요소가 있는 경우
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//   }
// }

// // 연결 리스트 생성
// const linkedList = new LinkedList();

// // 노드 추가
// linkedList.append(10);
// linkedList.append(20);
// linkedList.append(30);
// linkedList.append(40);
// linkedList.append(50);

// // 결과 출력
// console.log(linkedList);

// var x = 1;
// const y = 2;
// function outer() {
//   var x = 3;
//   const y = 4;
//   const z = 1;
//   function inner() {
//     const z = 5;
//     console.log(x + y + z);
//   }
//   console.log(x + y + z);
//   return inner
// }
// const innerfunc = outer();
// // innerfunc();

// console.log(Math.sqrt(9));

// const arr = [1,2];

// console.log(arr.pop());

// console.log(callMe());

// let x = 10;

// console.log(callMe());

// function callMe() {
//   return x;
// }

// class TreeNode {
//   constructor(value) {
//     this.value = value;
//     this.children = [];
//   }

//   // 자식 노드 추가
//   addChild(childNode) {
//     this.children.push(childNode);
//   }
// }

// // 트리 생성
// const tree = new TreeNode("A");

// // 노드 추가
// const nodeB = new TreeNode("B");
// const nodeC = new TreeNode("C");
// const nodeD = new TreeNode("D");
// const nodeE = new TreeNode("E");

// tree.addChild(nodeB);
// tree.addChild(nodeC);
// nodeB.addChild(nodeD);
// nodeB.addChild(nodeE);
// nodeB.addChild(tree);

// console.log(nodeB.children);

// console.log("a" <= "b");

const nodeA = {
  value:"A",
  children: [],
};
const nodeB = {
  value:"B",
  children: [],
};
const nodeC = {
  value:"C",
  children: [],
};
const nodeD = {
  value:"D",
  children: [],
};
const nodeE = {
  value:"E",
  children: [],
};

nodeA.children.push(nodeB);
nodeA.children.push(nodeC);
nodeB.children.push(nodeD);
nodeB.children.push(nodeE);

console.log(nodeA.children[0])
