import React, { useRef } from "react";

const UseRefExample = () => {
  const inputRef = useRef();
  const paraRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    inputRef.current.className = "bg-yellow-400 p-5 rounded m-1";
    paraRef.current.innerHTML = "yaay";
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" className="input m-2 bg-base-200 " ref={inputRef} />
        <button type="submit" className="btn-outline btn ">
          submit
        </button>
      </form>
      <p ref={paraRef}></p>
    </div>
  );
};

export default UseRefExample;
