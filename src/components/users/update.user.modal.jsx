import { Input, notification, Modal } from "antd";
import { createUserAPI } from "../../services/api.service";
import { useEffect, useState } from "react";

const UpdateModalUser = (props) => {
  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const { isModalUpdate, setModalUpdate, dataUpdate, setDataUpdate } = props;
  useEffect(() => {
    console.log(">>>Check dataUpdate: ", dataUpdate);
    if (dataUpdate) {
      setId(dataUpdate._id);
      setFullName(dataUpdate.fullName);
      setPhone(dataUpdate.phone);
    }
  }, [dataUpdate]);
  const resetAndCloseModal = () => {
    setModalUpdate(false);
    setId("");
    setFullName("");
    setPhone("");
  };
  const handleSubmit = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
    if (res.data) {
      notification.success({
        message: "Created user",
        description: "Created user successfully",
      });
    }
    await loadUser();
    resetAndCloseModal();
  };
  useEffect(() => {}, [dataUpdate]);

  return (
    <Modal
      title="Edit A User"
      closable={{ "aria-label": "Custom Close Button" }}
      open={isModalUpdate}
      onOk={() => {
        handleSubmit();

        setModalUpdate(false);
      }}
      onCancel={() => {
        setModalUpdate(false);
      }}
      maskClosable={false}
      okText="Update">
      <div>
        <div>
          <span>Id</span>
          <Input value={id} disabled={true} />
        </div>
        <div>
          <span>Full Name</span>
          <Input
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Phone number</span>
          <Input
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default UpdateModalUser;
