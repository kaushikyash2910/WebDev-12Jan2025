import React from "react";

const App = () => {
  let cnt = 0;

  function updateCnt() {
    cnt++;
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

export default App;
