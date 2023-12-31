// pages/csr-page.js
import React, { useState } from 'react';

const CSRExamplePage = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Client-Side Rendering Example</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default CSRExamplePage;
