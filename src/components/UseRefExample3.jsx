import React from "react";
import Todo from "./Todo";
import { useState } from "react";

const UseRefExample3 = () => {
  const [showTodo, setShowTodo] = useState(true);
  return (
    <div>
      <div>{showTodo && <Todo />}</div>
      <button
        className="btn-outline btn"
        onClick={() => setShowTodo(!showTodo)}
      >
        Toggle Todo
      </button>
    </div>
  );
};

export default UseRefExample3;
