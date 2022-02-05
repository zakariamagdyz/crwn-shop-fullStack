import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { isSignedIn } from "../../redux/auth/authAsyncActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
/////////////////// import components ////////////////////////////
import { GlobalStyle } from "./globalStyle";
import RouterConfig from "../../components/RouterConfig/RouterConfig";
import Header from "../../components/header/header.component";

/////////////////////////////////////////////////////////////////////////////

const App = ({ isLoggedIn, checkForUser }) => {
  // check if user is logged in and fetch app data from backend
  useEffect(() => {
    checkForUser();
  }, [checkForUser]);

  /// return Jsx
  return (
    <Fragment>
      <GlobalStyle />
      <ToastContainer />
      <Header isLoggedIn={isLoggedIn} />
      <RouterConfig />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return { isLoggedIn: state.auth.isLoggedIn };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkForUser: () => dispatch(isSignedIn()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
