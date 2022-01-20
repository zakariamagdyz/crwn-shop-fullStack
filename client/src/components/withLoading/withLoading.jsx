import React from "react";

const withLoading =
  (WrappedComponent) =>
  ({ isLoading, ...others }) => {
    return isLoading ? <p>Loading...</p> : <WrappedComponent {...others} />;
  };

export default withLoading;
