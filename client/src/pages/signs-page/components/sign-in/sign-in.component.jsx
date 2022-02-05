import { connect } from "react-redux";
import CustomInput from "../../../../components/input-box/CustomInput";
import CustomBtn from "../../../../components/custom-btn/customBtn.component";
import { signIn } from "../../../../redux/auth/authAsyncActions";
import { FormContainer } from "./formContainer.styles";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const SignIn = ({ handleSignIn }) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    handleSignIn(values);
  };

  return (
    <FormContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <CustomInput name="email" label="Email" type="email" />

            <CustomInput name="password" type="password" label="Password" />

            <CustomBtn type="submit">Sign in</CustomBtn>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

const mapDispatchToprops = (dispatch) => ({
  handleSignIn: (user) => dispatch(signIn(user)),
});
export default connect(null, mapDispatchToprops)(SignIn);
