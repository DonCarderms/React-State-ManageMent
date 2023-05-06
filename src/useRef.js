import React, { useRef } from "react";
import { MyContextAPi } from "./ContextApi";
import { useContext } from "react";

const UseRef = () => {
  const { state } = useContext(MyContextAPi);

  const inputRef = useRef(null);
  const videRef = useRef(null);

  return (
    <div>
      <input onClick={(e) => console.log(e)} type="text" ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      <br />
      <br />
      <div>
        <p>{state}</p>
        <video onClick={() => videRef.current.play()} ref={videRef}>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" />
        </video>
      </div>
    </div>
  );
};
export default UseRef;
