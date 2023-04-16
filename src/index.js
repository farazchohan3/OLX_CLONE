import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Routes Provider
import { BrowserRouter } from "react-router-dom";

// Redux Store and Provider
import { Provider } from "react-redux";
import store from "./Store/ReduxStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
