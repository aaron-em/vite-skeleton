import * as React from "react";

export function useCounter(initialValue?: number) {
  const [count, setCount] = React.useState(initialValue ?? 0);

  return Object.freeze({
    value: () => count,
    increment: () => {
      setCount(count + 1);
      return count;
    },
    decrement: () => {
      setCount(count - 1);
      return count;
    },
  });
}
