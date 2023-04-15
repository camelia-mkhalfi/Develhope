import { CounterDisplay } from "./counterdisplay";
import React, { useState } from 'react';

export function UseCounter() {
  const [clickCounter, setClickCounter] = useState({
    interval: 1000,
    increment: 1,
    count: 26,
  });

  function handleIncrement() {
    setClickCounter({ ...clickCounter, count: clickCounter.count + clickCounter.increment });
  };

  function handleDecrement() {
    setClickCounter({ ...clickCounter, count: clickCounter.count - clickCounter.increment });
  };

  function handleReset() {
    setClickCounter({ interval: 1000, increment: 1, count: 26 });
  }

  return (
    <div>
      <CounterDisplay count={clickCounter.count} />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
