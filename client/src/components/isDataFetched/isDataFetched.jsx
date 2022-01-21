import React from "react";

const isDataFetched =
  (WrappedComponent) =>
  ({ isLoading, error, emptyMessage, errorMessage, results, ...others }) => {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      console.log(error.message);
      return (
        <p>
          {errorMessage
            ? errorMessage
            : "Something went wrong, Please try again :("}
        </p>
      );
    }

    return results && results.length > 0 ? (
      <WrappedComponent {...others} results={results} />
    ) : (
      <p>{emptyMessage ? emptyMessage : "there is nothing to show"}</p>
    );
  };

export default isDataFetched;
