import React, { createContext } from "react";
import Father from "./Father";
const context = createContext();
const todoContext = createContext();

const GrandFather = () => {
  let data = "Some Random Data";
  let todosData = ["Cricket", "Dance"];

  return (
    <todoContext.Provider value={todosData}>
      <context.Provider value={data}>
        <div>
          <Father />
        </div>
      </context.Provider>
    </todoContext.Provider>
  );
};

export default GrandFather;
export { context, todoContext };
