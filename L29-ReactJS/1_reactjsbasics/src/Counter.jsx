import React, { useState } from "react";
/*
const Counter = () => {
  let counter = 0;

  function updateCounter() {
    counter++;
    console.log(counter);
  }

  return (
    <div>
      {counter}

      <button onClick={updateCounter}>Update Counter</button>
    </div>
  );
};
*/

function Counter() {
  const [counter, setCounter] = useState(0);

  function updateCounter() {
    // counter = counter+1; // Illegal
    setCounter(counter + 1);
    
    console.log("Counter" ,counter);
  }

  return (
    <div>
      {counter}

      <button onClick={updateCounter}>Update Counter</button>
    </div>
  );
}
export default Counter;
