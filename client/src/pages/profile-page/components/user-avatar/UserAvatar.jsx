import React, { useRef } from "react";
import {
  UserAvatarContainer,
  ImgContainer,
  Img,
  Button,
} from "./userAvatar.styles";
import { connect } from "react-redux";
import { updateAvatar } from "../../../../redux/auth/authAsyncActions";

const url =
  process.env.NODE_ENV !== "production"
    ? process.env.REACT_APP_API_URL_DEV
    : process.env.REACT_APP_API_URL_PROD;

/////////////////////////////////
const UserAvatar = ({ user: { photo, name }, setPhoto }) => {
  const avatarInput = useRef();

  const openFileWindow = () => {
    avatarInput.current.click();
  };

  const handleFileUpload = (e) => {
    setPhoto({ body: e.target.files[0] });
  };
  return (
    <UserAvatarContainer>
      <ImgContainer>
        <Img src={`${url}/img/users/${photo}`} alt={name} />
      </ImgContainer>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={avatarInput}
        onChange={handleFileUpload}
      />
      <Button type="button" onClick={openFileWindow}>
        Choose a new photo
      </Button>
    </UserAvatarContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setPhoto: (file) => dispatch(updateAvatar(file)),
});

export default connect(null, mapDispatchToProps)(UserAvatar);
