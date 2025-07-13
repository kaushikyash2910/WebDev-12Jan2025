import React, { createContext } from "react";
import Father from "./Father";
const context = createContext();

const GrandFather = () => {
  let data = "Some Random Data";

  return (
    <context.Provider value={data}>
      <div>
        
        <Father />
      </div>
    </context.Provider>
  );
};

export default GrandFather;
export { context };
