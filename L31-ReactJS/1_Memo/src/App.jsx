import React, { useState, memo } from "react";

const App = () => {
  const [x, setX] = useState(0);
  console.log("Running APP");

  return (
    <div>
      <h1>I am APP component</h1>
      <button onClick={() => setX(x + 1)}>update X</button>
      <MemoParent x={x} />
    </div>
  );
};

const MemoParent = memo(function Parent({ x }) {
  console.log("Running Parent");
  return (
    <div>
      <h1>I am a Parent: {x}</h1>
      <MemoChild />
    </div>
  );
});

const MemoChild = memo(function Child() {
  console.log("Running Child");
  return (
    <div>
      <h1>I am a Child</h1>
    </div>
  );
});
export default App;
