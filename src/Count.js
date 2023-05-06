import { useEffect, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <>
      <p>{count}</p>
      <button
        style={{
          cursor: "pointer",
        }}
        onClick={handleCount}
      >
        +
      </button>
    </>
  );
};

export default Count;
