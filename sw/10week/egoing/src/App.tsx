import { Button, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import Test from './components/Test';
type counterProps = {
  title: string,
  initValue: number
}

// @ts-ignore
function Counter({ title, initValue }: counterProps) {
  // let countState = useState(initValue);
  // let count = countState[0];
  // let setCount = countState[1];
  const [count, setCount] = useState(initValue);
  return (
    <div style={{
      border: "10px solid black",
      fontSize: "20px",
      padding: 10
    }}>
      <h1>{title}</h1>
      <Button variant='contained' onClick={() => { setCount(count + 1) }}>+</Button> {count}
    </div>
  )
}

function App() {
  return (
    <>

      <Container maxWidth="md">
        <Grid container spacing={1}>
          <Grid item xs={24} sm={6} md={4}>
            <Counter title="카운터" initValue={0} />
          </Grid>
          <Grid item xs={24} sm={6} md={4}>
            <Counter title="Counter" initValue={10} />
          </Grid>
          <Grid item xs={24} sm={6} md={4}>
            <Counter title="불면증 카운터" initValue={20} />
          </Grid>
          <Grid item xs={24} sm={6} md={4}>
            <Counter title={"undefined"} initValue={0} />
          </Grid>
        </Grid>
      </Container>
      <Test />
    </>

  );
}

export default App;
