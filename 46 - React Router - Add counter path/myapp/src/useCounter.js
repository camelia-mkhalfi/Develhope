import { useState, useCallback } from 'react';

function useCounter(initialValue = 25, incrementBy = 1) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount(count => count + incrementBy);
  }, [incrementBy]);

  const decrement = useCallback(() => {
    setCount(count => count - incrementBy);
  }, [incrementBy]);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return { count, increment, decrement, reset };
}

export default useCounter;
