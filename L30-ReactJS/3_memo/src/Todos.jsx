import React from "react";
import { useRef } from "react";
import { useState } from "react";

function TodoDisplay({ todos }) {
  return (
    <div>
      <h1>Todos List</h1>
      {todos.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </div>
  );
}

const Todos = () => {
  const [todos, setTodos] = useState([]);
  function addTodo(task) {
    // console.log("You are about to add", task, "Inside todos state");
    setTodos([...todos, task]);
  }

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <TodoDisplay todos={todos} />
    </div>
  );
};

function TodoInput({ addTodo }) {
  const inpRef = useRef();
  function addTodoHandler() {
    // console.log(inpRef.current.value);

    addTodo(inpRef.current.value);
  }
  return (
    <div>
      <input id="inp" ref={inpRef} type="text" placeholder="Enter Task" />
      <button onClick={addTodoHandler}>Add Todo</button>
    </div>
  );
}

export default Todos;
