import SignIn from "./components/sign-in/sign-in.component";
import SignUp from "./components/sign-up/signup.component";
import { Navigate, useLocation } from "react-router-dom";
import { SignsContainer } from "./signs.styles";
import { connect } from "react-redux";

const SingsPage = ({ isLoggedIn }) => {
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  if (isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <SignsContainer>
      <SignIn />
      <SignUp />
    </SignsContainer>
  );
};

const mapStateToProps = (state) => ({ isLoggedIn: state.auth.isLoggedIn });
export default connect(mapStateToProps)(SingsPage);
