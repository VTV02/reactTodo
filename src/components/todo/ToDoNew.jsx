import { useState } from "react";

const TodoNew = (props) => {
  const [inputValue, setInputValue] = useState("Lucifer");
  const { addNewTodo } = props;

  const clickHandle = () => {
    addNewTodo(inputValue);
    setInputValue("");
  };

  const inputHandle = (name) => {
    setInputValue(name);
  };

  return (
    <div className="d-flex w-50 mt-3">
      <input
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Add your tasks"
        onChange={(event) => inputHandle(event.target.value)}
      />
      <button
        type="button"
        className="btn btn-outline-primary ms-3"
        style={{ cursor: "pointer" }}
        onClick={clickHandle}>
        Add
      </button>
      <div className="ms-2 text-warning">
        <strong>My text input is: {inputValue}</strong>
      </div>
    </div>
  );
};

export default TodoNew;
