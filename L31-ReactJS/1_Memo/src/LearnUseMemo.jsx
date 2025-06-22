import React, { useMemo, useState } from "react";

const LearnUseMemo = () => {
  const [ans, setAns] = useState(1);
  const [random, setRandom] = useState(true);
  const [x, setX] = useState(100);

  console.log("Running LearnUse Memo");

  useMemo(() => {
    console.log("Running Factorial Code");

    let value = 1;
    for (let i = 1; i <= x; i++) {
      value *= i;
    }
    setAns(value);
  }, [x]);

  return (
    <div>
      Factorial of : {x} <br></br>
      Ans of Factorial: {ans}
      <br />
      <button onClick={() => setRandom(Math.ceil(Math.random() * 1000))}>
        Update Random
      </button>
      <button onClick={() => setX(x + 1)}>Update X</button>
    </div>
  );
};

export default LearnUseMemo;
