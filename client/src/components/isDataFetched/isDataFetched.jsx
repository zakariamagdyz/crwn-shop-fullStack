import React from "react";
import Spinner from "../Spinner/spinner";
import Message from "../message/message";

const isDataFetched =
  (WrappedComponent) =>
  ({ isLoading, error, emptyMessage, errorMessage, results, ...others }) => {
    if (isLoading) {
      return <Spinner />;
    }

    if (error) {
      console.log(error.message);
      return (
        <Message>
          {errorMessage
            ? errorMessage
            : "Something went wrong, Please try again later :("}
        </Message>
      );
    }

    return results && results.length > 0 ? (
      <WrappedComponent {...others} results={results} />
    ) : (
      <Message>
        {emptyMessage ? emptyMessage : "There's is nothing to show yet :)"}
      </Message>
    );
  };

export default isDataFetched;
