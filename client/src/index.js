import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { applyMiddleware, compose } from "redux";
import { legacy_createStore as createstore } from "redux";
import { thunk } from "redux-thunk";
import Reducers from "./Reducers";

const store = createstore(Reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="171552256845-jov35uqpi9oa164arves10erv352pp6t.apps.googleusercontent.com">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GoogleOAuthProvider>
  </Provider>
);
