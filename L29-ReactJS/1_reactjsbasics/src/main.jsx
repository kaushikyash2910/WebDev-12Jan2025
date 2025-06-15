import { createRoot } from "react-dom/client";
import App from "./App";
import Loop from "./Loop";
import Counter from "./Counter";

createRoot(document.getElementById("root")).render(
  // <Loop />
  <Counter />
  // App()
  // <App> </App>
);
