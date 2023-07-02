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
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.verses.length) {
          setData(data);
        }
        //   setIsLoading(false);
        setTimeout(() => setIsLoading(false), 1000);
      });
  }, []);
  return {
    isLoading,
    data,
  };
};

export const FetchCustomHook = () => {
  const API = "https://bible-api.com/";
  const { book_name, chapter, verse } = {
    book_name: "jorhn",
    chapter: 8,
    verse: 1,
  };
  const URL = `${API}${book_name}+${chapter}:${verse}`;
  const { isLoading, data } = useFetch(URL);
  const { reference, verses } = data;

  return isLoading ? (
    <p>loading...</p>
  ) : (
    <div>
      <h1>Bible Api</h1>
      <h2>reference: {reference}</h2>
      {verses.map((book) => {
        return (
          <p>
            {book.verse}: {book.text}
          </p>
        );
      })}
    </div>
  );
};
