function dijkstra(graph, start) {
  const distances = {}; // 각 정점까지의 최단 거리를 저장할 객체
  const visited = {}; // 방문한 정점을 표시하는 객체
  const queue = []; // 우선순위 큐

  // 초기화
  for (let vertex in graph) {
    distances[vertex] = Infinity; // 모든 정점까지의 거리를 무한대로 설정
    visited[vertex] = false; // 모든 정점을 방문하지 않은 상태로 초기화
  }

  // console.log("distances", distances);
  // console.log("visited", visited);

  distances[start] = 0; // 시작 정점의 거리를 0으로 설정
  queue.push({ vertex: start, distance: 0 }); // 시작 정점을 큐에 삽입

  while (queue.length > 0) {
    // 큐가 비어있을 때까지 반복
    queue.sort((a, b) => a.distance - b.distance); // 거리가 짧은 순서대로 정렬

    const { vertex, distance } = queue.shift(); // 가장 거리가 짧은 정점을 꺼냄

    if (visited[vertex]) {
      // 이미 방문한 정점이면 스킵
      continue;
    }

    visited[vertex] = true; // 정점 방문 처리

    for (let neighbor in graph[vertex]) {
      // console.log('neighbor',neighbor)
      const newDistance = distance + graph[vertex][neighbor];

      if (newDistance < distances[neighbor]) {
        // 더 짧은 거리를 발견한 경우
        // console.log(distances)
        distances[neighbor] = newDistance; // 최단 거리 갱신
        queue.push({ vertex: neighbor, distance: newDistance }); // 큐에 삽입
      }
    }
  }

  return distances;
}

const graph = {
  A: { B: 5, C: 2 },
  B: { A: 5, D: 1 },
  C: { A: 2, D: 6 },
  D: { B: 1, C: 6, E: 4 },
  E: { D: 4 },
};

// const startVertex = "A";
const startVertex = "D";

const distances = dijkstra(graph, startVertex);

console.log("결과", distances);

// if(A)
// {
//   A: 0,
//   B: 5,
//   C: 2,
//   D: 6,
//   E: 10
// }

//if(D)
// {
//   A: 6,
//   B: 1,
//   C: 6,
//   D: 0,
//   E: 4
// }
