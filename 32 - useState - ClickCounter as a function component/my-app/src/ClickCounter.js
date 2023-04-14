import { CounterDisplay } from "./counterdisplay";
import React, { useState } from 'react';

export function ClickCounter() {
  const [clickCounter, setClickCounter] = useState({
    interval: 1000,
    increment: 1,
    count: 0,
  });

  function handleIncrement() {
    setClickCounter({ ...clickCounter, count: clickCounter.count + clickCounter.increment });
  };

  return (
    <div>
      <CounterDisplay count={clickCounter.count} />
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
