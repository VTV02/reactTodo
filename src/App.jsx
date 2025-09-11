// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import ToDoData from "./components/todo/ToDoData";
import TodoNew from "./components/todo/ToDoNew";

import reactLogo from "./assets/react.svg";

function App() {
  const name = "Lucifer";
  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h1 className="text-success">ToDo List</h1>
      <TodoNew name={name} />
      <ToDoData />
      <button type="button" className="btn btn-outline-danger mt-3">
        Delete All
      </button>
      {/* <div className="todo-img">
        <img src={reactLogo} alt="" />
      </div> */}
    </div>
  );
}

export default App;
