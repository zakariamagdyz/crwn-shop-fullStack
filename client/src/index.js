import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./features/app/App";
import store from "./features/app/appStore";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import ErrorBoundry from "./features/Error-boundry/ErrorBoundry";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ErrorBoundry>
          <App />
        </ErrorBoundry>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
