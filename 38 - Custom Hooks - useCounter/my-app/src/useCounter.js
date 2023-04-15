import { useState } from 'react';

function useCounter(initialValue = 25, incrementBy = 1) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount(count + incrementBy);
  }

  function decrement() {
    setCount(count - incrementBy);
  }

  function reset() {
    setCount(initialValue);
  }

  return { count, increment, decrement, reset };
}

export default useCounter;
