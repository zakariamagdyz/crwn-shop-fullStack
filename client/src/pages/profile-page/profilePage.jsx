import React from "react";
import { ProfileContainer, ContentContainer } from "./profilePage.styles";
import Sidebar from "./components/profile-sidebar/sidebar";
import { Outlet } from "react-router-dom";

const ProfilePage = () => {
  return (
    <ProfileContainer>
      <Sidebar />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </ProfileContainer>
  );
};

export default ProfilePage;
