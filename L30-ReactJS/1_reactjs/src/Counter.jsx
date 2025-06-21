import React, { useState } from "react";

const Counter = () => {
  const [cnt, setCnt] = useState(0);

  function updateCnt() {
    setCnt(cnt + 1); // cnt is immutable
    console.log(cnt);
  }

  console.log("Running APP");

  return (
    <div>
      {cnt}

      <button onClick={updateCnt}>Update Cnt</button>
    </div>
  );
};

export default Counter;
