import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);

  const sayHello = () => {
    console.log("Hello! Static message here.");
  };

  const handleIncrement = () => {
    sayHello();
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
