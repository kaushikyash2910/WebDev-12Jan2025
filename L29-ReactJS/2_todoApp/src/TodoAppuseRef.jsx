import React from "react";
import { useRef } from "react";
import { useState } from "react";

const TodoAppuseRef = () => {
  const [todos, setTodos] = useState([]);
  const inpRef = useRef();
  
  function addTodo() {
    // console.log(document.getElementById('taskName').value)
    console.log(inpRef.current.value)
    setTodos([...todos, inpRef.current.value]);
    inpRef.current.value = "";
  }

  return (
    <div>
      <h1>Todo Application</h1>

      <input ref={inpRef} id="taskName" type="text" placeholder="Enter Task" />
      <button onClick={addTodo}>Add Task</button>

      <ul>
        {todos.map((t, i) => {
          return <li key={i}>{t}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoAppuseRef;
