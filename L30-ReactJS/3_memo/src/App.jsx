import React from "react";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState("I am some data");

  return (
    <div>
      <Parent data={data} greet="Hello" />
    </div>
  );
};

function Parent(props) {
  // console.log(props.data);
  // console.log(props.greet);
  return (
    <div>
      I am a parent:
      <Child data={props.data} greet={props.greet} />
    </div>
  );
}

function Child({ data, greet }) {
  return (
    <div>
      I am a Child: {data} {greet}
      {/* <button
        onClick={() => {
          greet = "I am updated Hello";
        }}
      >
        Update Greet
      </button> */}
    </div>
  );
}

export default App;
