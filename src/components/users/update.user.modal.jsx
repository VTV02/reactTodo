import { Input, notification, Modal } from "antd";
import { updateUserAPI } from "../../services/api.service";
import { useEffect, useState } from "react";

const UpdateModalUser = (props) => {
  const [fullName, setFullName] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const { isModalUpdate, setModalUpdate, dataUpdate, setDataUpdate, loadUser } =
    props;

  useEffect(() => {
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
    const res = await updateUserAPI(id, fullName, phone);
    if (res.data) {
      notification.success({
        message: "Updated user",
        description: "Updated user successfully",
      });
    }
    resetAndCloseModal();
    await loadUser();
  };
  useEffect(() => {}, [dataUpdate]);
  return (
    <Modal
      title="Edit A User"
      closable={{ "aria-label": "Custom Close Button" }}
      open={isModalUpdate}
      onOk={() => {
        handleSubmit();
        setDataUpdate();
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
            value={phone}
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
