import axios from "./axios.customize";

const createUserAPI = (fullName, email, password, phone) => {
  const URL_Backend = "/api/v1/user";
  const data = {
    fullName: fullName,
    email: email,
    password: password,
    phone: phone,
  };
  return axios.post(URL_Backend, data);
};
const updateUserAPI = (_id, fullName, phone) => {
  const URL_Backend = "/api/v1/user"
  const data = {
    _id: _id,
    fullName: fullName,
    phone: phone
  }
  return axios.put(URL_Backend, data)
}
const fetchAllUserAPI = () => {
  const URL_Backend = "/api/v1/user";
  return axios.get(URL_Backend);
};

const deleteUserAPI = (_id) => {
  const URL_Backend = `/api/v1/user/${_id}`;
  return axios.delete(URL_Backend);
}
export { createUserAPI, fetchAllUserAPI, updateUserAPI, deleteUserAPI};
