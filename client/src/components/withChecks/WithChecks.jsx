import React from "react";
import Spinner from "../Spinner/spinner";
import Message from "../message/message";

const withChecks =
  (WrappedComponent) =>
  ({ isLoading, error, emptyMessage, data, ...others }) => {
    if (isLoading) {
      return <Spinner />;
    }

    if (error) {
      return <Message error>Something went wrong, Please try again :(</Message>;
    }

    return (data && data.length) ||
      (data instanceof Object && Object.keys(data).length) ? (
      <WrappedComponent {...others} data={data} />
    ) : (
      <Message>
        {emptyMessage ? emptyMessage : "There's is nothing to show yet :)"}
      </Message>
    );
  };

export default withChecks;
