import UserForm from "../components/users/user.form";
import UserTable from "../components/users/user.table";
import { useEffect, useState } from "react";
import { fetchAllUserAPI } from "../services/api.service";
const UsersPage = () => {
  const [dataUsers, setDataUsers] = useState([]);
  // Empty array. it'll run once
  useEffect(() => {
    // render once
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await fetchAllUserAPI();

    setDataUsers(res.data);
  };
  return (
    <div>
      <UserForm loadUser={loadUser} />
      <UserTable dataUsers={dataUsers} loadUser={loadUser} />
    </div>
  );
};

export default UsersPage;
