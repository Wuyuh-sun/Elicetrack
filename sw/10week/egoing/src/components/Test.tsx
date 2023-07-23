import React, { useEffect, useState } from 'react';

const Test = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {

  }, [index])
  return (
    <div>
      {/* Your component code here */}
      <input type="number" value={index} onChange={(e) => { setIndex(e.target.value as any) }} />
    </div>
  );
};

export default Test;