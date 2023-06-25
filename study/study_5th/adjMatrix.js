class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.adjMatrix = [];

    // 인접 행렬 초기화
    for (let i = 0; i < numVertices; i++) {
      this.adjMatrix[i] = [];
      for (let j = 0; j < numVertices; j++) {
        this.adjMatrix[i][j] = 0;
      }
    }
  }

  addEdge(source, destination) {
    // 간선 추가
    this.adjMatrix[source][destination] = 1;
    this.adjMatrix[destination][source] = 1;
  }

  printGraph() {
    // 인접 행렬 출력
    for (let i = 0; i < this.numVertices; i++) {
      let row = '';
      for (let j = 0; j < this.numVertices; j++) {
        row += this.adjMatrix[i][j] + ' ';
      }
      console.log(row);
    }
  }
}

// 그래프 생성 및 간선 추가 예시
const graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(3, 4);

// 인접 행렬 출력
graph.printGraph();