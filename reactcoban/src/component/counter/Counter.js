import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setTimeout(function delay() {
      //   setCount(count + 1);  stale state
      setCount((prevState) => prevState + 1);
    }, 1000);
  };
  return (
    <div>
      <div> increment {count}</div>
      <button className="btn" onClick={handleCount}>
        Click
      </button>
    </div>
  );
};

export default Counter;
