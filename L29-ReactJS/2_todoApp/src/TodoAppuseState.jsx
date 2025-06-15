import React from 'react'
import { useState } from 'react';

function TodoAppuseState() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  function addTodo() {
    setTodos([...todos, task]);
    setTask("");
  }

  console.log("Re-rendering Todo App");

  return (
    <div>
      <h1>Todo Application</h1>

      <input
        onChange={(ev) => {
          console.log(ev.target.value);
          setTask(ev.target.value);
        }}
        value={task}
        type="text"
        placeholder="Enter Task"
      />
      <button onClick={addTodo}>Add Task</button>

      <ul>
        {todos.map((t, i) => {
          return <li key={i}>{t}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoAppuseState
