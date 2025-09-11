const ToDoData = () => {
  return (
    <table className="table-responsive w-50 mt-5 border border-light-subtle p-3 ">
      <thead>
        <tr>
          <th scope="col" className="p-2"></th>
          <th scope="col" className="text-end p-2"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2">ABC</td>
          <td className="text-end p-2">
            <button type="button" className="btn btn-danger">
              <i className="bi bi-pencil-square me-3"></i>
            </button>
            <button type="button" className="btn btn-warning ms-2">
              <i className="bi bi-trash"></i>
            </button>
          </td>
          <hr />
        </tr>
        <tr>
          <td className="p-2">ABC</td>
          <td className="text-end p-2">
            <button type="button" className="btn btn-danger">
              <i className="bi bi-pencil-square me-3"></i>
            </button>
            <button type="button" className="btn btn-warning ms-2">
              <i className="bi bi-trash "></i>
            </button>
          </td>
          <hr />
        </tr>
      </tbody>
    </table>
  );
};

export default ToDoData;
