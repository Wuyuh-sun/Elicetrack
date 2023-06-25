class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.adjList = new Map();
  }

  addEdge(source, destination) {
    // 간선 추가
    if (!this.adjList.has(source)) {
      this.adjList.set(source, []);
    }
    if (!this.adjList.has(destination)) {
      this.adjList.set(destination, []);
    }
    this.adjList.get(source).push(destination);
    this.adjList.get(destination).push(source);
  }

  printGraph() {
    // 인접 리스트 출력

    console.log(this.adjList)

    for (let [vertex, neighbors] of this.adjList) {
      let row = vertex + " -> ";
      for (let neighbor of neighbors) {
        row += neighbor + " ";
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

// 인접 리스트 출력
graph.printGraph();
