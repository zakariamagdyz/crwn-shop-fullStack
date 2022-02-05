import { connect } from "react-redux";
import CustomInput from "../../../../components/input-box/CustomInput";
import CustomBtn from "../../../../components/custom-btn/customBtn.component";
import { signUp } from "../../../../redux/auth/authAsyncActions";
import { FormContainer } from "../sign-in/formContainer.styles";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const SignUp = ({ handleSignUp }) => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().max(40).required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
    passwordConfirm: Yup.string()
      .min(8)
      .required()
      .test("passwordConfirm", "The two passwords not match", function (val) {
        return this.parent.password === val;
      }),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    handleSignUp(values);
  };

  return (
    <FormContainer>
      <h2>I don't have an acount</h2>
      <span>setup with your email and password</span>
      <Formik
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        {({ isValid, isSubmitting }) => (
          <Form>
            <CustomInput type="text" label="Display Name" name="name" />
            <CustomInput type="email" label="Email" name="email" />
            <CustomInput type="password" label="Password" name="password" />
            <CustomInput
              type="password"
              label="Confirm Password"
              name="passwordConfirm"
            />
            <CustomBtn type="submit">Sign up</CustomBtn>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

const mapDispatchToprops = (dispatch) => ({
  handleSignUp: (user) => dispatch(signUp(user)),
});
export default connect(null, mapDispatchToprops)(SignUp);
