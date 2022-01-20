import { useState } from "react";
import { connect } from "react-redux";
import CustomInput from "../input-box/customInput.component";
import CustomBtn from "../custom-btn/customBtn.component";
import "./sign-in.styles.scss";
import { signIn } from "../../redux/auth/authAsyncActions";

const SignIn = ({ handleSignIn }) => {
  const [state, setState] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    return setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // get data and check if is it valid | return alert
    //data not empty,trimmed , in lowercase  // if there are no html require
    if (!isDataValid(state)) return alert("Data is not valid");
    // get local storage data if it dosn't exist return error
    // check if user data is the same in local storage
    if (!isDataEqual) return alert("incorrect email or password");
    // log in
    handleSignIn({ email: state.email, password: state.password });
    // .unwrap()
    // .then((value) => console.log(value));
  };

  const isDataValid = ({ email, password }) => {
    if (email.trim() === "" || password.trim() === "") return false;
    return true;
  };

  const isDataEqual = (state, user) => {
    if (
      state.email.trim().toLowerCase() === user.email.trim().toLowerCase() &&
      state.password.trim().toLowerCase() === user.password.trim().toLowerCase()
    )
      return true;
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <CustomInput
          name="email"
          label="Email"
          type="text"
          value={state.email}
          handleChange={handleChange}
          required
        />

        <CustomInput
          name="password"
          type="password"
          label="password"
          value={state.password}
          handleChange={handleChange}
          required
        />

        <CustomBtn type="submit">Sign in</CustomBtn>
      </form>
    </div>
  );
};

const mapDispatchToprops = (dispatch) => ({
  handleSignIn: (user) => dispatch(signIn(user)),
});
export default connect(null, mapDispatchToprops)(SignIn);
