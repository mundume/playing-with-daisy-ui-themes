import React, { useMemo, useState, useEffect, useRef } from "react";

const UseMemoExample = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const sqrt = useMemo(() => getSqrt(number), [number]);
  const renderRef = useRef(1);
  useEffect(() => {
    renderRef.current = renderRef.current + 1;
  });

  const onClick = () => {
    setInc((prev) => {
      console.log(prev + 1);
      return prev + 1;
    });
  };
  return (
    <div>
      <input
        type="number"
        placeholder="yolla"
        className="input"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h1 className="my-2">
        the sqrt of {number} is {sqrt}
      </h1>
      <button className="btn-primary btn" onClick={onClick}>
        Rerender{" "}
      </button>
      <p> Renders {renderRef.current}</p>
    </div>
  );
};

const getSqrt = (number) => {
  for (let i = 0; i <= 10000; i++) {
    console.log(i);
  }
  console.log("Expensive Function Called  ");
  return Math.sqrt(number);
};

export default UseMemoExample;
