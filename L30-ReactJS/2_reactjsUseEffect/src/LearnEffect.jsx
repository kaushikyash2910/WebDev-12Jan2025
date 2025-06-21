import React, { useEffect, useState } from "react";

const LearnEffect = () => {
  const [cnt, setCnt] = useState(0);
  const [random, setRandom] = useState(100);
  console.log("Running Learing");

  useEffect(() => {
    console.log("Running UseEffect");
  }, [cnt]);

  function updateCnt() {
    setCnt(cnt + 1);
  }

  function updateRandom() {
    setRandom(Math.ceil(Math.random() * 100));
  }
  return (
    <div>
      Cnt: {cnt}
      <br />
      Random : {random}
      <button onClick={updateCnt}>Update Cnt</button>
      <button onClick={updateRandom}>Update Random</button>
    </div>
  );
};

export default LearnEffect;
