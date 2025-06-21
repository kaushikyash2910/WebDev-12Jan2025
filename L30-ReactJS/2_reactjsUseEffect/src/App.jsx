import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState([]);

  console.log("Running APP");
  useEffect(() => {
    async function fetchTodos() {
      const { data } = await axios.get("https://dummyjson.com/todos");
      console.log(data);
      setTodos(data.todos);
    }

    fetchTodos();
  }, []);

  return (
    <div>
      {todos.map((t, indx) => {
        return (
          <li key={indx}>
            {t.todo} - {t.completed.toString()}
          </li>
        );
      })}
    </div>
  );
};

export default App;
