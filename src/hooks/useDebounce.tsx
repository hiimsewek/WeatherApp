import { useEffect, useState } from "react";

const useDebounce = <T,>(value: T, timeout: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [value, timeout]);

  return debouncedValue;
};

export default useDebounce;
