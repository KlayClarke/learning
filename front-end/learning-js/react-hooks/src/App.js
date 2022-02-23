import { Component, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button type="button" onClick={incrementCount}>
        ++
      </button>
    </div>
  );
};

export default App;
