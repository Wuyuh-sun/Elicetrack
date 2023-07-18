import React, { useState } from 'react';
type counterProps = {
  title: string,
  initValue: number
}

// @ts-ignore
function Counter({ title, initValue }: counterProps) {
  let countState = useState(initValue);
  let count = countState[0];
  let setCount = countState[1];
  return (
    <>
      <h1>{title}</h1>
      <button onClick={() => { setCount(count + 1) }}>+</button> {count}
    </>
  )
}

function App() {
  return (
    <div>
      <Counter title="카운터" initValue={0} />
      <Counter title="Counter" initValue={10} />
      <Counter title="불면증 카운터" initValue={20} />
      <Counter title={"undefined"} initValue={0} />
    </div>
  );
}

export default App;
