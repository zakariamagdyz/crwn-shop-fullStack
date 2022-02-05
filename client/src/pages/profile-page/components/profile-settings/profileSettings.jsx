import React from "react";
import { SettingsContainer, Header } from "./profileSettings.styles";
import SettingForm from "../setting-form/SettingForm";
import ChangePassForm from "../changePass-form/ChangePassForm";

const ProfileSettings = () => {
  return (
    <SettingsContainer>
      <Header>Your Profile Settings</Header>
      <SettingForm />
      <hr />
      <Header>Password change</Header>
      <ChangePassForm />
    </SettingsContainer>
  );
};

export default ProfileSettings;
