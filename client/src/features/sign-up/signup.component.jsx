import { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../input-box/customInput.component";
import CustomBtn from "../custom-btn/customBtn.component";
import "../sign-in/sign-in.styles.scss";
import { signUp } from "../auth/authAsyncActions";

const SignUp = ({ handleSignUp }) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isDataValid(state)) {
      // add user record to database
      handleSignUp(state);
    }
  };

  const isDataValid = ({ password, passwordConfirm }) => {
    if (password.trim().length < 8)
      return alert("Minmum length for password is 8 characters");
    if (password.trim() !== passwordConfirm.trim())
      return alert("Two passwords do not match");

    return true;
  };

  return (
    <div className="sign-up">
      <h2>I don't have an acount</h2>
      <span>setup with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          label="Display Name"
          name="name"
          value={state.name}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="email"
          label="Email"
          name="email"
          value={state.email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          value={state.password}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          label="Confirm Password"
          name="passwordConfirm"
          value={state.passwordConfirm}
          handleChange={handleChange}
          required
        />
        <CustomBtn type="submit">Sign up</CustomBtn>
      </form>
    </div>
  );
};

const mapDispatchToprops = (dispatch) => ({
  handleSignUp: (user) => dispatch(signUp(user)),
});
export default connect(null, mapDispatchToprops)(SignUp);
