import { Drawer, Button, notification } from "antd";
import { useState } from "react";
import {
  handleUploadFile,
  updateUserAvatarAPI,
} from "../../services/api.service";

const ViewUserDetail = (props) => {
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

  const handleUpdateUserAvatar = async () => {
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
        setIsDetailOpen(false);
        setSelectedFile(null);
        setPreview(null);
        await loadUser();
        notification.success({
          message: "Updated avatar",
          description: "Updated avatar successfully",
        });
      } else {
        notification.error({
          message: "Error upload file",
          description: JSON.stringify(resUpdateAvatar.message),
        });
      }
    } else {
      notification.error({
        message: "Error upload file",
        description: JSON.stringify(resUpload.message),
      });
    }
  };

  return (
    <Drawer
      width={"40vw"}
      title="User Detail"
      onClose={() => {
        setDataDetail(null);
        setIsDetailOpen(false);
      }}
      open={isDetailOpen}>
      {dataDetail ? (
        <>
          <p>
            <strong>Id:</strong> {dataDetail._id}
          </p>
          <p>
            <strong>Full name:</strong> {dataDetail.fullName}
          </p>
          <p>
            <strong>Email:</strong> {dataDetail.email}
          </p>
          <p>
            <strong>Phone:</strong> {dataDetail.phone}
          </p>

          <p>
            <strong>Avatar:</strong>
          </p>
          <div
            style={{
              marginTop: "10px",
              height: "120px",
              width: "120px",
              border: "2px dashed #00bfff",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f9f9f9",
              overflow: "hidden",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}>
            <img
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
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
              onChange={handleOnChangeFile}
            />
          </div>

          {preview && (
            <>
              <div
                style={{
                  marginTop: "10px",
                  height: "120px",
                  width: "120px",
                  border: "2px dashed #00bfff",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f9f9f9",
                  overflow: "hidden",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}>
                <img
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                  src={preview}
                  alt=""
                />
              </div>
              <div className="mt-3">
                <Button type="primary" onClick={handleUpdateUserAvatar}>
                  Save
                </Button>
              </div>
            </>
          )}
        </>
      ) : (
        <p>No data</p>
      )}
    </Drawer>
  );
};

export default ViewUserDetail;
