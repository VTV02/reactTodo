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
  const URL_Backend = "/api/v1/user";
  const data = {
    _id: _id,
    fullName: fullName,
    phone: phone
  }
  return axios.put(URL_Backend, data)
}

const handleUploadFile = (file, folder) => {
  const URL_Backend = `/api/v1/file/upload`;
  let config = {
    headers: {
      "upload-type": folder,
      "Content-type": "multipart/form-data"
    }
  }
  const bodyForm = new FormData();
  bodyForm.append("fileImg",file)

  return axios.post(URL_Backend, bodyForm, config);
}
// const fetchAllUserAPI = () => {
//   const URL_Backend = "/api/v1/user";
//   const data = {
//     avatar: avatar,
//     _id: _id,
//     fullName: fullName,
//     phone: phone,
//   };
//   return axios.put(URL_Backend, data);
// };
const updateUserAvatarAPI = (avatar,_id,fullName, phone) => {
  const URL_Backend = "/api/v1/user";
  const data = {
    
    avatar: avatar,
    _id: _id,
    fullName:fullName,
    phone: phone

  }
  return axios.put(URL_Backend, data)
}



const fetchAllUserAPI = (current, pageSize) => {
  const URL_Backend = `/api/v1/user?current=${current}&pageSize=${pageSize}`;
  return axios.get(URL_Backend);
};

const deleteUserAPI = (_id) => {
  const URL_Backend = `/api/v1/user/${_id}`;
  return axios.delete(URL_Backend);
}
export { createUserAPI, fetchAllUserAPI, updateUserAPI, deleteUserAPI, handleUploadFile,updateUserAvatarAPI};