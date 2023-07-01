import { useContext } from "react";
import Count from "./Count";
import Counter from "./Counter";
import IncDec from "./Reducer";
import "./styles.css";
import { UserContext } from "./useContext";
import UseRef from "./useRef";
import { MyContextAPi } from "./ContextApi";
import { CounterCustomHook, FetchCustomHook } from "./hookCustomizado";
export default function App() {
  const { name, idade } = useContext(UserContext);
  const { setMyContext } = useContext(MyContextAPi);

  return (
    <div className="App">
      <h1>React State Management</h1>
      <Count />
      <Counter />
      <IncDec />
      <p>nome: {name}</p>
      <p>age: {idade}</p>
      <UseRef />
      <button onClick={() => setMyContext("new value of my context")}>
        clik
      </button>
      <br></br>
      <br></br>
      <br></br>
      <CounterCustomHook />
      <FetchCustomHook />
    </div>
  );
}
