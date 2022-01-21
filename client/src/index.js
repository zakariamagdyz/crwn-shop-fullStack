import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/app/App";
import store from "./redux/appStore";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import ErrorBoundry from "./components/Error-boundry/ErrorBoundry";

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
