import { Drawer, Button, notification } from "antd";
import { useState } from "react";
import {
  handleUploadFile,
  updateUserAvatarAPI,
} from "../../services/api.service";

const ViewUserDetail = (props) => {
  // nhận props từ thằng cha của nó
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen, loadUser } =
    props;
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const handleOnChangeFile = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(null);
      return;
    }
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleUploadUserAvatar = async () => {
    // step 1: upload file
    const resUpload = await handleUploadFile(selectedFile, "avatar");
    if (resUpload.data) {
      const newAvatar = resUpload.data.fileUploaded;

      const resUpdateAvatar = await updateUserAvatarAPI(
        newAvatar,
        dataDetail._id,
        dataDetail.fullName,
        dataDetail.phone
      );
      if (resUpdateAvatar.data) {
        setDataDetail(false);
        setSelectedFile(null);
        setPreview(null);
        await loadUser();
        notification.success({
          message: "Uploaded file",
          description: "Uploaded file successfully",
        });
      } else {
        notification.error({
          message: "Upload file fail",
          description: JSON.stringify(resUpdateAvatar.message),
        });
      }
    } else {
      notification.error({
        message: "Upload file fail",
        description: JSON.stringify(resUpload.message),
      });
    }
    // step 2: upload user
  };
  console.log("Check preview: ", preview);
  return (
    <>
      <Drawer
        width={"40vw"}
        title="User Detail"
        closable={{ "aria-label": "Close Button" }}
        onClose={() => {
          // khi nó đóng thì thực hiện set data detail null
          setDataDetail(null);
          // detail open false
          setIsDetailOpen(false);
        }}
        open={isDetailOpen}>
        {dataDetail ? (
          <>
            <p>
              <strong>Id:</strong> {dataDetail._id}
            </p>
            <br />
            <p>
              <strong>Full name:</strong> {dataDetail.fullName}
            </p>
            <br />
            <p>
              <strong>Email:</strong> {dataDetail.email}
            </p>
            <br />
            <p>
              <strong>Phone:</strong> {dataDetail.phone}
            </p>
            <br />
            <p>
              <strong>Avatar:</strong>
            </p>
            <div
              style={{
                marginTop: "10px",
                height: "120px",
                width: "120px",
                border: "2px dashed #00bfff", // viền xanh da trời
                borderRadius: "12px", // bo góc
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f9f9f9", // nền sáng
                overflow: "hidden",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)", // bóng nhẹ
              }}>
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
                src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
                  dataDetail.avatar
                }`}
                alt=""
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="inputForm"
                style={{
                  display: "inline-block",
                  padding: "10px 18px",
                  backgroundColor: "#00bfff",
                  color: "white",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#1e90ff")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#00bfff")
                }>
                Đổi ảnh đẹp hơn
              </label>
              <input
                type="file"
                hidden
                id="inputForm"
                onChange={(event) => handleOnChangeFile(event)}
              />
            </div>
            {preview && (
              <div
                style={{
                  marginTop: "10px",
                  height: "120px",
                  width: "120px",
                  border: "2px dashed #00bfff", // viền xanh da trời
                  borderRadius: "12px", // bo góc
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f9f9f9", // nền sáng
                  overflow: "hidden",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)", // bóng nhẹ
                }}>
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src={preview}
                  alt=""
                />
              </div>
            )}
          </>
        ) : (
          <>
            <p>No data</p>
          </>
        )}

        {preview && (
          <>
            <div
              style={{
                marginTop: "10px",
                height: "120px",
                width: "120px",
                border: "2px dashed #00bfff", // viền xanh da trời
                borderRadius: "12px", // bo góc
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f9f9f9", // nền sáng
                overflow: "hidden",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)", // bóng nhẹ
              }}>
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
                src={preview}
                alt=""
              />
            </div>
            <div className="mt-3">
              <Button type="primary" onClick={() => handleUploadUserAvatar()}>
                Save
              </Button>
            </div>
          </>
        )}
      </Drawer>
    </>
  );
};

export default ViewUserDetail;
