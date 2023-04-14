import { CounterDisplay } from "./counterdisplay";
import React, { useState, useEffect } from 'react';

export function ClickCounter({onCounterChange}) {
  const [clickCounter, setClickCounter] = useState({
    interval: 1000,
    increment: 1,
    count: 0,
  });

  useEffect(() => {
    onCounterChange(clickCounter.count);
    }, [clickCounter.count, onCounterChange]);
  
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
