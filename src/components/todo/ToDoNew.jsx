const TodoNew = (props) => {
  return (
    <div className="d-flex w-50 mt-3">
      <input
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Add your tasks"
      />
      <button type="button" className="btn btn-outline-primary ms-3">
        {props.name}
      </button>
    </div>
  );
};

export default TodoNew;
