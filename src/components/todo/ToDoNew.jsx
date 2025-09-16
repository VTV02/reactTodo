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
    <div className="d-flex w-50 mt-3 ">
      <input
        type="text"
        className="form-control custom-input"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Add your tasks"
        onChange={(event) => inputHandle(event.target.value)}
      />
      <button
        type="button"
        className="btn btn-outline-warning ms-3"
        style={{ cursor: "pointer" }}
        onClick={clickHandle}>
        Add
      </button>
    </div>
  );
};

export default TodoNew;
