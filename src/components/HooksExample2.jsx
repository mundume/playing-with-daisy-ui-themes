import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const HooksExample2 = () => {
  const [task, setTask] = useLocalStorage("task", "");
  return (
    <form>
      <div className="m-3">
        <label htmlFor="name">Task</label>
        <input
          type="text"
          name=""
          id=""
          className="input mb-10 border-2 border-purple-600"
          placeholder="freshi barida"
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
    </form>
  );
};

export default HooksExample2;
