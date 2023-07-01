import { useReducer } from "react";
const inicialSate = { value: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { value: state.value + 1 };
    case "decrement":
      return { value: state.value - 1 };

    default:
      throw new Error("acão inválida");
  }
};

const IncDec = () => {
  const [state, dispatch] = useReducer(reducer, inicialSate);

  return (
    <>
      <p>{state.value}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}> - </button>
    </>
  );
};

export default IncDec;
