import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay: number = 500): T => {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
};
