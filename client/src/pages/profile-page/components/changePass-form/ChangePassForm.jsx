import React from "react";
import { StyledForm } from "../../profilePage.styles";
import FormInput from "../../../../components/input-box/CustomInput";
import SecondaryButton from "../../../../components/secondaryButton/SecondaryButton";
import { updatePassword } from "../../../../redux/auth/authAsyncActions";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

const ChangePassForm = ({ changePassword }) => {
  const initialValues = {
    currentPassword: "",
    newPassword: "",
    passwordConfirm: "",
  };

  const validationSchema = Yup.object({
    currentPassword: Yup.string().min(8).required(),
    newPassword: Yup.string().min(8).required(),
    passwordConfirm: Yup.string()
      .required()
      .min(8)
      .test("PasswordConfirm", "Two passwords don't match", function (val) {
        return this.parent.password === val;
      }),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    await changePassword(values);
    setSubmitting(false);
  };

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      initialValues={initialValues}
    >
      {({ isValid, isSubmitting }) => (
        <StyledForm>
          <FormInput
            type="password"
            label="Current Password"
            name="currentPassword"
          />
          <FormInput type="password" label="New Password" name="newPassword" />
          <FormInput
            type="password"
            label="Confirm Password"
            name="passwordConfirm"
          />
          <SecondaryButton disabled={!isValid} type="submit">
            {isSubmitting ? "loading..." : "Save password"}
          </SecondaryButton>
        </StyledForm>
      )}
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changePassword: (body) => dispatch(updatePassword(body)),
});

export default connect(null, mapDispatchToProps)(ChangePassForm);
