class Graph {
  constructor() {
    this.vertices = {}; // 정점들을 저장하기 위한 객체
  }

  // 정점 추가
  addVertex(vertex) {
    if (!this.vertices[vertex]) {
      this.vertices[vertex] = [];
    }
  }

  // 간선 추가 (방향 그래프)
  addEdge(fromVertex, toVertex) {
    if (this.vertices[fromVertex] && this.vertices[toVertex]) {
      this.vertices[fromVertex].push(toVertex);
    }
  }

  // 정점에 연결된 모든 이웃 정점 반환
  getNeighbors(vertex) {
    return this.vertices[vertex] || [];
  }

  // 그래프 출력
  print() {
    for (let vertex in this.vertices) {
      const neighbors = this.vertices[vertex];
      console.log(`${vertex} -> ${neighbors.join(', ')}`);
    }
  }
}

// 그래프 생성
const graph = new Graph();

// 정점 추가
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

// 간선 추가
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');

// 그래프 출력
graph.print();
