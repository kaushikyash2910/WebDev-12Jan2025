import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import rootReducer from "./reducers/Reducer.js";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer);
store.subscribe(() => store.getState());

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
