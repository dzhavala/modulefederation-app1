import React, { useState } from "react";
import './CounterAppOne.css';

type Count = number

const Counter = () => {
  const [count, setCount] = useState<Count>(0);

  return (
    <div className='CounterAppOne'>
      <p>Your click count : {count} </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Counter;
