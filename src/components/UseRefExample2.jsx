import React, { useEffect, useRef, useState } from "react";

const UseRefExample2 = () => {
  const [name, setName] = useState("");

  const renders = useRef(1);
  const prevName = useRef("");
  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);

  return (
    <div className="py-4">
      <h1 className="p-2">Renders : {renders.current}</h1>
      <label htmlFor="name" className="p-2">
        Name
      </label>
      <input
        type="text"
        className="input bg-base-200"
        placeholder="hey there "
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{prevName.current}</p>
    </div>
  );
};

export default UseRefExample2;
