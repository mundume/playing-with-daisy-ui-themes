import React, { useState, useCallback } from "react";

const UseCallBackExample = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    setTasks((prev) => [...prev, "some shit"]);
  }, [setTasks]);
  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((i, index) => (
        <li key={index}>{i}</li>
      ))}
    </div>
  );
};

const Button = React.memo(({ addTask }) => {
  console.log("Button Rendered");
  return (
    <div>
      <button onClick={addTask} className="btn-primary btn">
        Add
      </button>
    </div>
  );
});

export default UseCallBackExample;
