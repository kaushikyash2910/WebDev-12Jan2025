import React, { memo, useCallback, useState } from "react";

const LearnuseCallback = () => {
  const [x, setX] = useState(0);
  console.log("Running LearnCallback");
  const hello = useCallback(
    () =>
      function hello() {
        console.log("Hello World");
      },
    []
  );
  return (
    <div>
      {x}: <button onClick={() => setX(x + 1)}>Update X</button>
      <MemoChild hello={hello} />
    </div>
  );
};

const MemoChild = memo(function Child({ hello }) {
  console.log("Running Child");

  hello();

  return <div>i am child</div>;
});

export default LearnuseCallback;
