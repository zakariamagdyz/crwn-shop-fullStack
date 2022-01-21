const isEmpty =
  (WrappedComponent) =>
  ({ results, emptyMessage, ...others }) => {
    return results && results.length ? (
      <WrappedComponent results={results} {...others} />
    ) : (
      <p>{emptyMessage ? emptyMessage : "There's notheing to show"}</p>
    );
  };

export default isEmpty;
