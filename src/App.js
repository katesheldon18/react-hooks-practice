import "./App.css";
import { useState } from "react";

const App = () => {
  useState(0);

  const [count, setCount] = useState(0);

  let increase = () => {
    setCount(count + 1);
  };

  let decrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1>Kate's Counter</h1>
      <button onClick={increase}>+</button>
      <div>{count}</div>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default App;
