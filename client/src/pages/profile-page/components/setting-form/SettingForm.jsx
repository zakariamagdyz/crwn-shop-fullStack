import React from "react";
import { StyledForm } from "../../profilePage.styles";
import CustomInput from "../../../../components/input-box/CustomInput";
import SecondaryButton from "../../../../components/secondaryButton/SecondaryButton";
import { connect } from "react-redux";
import { updateUser } from "../../../../redux/auth/authAsyncActions";
import { Formik } from "formik";
import * as Yup from "yup";
import UserAvatar from "../user-avatar/UserAvatar";

const SettingForm = ({ user, updateUser }) => {
  const initialValues = {
    name: user?.name || "",
    email: user?.email || "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().max(50),
    email: Yup.string().max(50).email(),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    await updateUser(values);
    setSubmitting(false);
  };

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      initialValues={initialValues}
      enableReinitialize
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <CustomInput type="text" label="Your Name" name="name" />
          <CustomInput type="email" label="Your Email" name="email" />
          <UserAvatar user={user} />
          <SecondaryButton disabled={isSubmitting} type="submit">
            {isSubmitting ? "loading..." : "Save settings"}
          </SecondaryButton>
        </StyledForm>
      )}
    </Formik>
  );
};

const mapStateToProps = (state) => ({ user: state.auth.currentUser });
const mapDispatchToProps = (dispatch) => ({
  updateUser: (body) => dispatch(updateUser(body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingForm);
