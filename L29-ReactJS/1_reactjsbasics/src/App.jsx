import React from "react";

function App() {

  let randomValue = Math.floor(Math.random()*10);

  console.log(randomValue);

  return <div>
    Hello World : {randomValue}
    {randomValue == 7 ? <div>JEET GAYE</div>: <div>Haar GAYE</div>}
    </div>
}

export default App;
