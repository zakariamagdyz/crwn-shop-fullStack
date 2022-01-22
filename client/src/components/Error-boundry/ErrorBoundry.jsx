import React from "react";

import Error from "../Error/errorComponent";

export default class ErrorBoundry extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Error
          message="Sorry this page is broken"
          imageUrl="https://i.imgur.com/yW2W9SC.png"
        />
      );
    }
    return this.props.children;
  }
}
