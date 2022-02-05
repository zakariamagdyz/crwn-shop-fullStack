import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { connect } from "react-redux";

const RequireAuth = ({ isLoggedIn }) => {
  const location = useLocation();
  if (!isLoggedIn)
    return <Navigate to="/signin" state={{ path: location.pathname }} />;
  return <Outlet />;
};

const mapStateToProps = (state) => {
  return { isLoggedIn: state.auth.isLoggedIn };
};

export default connect(mapStateToProps)(RequireAuth);
