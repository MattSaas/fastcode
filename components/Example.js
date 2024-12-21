"use client";

import { useState } from "react";

const Example = () => {
  let [counter, SetCounter] = useState(0);

  const increamentCounter = () => {
    SetCounter(counter + 1);
  };

  const dcreamentCounter = () => {
    if (counter !== 1) {
      SetCounter(counter - 1);
    }
  };

  return (
    <div className="flex gap-2 items-center">
      <button className="btn btn-primiry" onClick={dcreamentCounter}>
        Prev
      </button>
      <span className="text-2xl m-10">{counter}</span>
      <button className="btn btn-secondary" onClick={increamentCounter}>
        Next
      </button>
    </div>
  );
};

export default Example;
