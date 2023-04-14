import { CounterDisplay } from "./counterdisplay";
import React, { useState, useEffect } from 'react';

export function ClickCounter({ onCounterChange }) {
  const [clickCounter, setClickCounter] = useState({
    interval: 1000,
    increment: 1,
    count: 0,
  });

  useEffect(() => {
    let intervalId;
  
    if (clickCounter.interval) {
      intervalId = setInterval(() => {
        setClickCounter(prevCounter => ({
          ...prevCounter,
          count: prevCounter.count + prevCounter.increment
        }));
      }, clickCounter.interval);
    }
  
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [clickCounter.interval, clickCounter.increment]);
  
  useEffect(() => {
    onCounterChange(clickCounter.count);
  }, [clickCounter.count, onCounterChange]);

  function handleIncrement() {
    setClickCounter(prevCounter => ({
      ...prevCounter,
      count: prevCounter.count + prevCounter.increment
    }));
  }
  

  return (
    <div>
      <CounterDisplay count={clickCounter.count} />
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
