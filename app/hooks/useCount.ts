import { useState } from "react";

const useCount = () => {
  const [count, setCount] = useState<number>(1);

  const prevCount = () => {
    if (count >= 1) {
      setCount(prev => prev - 1);
    }
  }

  const nextCount = () => {
    setCount(prev => prev + 1);
  }

  return { prevCount, nextCount, count }
}

export { useCount };