import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import TodoAppuseRef from "./TodoAppuseRef";
import TodoAppuseState from "./TodoAppuseState";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <TodoAppuseRef /> */}
    <TodoAppuseState />
  </StrictMode>
);
