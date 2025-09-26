import UserForm from "../components/users/user.form";
import UserTable from "../components/users/user.table";
import ViewUserDetail from "../components/users/view.user.detail";

import { useEffect, useState } from "react";
import { fetchAllUserAPI } from "../services/api.service";

const UsersPage = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  // Empty array. it'll run once
  useEffect(() => {
    // render once
    loadUser();
  }, [current]);
  const loadUser = async () => {
    const res = await fetchAllUserAPI(current, pageSize);
    if (res.data) {
      setDataUsers(res.data.result);
      setCurrent(res.data.meta.current);
      setPageSize(res.data.meta.pageSize);
      setTotal(res.data.meta.total);
    }
  };
  return (
    <div>
      <UserForm loadUser={loadUser} />
      <UserTable
        dataUsers={dataUsers}
        loadUser={loadUser}
        current={current}
        setDataUsers={setDataUsers}
        pageSize={pageSize}
        setPageSize={setPageSize}
        total={total}
        setTotal={setTotal}
      />
      <ViewUserDetail dataUsers={dataUsers} loadUser={loadUser} />
    </div>
  );
};

export default UsersPage;
