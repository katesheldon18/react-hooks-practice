import "./App.css";
import { useState } from "react";

const App = () => {
  //Practising useState to make a Counter and a Color Picker:

  useState(0);

  const [count, setCount] = useState(0);
  const [color, changeColor] = useState("black");

  let increase = () => {
    setCount(count + 1);
  };

  let decrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <div className="component-container">
        <h1>Kate's Counter</h1>
        <button onClick={increase}>+</button>
        <div>{count}</div>
        <button onClick={decrease}>-</button>
      </div>

      <div className="component-container">
        <h1 style={{ color }}>Kate's Color Picker</h1>
        <button onClick={() => changeColor("green")}>Green</button>
        <button onClick={() => changeColor("red")}>Red</button>
        <button onClick={() => changeColor("blue")}>Blue</button>
      </div>
    </div>
  );
};

export default App;
