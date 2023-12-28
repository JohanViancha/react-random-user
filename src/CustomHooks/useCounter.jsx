import { useState } from 'react';

const useCounter = (initial) => {
  const [count, setCount] = useState(initial);
  const increment = () => {
    setCount(count + 1);
  };

  const decremennt = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return { increment, decremennt, reset, count };
};

export { useCounter };
