import { useEffect, useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);
  return {
    counter,
    handleIncrement: () => setCounter(counter + 1),
    handleDecrement: () => setCounter(counter - 1),
  };
};

export const CounterCustomHook = () => {
  const { counter, handleIncrement, handleDecrement } = useCounter();
  return (
    <div>
      <h1>Hook customizado</h1>
      <h2>counter</h2>
      <span>{counter}</span>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
};

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setData(data);
          setTimeout(() => setIsLoading(false), 1000);
          //   setIsLoading(false);
        }
      });
  }, []);
  return {
    isLoading,
    data,
  };
};

export const FetchCustomHook = () => {
  const { isLoading, data } = useFetch("https://bible-api.com/John+3:17");

  return isLoading ? (
    <p>loading...</p>
  ) : (
    <>
      <h1>fetch</h1>
      <h2>{data.reference}</h2>
      <p>{data.text}</p>
    </>
  );
};
