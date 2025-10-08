import ToDoData from "./ToDoData";
import TodoNew from "./ToDoNew";

import reactOrange from "../../assets/react_orange.png";
import { useState } from "react";

const TodoApp = () => {
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const [todoList, setTodoList] = useState([]);
  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000),
      name: name,
    };
    setTodoList([...todoList, newTodo]);
  };

  const deleteTodo = (id) => {
    const todo = todoList.filter((dtodo) => dtodo.id !== id);
    setTodoList(todo);
  };

  return (
    <div className="d-flex flex-column align-items-center mt-3">
      <h1 className="text-warning">To Do List</h1>
      <TodoNew addNewTodo={addNewTodo} />

      {todoList.length <= 0 ? (
        <div className="todo-logo">
          <img src={reactOrange} alt="" className="logo" />
        </div>
      ) : (
        <ToDoData todo={todoList} deleteTodo={deleteTodo} />
      )}
    </div>
  );
};

export default TodoApp;
