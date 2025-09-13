// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "../src/components/todo/styles.css";

import ToDoData from "./components/todo/ToDoData";
import TodoNew from "./components/todo/ToDoNew";

import reactLogo from "./assets/react.svg";
import { useState } from "react";
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function App() {
  const [todoList, setTodoList] = useState([]);
  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000),
      name: name,
    };
    setTodoList([...todoList, newTodo]);
  };

  const deleteTodo = (id) => {
    console.log(">>>Id: ", id);
    const todo = todoList.filter((dtodo) => dtodo.id !== id);
    setTodoList(todo);
  };
  return (
    <div className="d-flex flex-column align-items-center mt-3">
      <h1 className="text-success">To Do List</h1>
      <TodoNew addNewTodo={addNewTodo} />

      {todoList.length <= 0 ? (
        <div className="todo-logo">
          <img src={reactLogo} alt="" className="logo" />
        </div>
      ) : (
        <ToDoData todo={todoList} deleteTodo={deleteTodo} />
      )}
    </div>
  );
}

export default App;
