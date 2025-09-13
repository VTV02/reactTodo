const ToDoData = (props) => {
  const { todo, deleteTodo } = props;
  const deleteHandle = (id) => {
    deleteTodo(id);
  };
  return (
    <table className="table w-50 mt-5">
      <thead></thead>
      <tbody>
        {todo.map((items, index) => {
          return (
            <tr className="align-middle border-bottom">
              <td className="p-2">{items.name}</td>
              <td className="text-end p-2">
                <button type="button" className="btn btn-warning me-2">
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteHandle(items.id)}>
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ToDoData;
